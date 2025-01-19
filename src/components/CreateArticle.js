import React, { useState } from 'react';
import axios from 'axios';
import './CreateArticle.css';
const CreateArticle = () => {
  const [form, setForm] = useState({ title: '', content: '', author: '' });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('author', form.author);
    if (image) {
      formData.append('image', image);
    }

    axios.post('https://s-l8ac-srinu-s-projects.vercel.app/api/articles', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(() => alert('Article created!'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="content" placeholder="Content" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateArticle;
