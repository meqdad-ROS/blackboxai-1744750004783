import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-amazon-light text-white px-4 py-2">
      <div className="max-w-[1500px] mx-auto flex items-center space-x-6 text-sm">
        <Link href="#" className="flex items-center hover:text-amazon-yellow">
          <i className="fas fa-bars text-lg mr-1"></i>
          All
        </Link>
        <Link href="#" className="hover:text-amazon-yellow">Today's Deals</Link>
        <Link href="#" className="hover:text-amazon-yellow">Customer Service</Link>
        <Link href="#" className="hover:text-amazon-yellow">Registry</Link>
        <Link href="#" className="hover:text-amazon-yellow">Gift Cards</Link>
        <Link href="#" className="hover:text-amazon-yellow">Sell</Link>
        <Link href="#" className="text-amazon-yellow font-bold">Shop deals in Electronics</Link>
      </div>
    </nav>
  );
};

export default NavBar;
