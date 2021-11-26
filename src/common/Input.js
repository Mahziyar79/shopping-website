import "./input.css";

const Input = ({ formik, label, name, type = "text" }) => {
    return (
      <div className="form-control">
        <label>{label}</label>
        <input
          type={type}
          placeholder={`${name}...`}
          name={name}
          {...formik.getFieldProps(name)}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="error-field">{formik.errors[name]}</div>
        )}
      </div>
    );
  };
  
  export default Input;
  