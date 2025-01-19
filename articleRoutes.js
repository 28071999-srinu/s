const express = require('express');
const multer = require('multer');
const Article = require('../models/Article');
const router = express.Router();

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

// Create Article with Image
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newArticle = new Article({
      title,
      content,
      author,
      image: req.file ? req.file.path : null, // Save image path
    });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Single Article
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Update Article
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedArticle) return res.status(404).json({ error: 'Article not found' });
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// DELETE Article
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedArticle = await Article.findByIdAndDelete(id); // Delete article by its ID
    if (!deletedArticle) return res.status(404).json({ error: 'Article not found' });
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting article', message: error.message });
  }
});

module.exports = router;
