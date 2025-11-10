import Joi from "joi";

export const bookSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  genre: Joi.string().max(50).optional(),
  publishedYear: Joi.number().integer().min(1500).max(new Date().getFullYear()).optional(),
  author: Joi.string().required()
});
