import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );
      alert("Password reset successful!");
    } catch (error) {
      console.error(error);
      alert("Error resetting password");
    }
  };

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/login">Login</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Reset Password
          </li>
        </ol>
      </nav>
      <form
        onSubmit={handleSubmit}
        className="mt-5 p-4 border rounded shadow-sm"
      >
        <h2 className="mb-4">Reset Password</h2>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter new password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
