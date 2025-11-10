import Book from "../models/book.model.js";
import Author from "../models/author.model.js";

// ✅ Create book
export const createBook = async (req, res) => {
  try {
    const { title, genre, publishedYear, author } = req.body;
    const authorExists = await Author.findById(author);
    if (!authorExists) return res.status(404).json({ message: "Author not found" });

    const book = await Book.create({ title, genre, publishedYear, author });
    res.status(201).json({message:"Book created.", book});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Get all books (with author details)
export const getAllBooks = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const books = await Book.find()
      .populate("author")
      .limit(limit)
      .skip((page - 1) * limit);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Search books by author name
export const searchBooksByAuthor = async (req, res) => {
  try {
    const { name } = req.query;
    const author = await Author.findOne({ name: new RegExp(name, "i") });
    if (!author) return res.status(404).json({ message: "Author not found" });

    const books = await Book.find({ author: author._id }).populate("author");
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update book
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Delete book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
