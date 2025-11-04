import useForm from "../hooks/useForm";

const Login = ({ onLogin }) => {
  const { formValues, handleChange, handleReset } = useForm({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the parent function with username
    onLogin(formValues.username);
    
    // Reset the form
    handleReset();
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;