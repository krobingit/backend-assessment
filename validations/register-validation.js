import joi from "joi";

const registerSchema = joi.object({
  full_name: joi.string().required("Full name is required"),
  email: joi.string().required("Email is required"),
  country: joi.string().allow(null),
  mobile_no: joi.string().allow(null),
  city: joi.string().allow(null),
  state: joi.string().allow(null),
  message: joi.string().allow(null),
});

export { registerSchema };
