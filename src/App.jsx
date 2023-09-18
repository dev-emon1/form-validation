import axios from "axios";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/userdata", {
      fullname: data.fullName,
      email: data.email,
      password: data.password,
    });
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center mb-4">React Hook Form</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName", {
            required: "Fullname is required",
            maxLength: { value: 20, message: "Not more than 20 characters" },
            minLength: { value: 2, message: "Not less than 2 characters" },
          })}
        />
        {errors.fullName && <p>{errors.fullName?.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Enter an email",
            pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
          })}
        />
        {errors.email && <p>{errors.email?.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Enter password",
            minLength: { value: 6, message: "Must be 6 character or more" },
          })}
        />
        {errors.password && <p>{errors.password?.message}</p>}
        <input value="submit" type="submit" />
      </form>
    </>
  );
}

export default App;
