import React, { createContext, useState, useContext, ReactNode } from 'react';

// Tipe data item di keranjang
interface CartItem {
  id: number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}

// Tipe data Context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, type: 'plus' | 'minus') => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Fungsi tambah ke keranjang
  const addToCart = (newItem: CartItem) => {
    setCartItems(prevItems => {
      // Cek apakah barang sudah ada di keranjang
      const existingItem = prevItems.find(item => item.id === newItem.id);

      if (existingItem) {
        // Kalau sudah ada, update jumlahnya saja
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        );
      } else {
        // Kalau belum ada, masukkan sebagai barang baru
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, type: 'plus' | 'minus') => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity =
            type === 'plus' ? item.quantity + 1 : item.quantity - 1;
          // Minimal 1, tidak bisa 0 (kalau mau hapus, pakai tombol hapus)
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Hitung total semua barang untuk badge (misal: 2 Tuna + 1 Pedas = 3 items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook biar gampang dipanggil
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
