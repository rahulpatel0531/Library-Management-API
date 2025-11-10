import Joi from "joi";

export const authorSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  bio: Joi.string().max(300).optional(),
  age: Joi.number().integer().min(10).max(120).optional()
});