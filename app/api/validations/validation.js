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
