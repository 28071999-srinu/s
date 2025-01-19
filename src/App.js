import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle'; // Import the Edit Article component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="page-container">
          <Routes>
            {/* General Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Article Management */}
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/create" element={<CreateArticle />} />
            <Route path="/edit/:id" element={<EditArticle />} /> {/* Add edit route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
