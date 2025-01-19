import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditArticle = () => {
  const { id } = useParams(); // Get article ID from the URL
  const [article, setArticle] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://s-l8ac-srinu-s-projects.vercel.app/api/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://s-l8ac-srinu-s-projects.vercel.app/api/articles/${id}`, article)
      .then(() => {
        alert('Article updated successfully');
        navigate(`/article/${id}`); // Redirect to the article details page
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Edit Article</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={article.title} 
          onChange={handleChange} 
          placeholder="Title" 
        />
        <textarea 
          name="content" 
          value={article.content} 
          onChange={handleChange} 
          placeholder="Content"
        />
        <input 
          type="text" 
          name="author" 
          value={article.author} 
          onChange={handleChange} 
          placeholder="Author" 
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditArticle;
