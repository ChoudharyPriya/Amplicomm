import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Shop by brand", href: "#" },
    {
  name: "Shop by category",
  href: "#",
  dropdown: [
    { name: "Vitamins", href: "#" },
    { name: "Fitness", href: "#" },
    { name: "Skincare", href: "#" },
    { name: "Supplements", href: "#" }
    ]
    },
    { name: "Meet us CMO", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">HealthStore</h1>
          </div>

          {/* Desktop Navigation - Hidden on smaller screens */}
          <nav className="hidden lg:flex flex-1 justify-center max-w-2xl mx-6">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </a>

                  {/* Dropdown items */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                      {         item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>


          {/* Search Bar */}
          <div className="flex-1 max-w-sm mx-4 hidden md:block lg:max-w-md">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </form>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-primary h-10 w-10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-primary relative h-10 w-10">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700 h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-2 pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-5 top-3 h-4 w-4 text-gray-400" />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
