import * as Yup from "yup";

export const EnquiryFormModel = Yup.object({
    name: Yup.string().required("Enter a first name"),
    email: Yup.string().email("Enter a valid email address").required("Required"),
    interest: Yup.string().required("Enter a first name"),
    message: Yup.string().required("Enter a first name"),
});
