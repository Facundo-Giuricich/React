import useForm from "../hooks/useForm";

const Register = () => {
  const { formValues, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show form data in console
    console.log("Register form data:", formValues);
    
    // Reset the form
    handleReset();
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formValues.firstname}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;