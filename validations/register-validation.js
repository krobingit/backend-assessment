import joi from "joi";

const registerSchema = joi.object({
  full_name: joi.string().required("Full name is required"),
  email: joi.string().required("Email is required"),
  country: joi.string(),
  mobile_no: joi.string(),
  city: joi.string(),
  state: joi.string(),
  message: joi.string(),
});

export { registerSchema };
