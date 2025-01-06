import axios from "axios";
// const BASE_URL = "https://reset-password-demo-server.onrender.com/api/auth";
const BASE_URL = "http://localhost:5000";
export const forgotPassword = async (email) => {
  try {
    await axios.post(`${BASE_URL}/forgot-password`, { email });
    alert("Password reset email sent!");
  } catch (error) {
    console.error(error);
    alert("Error sending email");
  }
};

export const resetPassword = async (token, password) => {
  try {
    await axios.post(`${BASE_URL}/reset-password/${token}`, { password });
    alert("Password reset successful!");
  } catch (error) {
    console.error(error);
    alert("Error resetting password");
  }
};

export const login = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/login`, formData);
    alert("Login successful!");
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.error(error);
    alert("Error during login");
  }
};

export const signup = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/signup`, formData);
    alert("Signup successful!");
    console.log(data);
  } catch (error) {
    console.error(error);
    alert("Error during signup");
  }
};
