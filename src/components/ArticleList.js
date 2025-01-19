import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/articles')
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteArticle = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      axios.delete(`http://localhost:3000/api/articles/${id}`)
        .then(() => {
          alert('Article deleted successfully');
          setArticles(articles.filter(article => article._id !== id)); // Remove deleted article from the list
        })
        .catch(err => {
          console.error('Error deleting article:', err);
          alert('There was an error deleting the article.');
        });
    }
  };

  return (
    <div className="article-list">
      <h1>Articles</h1>
      <Link to="/create" className="create-article-btn">Create New Article</Link>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <Link to={`/article/${article._id}`}>
              <h3>{article.title}</h3>
              {article.image && <img src={`http://localhost:3000/${article.image}`} alt={article.title} />}
            </Link>
            <div className="article-actions">
              <Link to={`/edit/${article._id}`} className="edit-btn">Edit</Link>
              <button 
                className="delete-btn" 
                onClick={() => deleteArticle(article._id)} // Delete article
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
