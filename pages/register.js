import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

export default function register() {
  const [msg, setMsg] = useState(null);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit,
  });
  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    await fetch("/api/auth/signUp", options).then((data) => {
      if (data) {
        if (data.status == "201") {
          router.push("/login");
        }
        if (data.status == "422") {
          console.log(data);
          setMsg("User Already Exists");
        }
        if (data.status === "301") {
          setMsg("Passwords do not match");
        }
        if (data.status === "500") {
          setMsg("Server error please try again");
        }
      }
    });
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form">
        <div className="details">Enter Your Details</div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            {...formik.getFieldProps("username")}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            {...formik.getFieldProps("password")}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="confirm password"
            {...formik.getFieldProps("cpassword")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
          }}
        >
          {msg && <div style={{ color: "red" }}>{msg}</div>}
          <div className="button">
            <button type="submit">Sign Up</button>
          </div>
        </div>
        <div className="signup">
          Already have an account?
          <span
            style={{
              cursor: "pointer",
              color: "#da0037",
            }}
            onClick={() => router.push("/login")}
          >
            {" "}
            Log In
          </span>
        </div>
      </div>
    </form>
  );
}
