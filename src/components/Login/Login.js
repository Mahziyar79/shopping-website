import { useFormik } from "formik";
import { Link,useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import { loginService } from "../../services/loginService";
import "./login.css";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../../Context/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react/cjs/react.development";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),
  password: Yup.string()
    .required("Password is required")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
});

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthActions()
  const auth = useAuth();

  const query = useQuery();
  const redirect = query.get('redirect') || "/";

  useEffect(()=>{
    if(auth) navigate(redirect);
  },[auth,redirect])

  const onSubmit = async(values) => {
    try {
      const {data} = await loginService(values);
      setAuth(data);
      navigate(redirect)
      toast.success(`Welcome ${data.name}`)
      
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="signup-parent">
      <form className="form-signup" onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          Login
        </button>
        <Link to={`/signup?redirect=/${redirect}`} className="issignup">
          <p>Not Signup yet ?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
