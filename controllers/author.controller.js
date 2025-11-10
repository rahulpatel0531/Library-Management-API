import Author from "../models/author.model.js";

export const createAuthor = async (req, res) => {
  try {
    console.log("api called")
    const author = await Author.create(req.body);
    res.status(201).json({messsage:"Author created.", author});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json({message:"Fetch authors", authors});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
