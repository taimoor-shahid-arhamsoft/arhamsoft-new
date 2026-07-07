import * as yup from "yup";

export const requestDemoValidationSchema = yup.object().shape({
  name: yup
    .string()
    .max(50)
    .matches(
      /^[a-zA-Z\s]*$/,
      "Name cannot contain special characters or numbers"
    )
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
    contactNo: yup
    .string()
    .required("Phone is required"),
  message: yup.string().min(10).required("Message is required"),
  dateTime: yup
    .date()
    .typeError("Invalid date and time")
    .required("Date and time are required"),
});
