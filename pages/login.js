import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });
  async function onSubmit(values) {
    await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    router.push("/");
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="details">Enter LogIn Details</div>
      <div className="form">
        <input
          type="email"
          name="email"
          placeholder="email"
          {...formik.getFieldProps("email")}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          {...formik.getFieldProps("password")}
        />
        <div className="button">
          <button type="submit">Login</button>
        </div>
        <div className="signup">
          Dont have an account?
          <span
            style={{
              cursor: "pointer",
              color: "#da0037",
            }}
            onClick={()=>router.push('/register')}
          >
            {" "}
            Sign Up
          </span>
        </div>
      </div>
    </form>
  );
}
