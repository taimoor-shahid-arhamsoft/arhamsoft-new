import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email")
    .required("Email is required"),
  phone: Yup.string()
  .required("Phone is required"),
  company: Yup.string().required("Company name is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
  selectedOption: Yup.object()
    .shape({
      value: Yup.string().required("Select a question"),
      label: Yup.string().required("Select a question"),
    })
    .required("Select a question"),
});
