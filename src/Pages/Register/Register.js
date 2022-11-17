import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Icon, Input } from "semantic-ui-react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser, updateUserProfile, verifyEmail, logOut } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleLogout = () => {
    logOut()
      .then((res) => {})
      .catch((error) => {});
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        toast.success("Please Login your account please.");

        setTimeout(() => {
          navigate("/login");
          handleLogout();
        }, 1000);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  return (
    <div>
      <TittleHeader title={"Sign Up"}></TittleHeader>
      <section className="w-1/2 my-12 mx-auto rounded shadow-lg">
        <div className="grid grid-cols-2 ">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co/b1nFf4x/professional-programmer-working-late-dark-office.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",

              overflow: "hidden",
            }}
          ></div>
          <div className="mx-auto">
            <form onSubmit={handleRegister} className="py-12 mx-auto">
              <Input
                className=""
                iconPosition="left"
                placeholder="Name"
                name="name"
                size="big"
              >
                <Icon name="user" />
                <input />
              </Input>
              <br />
              <br />
              <Input
                iconPosition="left"
                placeholder="Photo Url"
                name="image"
                size="big"
              >
                <Icon name="image" />
                <input />
              </Input>
              <br />
              <br />
              <Input
                iconPosition="left"
                placeholder="Email"
                name="email"
                size="big"
              >
                <Icon name="at" />
                <input />
              </Input>
              <br />
              <br />
              <Input
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                size="big"
              >
                <Icon name="key" />
                <input />
              </Input>
              <br />
              <br />

              <div className="text-center">
                <button className="btn btn-info text-white" type="submit">
                  Sign Up
                </button>
              </div>
              <p className="my-5 text-center">
                Already have an account?{" "}
                <Link className="login-a" to="/login">
                  {" "}
                  Please Login
                </Link>
              </p>
              <div className="or-text-box">
                <p className="or-text text-center">OR</p>
              </div>
              <div className="social-login mt-5 text-center">
                <FcGoogle className="inline fa-login" size={"2em"}></FcGoogle>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
