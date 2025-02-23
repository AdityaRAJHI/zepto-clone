import React from 'react';
import { Search, ShoppingBag, ChevronDown, Clock3, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold text-[#44D62C]">zepto</h1>
              <div className="flex items-center space-x-2">
                <span>Delivery in</span>
                <button className="flex items-center space-x-1 bg-[#2D2D2D] px-3 py-1 rounded">
                  <span>Mumbai</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2">
                <ShoppingBag />
                <span>Cart</span>
              </button>
              <button className="bg-[#44D62C] px-6 py-2 rounded font-medium">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Fresh groceries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold text-white mb-6">
                Groceries delivered in minutes
              </h2>
              <div className="flex">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search for groceries"
                    className="w-full px-4 py-3 pr-12 rounded-l focus:outline-none"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <button className="bg-[#44D62C] px-8 py-3 rounded-r font-medium text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <Clock3 size={32} className="text-[#44D62C]" />
              <div>
                <h3 className="font-semibold text-lg">10-minute delivery</h3>
                <p className="text-gray-600">Get your groceries right away</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <ShoppingBag size={32} className="text-[#44D62C]" />
              <div>
                <h3 className="font-semibold text-lg">Wide Selection</h3>
                <p className="text-gray-600">Over 5000+ products available</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <Search size={32} className="text-[#44D62C]" />
              <div>
                <h3 className="font-semibold text-lg">Best Prices</h3>
                <p className="text-gray-600">Save more on your daily needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Premium Coffee</h2>
            <button className="text-[#44D62C] font-medium flex items-center">
              See All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {coffeeProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-4 relative">
                <div className="absolute top-2 left-2 bg-[#6B21A8] text-white text-xs px-2 py-1 rounded">
                  {product.discount}% Off
                </div>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.volume}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-bold">₹{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                </div>
                <button className="w-full py-2 border-2 border-[#FF3366] text-[#FF3366] rounded-lg font-medium hover:bg-[#FF3366] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Elevate Yourself</h2>
            <button className="text-[#44D62C] font-medium flex items-center">
              See All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {electronicsProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-4 relative">
                <div className="absolute top-2 left-2 bg-[#6B21A8] text-white text-xs px-2 py-1 rounded">
                  {product.discount}% Off
                </div>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-medium mb-1 text-sm">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.quantity}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-bold">₹{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                </div>
                <button className="w-full py-2 border-2 border-[#FF3366] text-[#FF3366] rounded-lg font-medium hover:bg-[#FF3366] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Wholesome Meals</h2>
            <button className="text-[#44D62C] font-medium flex items-center">
              See All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {meals.map((meal, index) => (
              <div key={index} className="bg-white rounded-lg p-4 relative">
                <div className="absolute top-2 left-2 bg-[#6B21A8] text-white text-xs px-2 py-1 rounded">
                  {meal.discount}% Off
                </div>
                <img src={meal.image} alt={meal.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-medium mb-1">{meal.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{meal.weight}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-bold">₹{meal.price}</span>
                  <span className="text-gray-400 line-through text-sm">₹{meal.originalPrice}</span>
                </div>
                <button className="w-full py-2 border-2 border-[#FF3366] text-[#FF3366] rounded-lg font-medium hover:bg-[#FF3366] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4">Fruits & Vegetables</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Baby Food</li>
                <li>Breakfast & Sauces</li>
                <li>Cleaning Essentials</li>
                <li>Homegrown Brands</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Atta, Rice, Oil & Dals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Dairy, Bread & Eggs</li>
                <li>Tea, Coffee & More</li>
                <li>Home Needs</li>
                <li>Paan Corner</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Masala & Dry Fruits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Cold Drinks & Juices</li>
                <li>Biscuits</li>
                <li>Electricals & Accessories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Sweet Cravings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Munchies</li>
                <li>Makeup & Beauty</li>
                <li>Hygiene & Grooming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Frozen Food & Ice Creams</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Meats, Fish & Eggs</li>
                <li>Bath & Body</li>
                <li>Health & Baby Care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>Delivery Areas</li>
                <li>Careers</li>
                <li>Customer Support</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Responsible Disclosure Policy</li>
                <li>Mojo - a Zepto Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Download App</h4>
              <div className="space-y-4">
                <button className="w-full bg-[#2D2D2D] px-4 py-2 rounded hover:bg-[#3D3D3D]">
                  Get it on play store
                </button>
                <button className="w-full bg-[#2D2D2D] px-4 py-2 rounded hover:bg-[#3D3D3D]">
                  Get it on app store
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="text-sm text-gray-400">
              <h5 className="font-bold mb-2">Products</h5>
              <p className="mb-4">Bottle gourd | Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry | Papaya | Dragon fruit</p>
              <h5 className="font-bold mb-2">Brands</h5>
              <p className="mb-4">Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil | Nandini Milk | Amul | Mother Dairy Near Me | Fortune Oil</p>
              <h5 className="font-bold mb-2">Categories</h5>
              <p className="mb-4">Grocery | Curd | Hukka flavour | Paan shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price</p>
            </div>
            <p className="text-sm text-gray-500 mt-8">© KiranaKart Technologies Private Limited</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const categories = [
  {
    name: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Dairy & Breakfast",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Personal Care",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Household",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const coffeeProducts = [
  {
    name: "Vietnamese Cold Coffee",
    volume: "450ml",
    price: "189",
    originalPrice: "199",
    discount: "5",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Spanish Coffee",
    volume: "350ml",
    price: "169",
    originalPrice: "179",
    discount: "5",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Americano",
    volume: "250ml",
    price: "129",
    originalPrice: "149",
    discount: "13",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hazelnut Cold Coffee",
    volume: "350ml",
    price: "169",
    originalPrice: "179",
    discount: "5",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Classic Cold Coffee",
    volume: "350ml",
    price: "159",
    originalPrice: "169",
    discount: "5",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Iced Americano",
    volume: "450ml",
    price: "129",
    originalPrice: "149",
    discount: "13",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hazelnut Cappuccino",
    volume: "250ml",
    price: "159",
    originalPrice: "169",
    discount: "5",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const electronicsProducts = [
  {
    name: "Lifelong Llm270 Head Massager",
    quantity: "1 piece",
    price: "279",
    originalPrice: "699",
    discount: "60",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Portronics Konnect B+ Cable",
    quantity: "1 piece",
    price: "189",
    originalPrice: "499",
    discount: "72",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nu Republic Usb Type C Cable",
    quantity: "1 piece",
    price: "238",
    originalPrice: "1299",
    discount: "81",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const meals = [
  {
    name: "Chole Kulche",
    weight: "450g",
    price: "189",
    originalPrice: "199",
    discount: "5",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dal Makhani",
    weight: "250g",
    price: "169",
    originalPrice: "179",
    discount: "7",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Wheat Chapati - Pack of 3",
    weight: "Pack of 3",
    price: "129",
    originalPrice: "149",
    discount: "8",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Pav Bhaji",
    weight: "445g",
    price: "169",
    originalPrice: "179",
    discount: "2",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default App;
