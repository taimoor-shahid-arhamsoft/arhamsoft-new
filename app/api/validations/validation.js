import Joi from "joi";

export const validateContactFormInput = (data) => {
  const schema = Joi.object({
    subject: Joi.string(),
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(7).required(),
    company: Joi.string().min(2).max(50).optional(),
    message: Joi.string().min(10).required(),
  });

  const validation = schema.validate(data);
  if (validation.error) return { error: validation.error };

  const sanitizedData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    message: data.message,
  };

  return { sanitizedData };
};

export const validateManualWorkAuditInput = (data) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(2).max(50).required().messages({
      "string.min": "Name must be at least 2 characters",
      "string.max": "Name must be under 50 characters",
      "string.empty": "Name is required",
      "any.required": "Name is required",
    }),
    email: Joi.string().trim().email().max(100).required().messages({
      "string.email": "Please enter a valid email address",
      "string.max": "Email must be under 100 characters",
      "string.empty": "Work email is required",
      "any.required": "Work email is required",
    }),
    task: Joi.string().trim().min(10).max(1000).required().messages({
      "string.min": "Please share a bit more detail (at least 10 characters)",
      "string.max": "Please keep this under 1000 characters",
      "string.empty": "Please tell us the task your team repeats",
      "any.required": "Please tell us the task your team repeats",
    }),
  });

  const validation = schema.validate(data);
  if (validation.error) return { error: validation.error };

  return { sanitizedData: data };
};
