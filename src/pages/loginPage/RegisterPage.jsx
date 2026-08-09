import React, { useState } from "react";
import { 
  TextField, 
  Button, 
  IconButton, 
  InputAdornment, 
  Paper, 
  Typography, 
  Box 
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Define backend base URL (Replace with your actual Render URL)
const API_BASE_URL = "https://your-backend.onrender.com/api/auth";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      // Connect to Spring Boot backend register endpoint
      await axios.post(`${API_BASE_URL}/register`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });

      setLoading(false);
      navigate("/login"); // Redirect to login page on success
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <Paper 
        elevation={6} 
        className="w-full max-w-md p-8 rounded-xl bg-slate-800 text-white border border-slate-700"
        sx={{ backgroundColor: "#1e293b", color: "#ffffff" }}
      >
        <Box className="text-center mb-6">
          <Typography variant="h4" component="h1" className="font-bold text-white mb-2">
            Create Account
          </Typography>
          <Typography variant="body2" className="text-slate-400">
            Join Events Planner to discover and organize events
          </Typography>
        </Box>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <TextField
              label="First Name"
              name="firstName"
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
              slotProps={{ inputLabel: { style: { color: "#94a3b8" } } }}
              sx={{ input: { color: "white" }, fieldset: { borderColor: "#475569" } }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
              slotProps={{ inputLabel: { style: { color: "#94a3b8" } } }}
              sx={{ input: { color: "white" }, fieldset: { borderColor: "#475569" } }}
            />
          </div>

          <TextField
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            slotProps={{ inputLabel: { style: { color: "#94a3b8" } } }}
            sx={{ input: { color: "white" }, fieldset: { borderColor: "#475569" } }}
          />

          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            slotProps={{ inputLabel: { style: { color: "#94a3b8" } } }}
            sx={{ input: { color: "white" }, fieldset: { borderColor: "#475569" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{ color: "#94a3b8" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            fullWidth
            slotProps={{ inputLabel: { style: { color: "#94a3b8" } } }}
            sx={{ input: { color: "white" }, fieldset: { borderColor: "#475569" } }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            className="mt-2 py-3 font-semibold"
            sx={{ backgroundColor: "#6366f1", "&:hover": { backgroundColor: "#4f46e5" } }}
          >
            {loading ? "Creating Account..." : "Register"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline font-medium">
            Log in here
          </Link>
        </p>
      </Paper>
    </div>
  );
};

export default RegisterPage;