import express from "express";
import {
  createBook,
  getAllBooks,
  searchBooksByAuthor,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/search", searchBooksByAuthor);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
