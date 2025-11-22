import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vidari from "../assets/vidari-logo-svg.svg";
import Button from "../components/Button";
import InPuts from "../components/InPut";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors: { email?: string; password?: string } = {};
    if (!formData.email) {
      formErrors.email = "Email is required";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }


    setFormData({
      email: "",
      password: "",
    });
    setErrors({});
    navigate("/");
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gray-100">
      <div className="absolute -top-12 -left-12 w-40 h-40 sm:w-40 sm:h-40 bg-primary-50 rounded-full z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center">
          <img
            src={vidari}
            alt="Vidari Logo"
            className="w-16 h-16 sm:w-16 sm:h-16"
          />
        </div>
      </div>
      <div className="absolute -bottom-12 -right-12 w-40 h-40 sm:w-40 sm:h-40 bg-primary-50 rounded-full z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center">
          <img
            src={vidari}
            alt="Vidari Logo"
            className="w-16 h-16 sm:w-16 sm:h-16"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full min-h-screen p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="hidden lg:flex lg:w-1/2 bg-primary-50 relative items-center justify-center p-8 lg:p-12">
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100 rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-100 bg-opacity-10 rounded-full"></div>

            <div className="relative z-10 bg-primary-100 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 max-w-sm">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-3">
                  Welcome to VidariPay
                </h2>
                <p className="text-lg opacity-90">
                  The Bridge That Unites Africa's Digital Services
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-50 mb-2 text-left">
                LOGIN
              </h1>
              <div className="mb-6 sm:mb-8 flex flex-row items-start">
                <p className="text-sm text-primary-100 mb-6 sm:mb-8 text-left flex flex-row">
                  to get started with 
                  <span className="font-bold ml-1 text-primary-50">Vidari</span>
                  <span className="font-bold">Pay</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <InPuts
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent transition-all"
                />

                <InPuts
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent transition-all"
                />

                <Button
                  label="Sign Now"
                  type="submit"
                  className="w-full bg-primary-50 hover:bg-opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                />
              </form>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between items-center">
                <p className="text-sm text-primary-100 mt-6 sm:mt-8 text-center lg:text-left">
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary-50 hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
                <p className="text-sm text-primary-100 mt-6 sm:mt-8 text-center lg:text-left">
                  Forgot Password?{" "}
                  <Link
                    to="/forgot-password"
                    className="text-primary-50 hover:underline"
                  >
                    Reset Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
