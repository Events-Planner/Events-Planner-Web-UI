import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Card, CardContent, Button } from "@mui/material";
import { EventAvailable, AccountBalanceWallet, Celebration, Logout } from "@mui/icons-material";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user token and session state
    localStorage.removeItem("token");
    // Redirect to Landing Page (root route)
    navigate("/");
  };

  const features = [
    {
      icon: <EventAvailable fontSize="large" className="text-indigo-400 mb-3" />,
      title: "Explore Events",
      description: "Discover concerts, workshops, sports, and private gatherings curated just for you."
    },
    {
      icon: <AccountBalanceWallet fontSize="large" className="text-indigo-400 mb-3" />,
      title: "Budget Planning",
      description: "Plan and customize memorable events without exceeding your financial limits."
    },
    {
      icon: <Celebration fontSize="large" className="text-indigo-400 mb-3" />,
      title: "Memorable Moments",
      description: "Seamlessly organize every detail so you can focus on making special memories."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Top Navbar with Logout Button */}
      <nav className="w-full bg-slate-800/80 backdrop-blur border-b border-slate-700/80 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Typography variant="h6" className="font-bold text-white flex items-center gap-2" sx={{ fontWeight: 700 }}>
          <span className="text-indigo-400">Events</span> Planner
        </Typography>

        <Button
          onClick={handleLogout}
          variant="outlined"
          color="error"
          startIcon={<Logout />}
          className="border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg"
          sx={{ borderColor: "rgba(239, 68, 68, 0.5)", color: "#f87171" }}
        >
          Logout
        </Button>
      </nav>

      {/* Main Page Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Hero Section */}
        <Container maxWidth="lg" className="pt-6 pb-16 text-center">
          <Box className="max-w-3xl mx-auto flex flex-col items-center">
            <Typography 
              variant="h2" 
              component="h1" 
              className="text-white text-4xl sm:text-6xl mb-6"
              sx={{ fontWeight: 800, tracking: '-0.025em' }}
            >
              Welcome to <span className="text-indigo-400">Events Planner</span>
            </Typography>

            <Typography 
              variant="body1" 
              className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed text-center max-w-2xl"
              sx={{ textAlign: 'center' }}
            >
              Explore all available events and plan your custom budget to make your special days memorable.
            </Typography>
          </Box>
        </Container>

        {/* Feature Section */}
        <Container maxWidth="lg" className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-slate-800 transition-all hover:border-indigo-500/50 hover:shadow-xl hover:-translate-y-1"
                sx={{ backgroundColor: '#1e293b', color: '#ffffff', borderRadius: '12px' }}
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  {feature.icon}
                  <Typography variant="h5" component="h3" className="text-white mb-2" sx={{ fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="text-slate-400 leading-relaxed text-center">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

        {/* Call to Action Banner */}
        <Container maxWidth="md" className="py-8">
          <Box 
            className="p-8 sm:p-12 text-center rounded-2xl border border-indigo-500/30 flex flex-col items-center justify-center"
            sx={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1e293b 100%)' }}
          >
            <Typography variant="h4" className="text-white mb-3" sx={{ fontWeight: 700 }}>
              Ready to organize your next event?
            </Typography>
            <Typography variant="body1" className="text-slate-300 text-center max-w-xl mx-auto" sx={{ textAlign: 'center' }}>
              Join hundreds of planners managing events within their custom budget.
            </Typography>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;