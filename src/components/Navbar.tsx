import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              ShopHub
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};