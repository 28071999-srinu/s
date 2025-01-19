import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import CreateArticle from './CreateArticle';

const ArticleManagement = () => {
  return (
    <div className="article-management-container">
      <Routes>
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/create" element={<CreateArticle />} />
      </Routes>
    </div>
  );
};

export default ArticleManagement;
