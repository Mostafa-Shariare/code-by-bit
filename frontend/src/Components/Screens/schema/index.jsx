import * as Yup from "yup";

export const registerSchema = Yup.object({
	username: Yup.string().min(2).max(25).required("Username is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
	cpassword: Yup.string()
		.required("Confirm your password")
		.oneOf([Yup.ref("password"), null], "Passwords must match"),
	role: Yup.string().required("Profession is required"),
});

export const loginSchema = Yup.object({
	username: Yup.string().required("Username is required"),
	password: Yup.string().required("Password is required"),
});