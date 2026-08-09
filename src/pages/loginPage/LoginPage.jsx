import React, { useState } from "react";
import { 
  TextField, 
  Button, 
  IconButton, 
  InputAdornment, 
  Paper, 
  Typography, 
  Box,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    if (error) setError("");
  };

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Connects to your Spring Boot auth endpoint
      const response = await axios.post("https://events-planner-restapi.onrender.com/api/auth/login", {
        email: formData.email,
        password: formData.password
      });

      console.log("Login Success:", response.data);

      // Save token if returning JWT from backend
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      setLoading(false);
      navigate("/events"); // Redirect to events page after login
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Invalid email or password");
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
          <Typography variant="h4" component="h1" className="font-bold text-white mb-2" sx={{ fontWeight: 700 }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" className="text-slate-400">
            Sign in to manage your events and budget
          </Typography>
        </Box>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <div className="flex items-center justify-between">
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  sx={{ color: "#94a3b8", "&.Mui-checked": { color: "#6366f1" } }}
                />
              }
              label={<span className="text-sm text-slate-300">Remember me</span>}
            />
            <Link to="#" className="text-sm text-indigo-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            className="mt-2 py-3 font-semibold"
            sx={{ backgroundColor: "#6366f1", "&:hover": { backgroundColor: "#4f46e5" } }}
          >
            {loading ? "Signing In..." : "Log In"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </Paper>
    </div>
  );
};

export default LoginPage;