import { useState } from 'react'
import './App.css'
import { FaShoppingCart, FaBell, FaChevronDown, FaSearch, FaFilter } from 'react-icons/fa'

function ProductCard({ name, price, stock, image }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        <div className="product-overlay">
          <button className="add-to-cart-btn">เพิ่มลงตะกร้า</button>
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className="price-stock">
          <p className="price">฿ {price}</p>
          <p className="stock">มีอยู่ {stock}</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  const products = [
    {
      name: 'iPhone 15 Pro Max',
      price: '45,900.00',
      stock: 5,
      image: '/images/iphone.png'
    },
    {
      name: 'MacBook Pro M3',
      price: '69,900.00',
      stock: 3,
      image: '/images/macbook.png'
    },
    {
      name: 'AirPods Pro 2',
      price: '12,900.00',
      stock: 8,
      image: '/images/airpods.png'
    },
    {
      name: 'Apple Watch Series 9',
      price: '15,900.00',
      stock: 4,
      image: '/images/watch.png'
    },
    {
      name: 'iPad Pro M2',
      price: '39,900.00',
      stock: 6,
      image: '/images/ipad.png'
    },
    {
      name: 'Apple Pencil 2',
      price: '4,900.00',
      stock: 10,
      image: '/images/pencil.png'
    },
    {
      name: 'Magic Keyboard',
      price: '8,900.00',
      stock: 7,
      image: '/images/keyboard.png'
    },
    {
      name: 'AirTag 4 Pack',
      price: '3,900.00',
      stock: 12,
      image: '/images/airtag.png'
    }
  ]

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-text">PosSible</span>
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="ค้นหาสินค้า" />
        </div>
        <div className="user-info">
          <div className="notification">
            <FaBell size={20} />
            <span className="notification-badge">1</span>
          </div>
          <div className="cart">
            <FaShoppingCart size={20} />
            <span className="cart-badge">3</span>
          </div>
          <div className="user-profile">
            <img src="/images/avatar.png" alt="Admin" />
            <div className="user-details">
              <span className="user-name">ทิม คุก</span>
              <span className="user-role">Admin</span>
            </div>
            <FaChevronDown size={12} />
          </div>
        </div>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li className="nav-item">
              <span className="nav-icon">📊</span>
              <span>แดชบอร์ด</span>
            </li>
            <li className="nav-item active">
              <span className="nav-icon">🛒</span>
              <span>ออเดอร์ขาย</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">📦</span>
              <span>สินค้า</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">🎁</span>
              <span>โปรโมชั่น</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">📈</span>
              <span>ประวัติการขาย</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">⚙️</span>
              <span>จัดการ</span>
            </li>
          </ul>
        </nav>

        <main className="product-grid">
          <div className="product-header">
            <h2>เลือกสินค้า</h2>
            <div className="filter-button">
              <FaFilter size={14} />
              <span>ตัวกรอง</span>
            </div>
          </div>
          <div className="products-container">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
