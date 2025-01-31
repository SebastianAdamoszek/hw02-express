const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)
    .messages({
      "string.min": "Name must contain at least 3 letters",
      "string.max": "Name can contain no more than 30 letters",
      "string.pattern.base": "The name can consist of letters and spaces",
    }),
  email: Joi.string().email().messages({
    "string.email": "Invalid email format",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/)
    .messages({
      "string.pattern.base": "Invalid format. Example XXX-XXX-XXX",
    }),
  favorite: Joi.boolean().messages({
    "boolean.base": "Favorite must be a boolean value (true/false)",
  }),
});

const signupAndLoginSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,30}$/)
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must not be more than 30 characters",
      "string.pattern.base":
        "Password must contain at least one uppercase letter and one lowercase letter",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
  }),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
  }),
});

module.exports = {
  userSchema,
  signupAndLoginSchema,
  emailSchema,
};
