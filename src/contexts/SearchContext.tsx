
import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: any[];
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock products data for search
  const allProducts = [
    {
      id: '1',
      name: 'Wireless Pro Earbuds',
      price: 19999,
      originalPrice: 24999,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
      category: 'Audio',
      rating: 4.8,
      reviews: 1204,
      badge: 'Best Seller',
      trending: true
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 29999,
      originalPrice: 39999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      category: 'Wearables',
      rating: 4.6,
      reviews: 856,
      trending: true
    },
    {
      id: '3',
      name: 'Minimalist Backpack',
      price: 8999,
      originalPrice: 12099,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      category: 'Accessories',
      rating: 4.7,
      reviews: 432,
      badge: 'Eco-Friendly'
    },
    {
      id: '4',
      name: 'Gaming Mechanical Keyboard',
      price: 15999,
      originalPrice: 19999,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      category: 'Gaming',
      rating: 4.9,
      reviews: 2103
    }
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchResults,
      performSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};
