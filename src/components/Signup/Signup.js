import { useFormik } from "formik";
import { Link ,useNavigate} from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import { signupUser } from "../../services/signupService";
import "./signup.css";
import { toast } from "react-toastify";
import { useAuthActions } from "../../Context/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  password: "",
  PasswordConfirm: "",
  phoneNumber: "",
  terms: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(6, "must be at least 6 char"),
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),
    phoneNumber: Yup.string()
    .required("Phon Number is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string()
    .required("Password is required")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
    ,
  PasswordConfirm: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});

const SignUp = () => {

  const navigate = useNavigate();
  const setAuth = useAuthActions()

  const onSubmit = async (values) => {
    const {name,email,phoneNumber,password} = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password
    }
    try {
      const {data} = await signupUser(userData);
      setAuth(data);
      toast.success(`Welcome ${data.name}`)
      navigate('/')
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="signup-parent">
      <form className="form-signup" onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="Phone Number"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="PasswordConfirm"
          label="Password Confirmation"
          type="password"
        />
        <div className="terms">
          <input
            name="terms"
            id="conditions"
            type="checkbox"
            onChange={formik.handleChange}
          />
          <label className="terms-label" htmlFor="conditions">
            Terms and Conditions
          </label>
        </div>
        <button type="submit" disabled={!formik.isValid}>
          Sign Up
        </button>
        <Link to="/login" className="isloggedin">
          <p>Already Login ?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
