import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from "@mui/material";

// Direct path imports to fix Vite resolution errors & improve bundle size
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Event from "@mui/icons-material/Event";
import Analytics from "@mui/icons-material/Analytics";
import HelpOutline from "@mui/icons-material/HelpOutlineOutlined";
import Business from "@mui/icons-material/Business";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navLinks = [
    { label: "Explore Events", path: "/ExploreEvents", icon: <Event fontSize="small" /> },
    { label: "Track Event Status", path: "/TrackStatus", icon: <Analytics fontSize="small" /> },
    { label: "Support", path: "/Support", icon: <HelpOutline fontSize="small" /> },
    { label: "Company Overview", path: "/CompanyOverview", icon: <Business fontSize="small" /> },
    { label: "Settings", path: "/Settings", icon: <Business fontSize="small" /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="w-full bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 px-4 sm:px-8 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/Home" className="flex items-center gap-2 no-underline">
          <Typography variant="h6" className="font-bold text-white flex items-center gap-1" sx={{ fontWeight: 700 }}>
            <span className="text-indigo-400">Events</span> Planner
          </Typography>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 no-underline ${
                  isActive ? "text-indigo-400 font-semibold" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Logout Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            onClick={handleLogout}
            variant="outlined"
            size="small"
            startIcon={<Logout />}
            className="border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg px-4 py-1.5"
            sx={{ 
              borderColor: "rgba(239, 68, 68, 0.5)", 
              color: "#f87171",
              textTransform: "none",
              fontWeight: 600 
            }}
          >
            Logout
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#ffffff" }}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { backgroundColor: "#1e293b", color: "#ffffff", width: 280 }
        }}
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-700">
          <Typography variant="h6" className="font-bold text-white" sx={{ fontWeight: 700 }}>
            <span className="text-indigo-400">Events</span> Planner
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#94a3b8" }}>
            <CloseIcon />
          </IconButton>
        </div>

        <List className="px-2 py-4">
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component={Link}
                to={link.path}
                onClick={handleDrawerToggle}
                className="rounded-lg mb-1"
                sx={{
                  color: location.pathname === link.path ? "#818cf8" : "#cbd5e1",
                  "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.1)" }
                }}
              >
                <span className="mr-3 text-indigo-400">{link.icon}</span>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}

          <div className="mt-6 px-3">
            <Button
              onClick={() => {
                handleDrawerToggle();
                handleLogout();
              }}
              fullWidth
              variant="outlined"
              color="error"
              startIcon={<Logout />}
              sx={{
                borderColor: "rgba(239, 68, 68, 0.5)",
                color: "#f87171",
                textTransform: "none",
                fontWeight: 600,
                py: 1
              }}
            >
              Logout
            </Button>
          </div>
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;