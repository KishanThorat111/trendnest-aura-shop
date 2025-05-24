
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import ProductCard from '../components/Product/ProductCard';
import { useSearch } from '../contexts/SearchContext';
import { Search } from 'lucide-react';

const SearchResults = () => {
  const { searchQuery, searchResults } = useSearch();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          {searchQuery && (
            <p className="text-muted-foreground">
              {searchResults.length > 0 
                ? `Found ${searchResults.length} results for "${searchQuery}"`
                : `No results found for "${searchQuery}"`
              }
            </p>
          )}
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or browse our categories
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Audio', 'Gaming', 'Wearables', 'Tech'].map(category => (
                <span 
                  key={category}
                  className="px-3 py-1 text-sm bg-muted rounded-full hover:bg-muted/80 cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Start searching</h3>
            <p className="text-muted-foreground">
              Use the search bar above to find your favorite products
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;
