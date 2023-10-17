import * as Yup from "yup";

export const StartProjectFormModel = Yup.object({
	fullName: Yup.string().required("Full name is required"),
	businessName: Yup.string().required("Business name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	phoneNumber: Yup.string()
		.matches(/^[0-9]{8,}$/, "Phone number must contain at least 5 digits")
		.required("Phone number is required"),
});

export const JobApplicationFormModel = Yup.object({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	phone: Yup.string()
		.matches(/^[0-9]{8,}$/, "must be a number of at least 5 digits")
		.required("Phone number is required"),
	applyFor: Yup.string().required("This is required"),
	totalExp: Yup.string().required("This is required"),
	currentComp: Yup.string().required("This is required"),
	uploadCv: Yup.string().required("This is required"),
	document: Yup.mixed().nullable(),
});
