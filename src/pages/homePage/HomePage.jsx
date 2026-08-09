import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box, Card, CardContent } from "@mui/material";
import { EventAvailable, AccountBalanceWallet, Celebration, ArrowForward } from "@mui/icons-material";

const HomePage = () => {
  const features = [
    {
      icon: <EventAvailable fontSize="large" className="text-indigo-400 mb-2" />,
      title: "Explore Events",
      description: "Discover concerts, workshops, sports, and private gatherings curated just for you."
    },
    {
      icon: <AccountBalanceWallet fontSize="large" className="text-indigo-400 mb-2" />,
      title: "Budget Planning",
      description: "Plan and customize memorable events without exceeding your financial limits."
    },
    {
      icon: <Celebration fontSize="large" className="text-indigo-400 mb-2" />,
      title: "Memorable Moments",
      description: "Seamlessly organize every detail so you can focus on making special memories."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <Container maxWidth="lg" className="pt-10 pb-16 text-center">
        <Box className="max-w-3xl mx-auto space-y-6">
          <Typography 
            variant="h2" 
            component="h1" 
            className="font-extrabold tracking-tight text-white text-4xl sm:text-6xl"
            sx={{ fontWeight: 800 }}
          >
            Welcome to <span className="text-indigo-400">Events Planner</span>
          </Typography>

          <Typography 
            variant="h6" 
            className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Register yourself to explore all events and plan your events within your budget to make your day special and memorable.
          </Typography>

          <Box className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/register"
              endIcon={<ArrowForward />}
              className="px-8 py-3 text-lg font-semibold"
              sx={{ 
                backgroundColor: '#6366f1', 
                '&:hover': { backgroundColor: '#4f46e5' },
                borderRadius: '8px'
              }}
            >
              Register Now
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/login"
              className="px-8 py-3 text-lg font-semibold"
              sx={{ 
                borderColor: '#475569', 
                color: '#f8fafc',
                '&:hover': { borderColor: '#818cf8', backgroundColor: 'rgba(99, 102, 241, 0.08)' },
                borderRadius: '8px'
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Feature Section */}
      <Container maxWidth="lg" className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-slate-800 transition-all hover:border-indigo-500/50 hover:shadow-xl hover:-translate-y-1"
              sx={{ backgroundColor: '#1e293b', color: '#ffffff', borderRadius: '12px' }}
            >
              <CardContent className="p-6 text-center flex flex-col items-center">
                {feature.icon}
                <Typography variant="h5" component="h3" className="font-bold text-white mb-2" sx={{ fontWeight: 700 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-slate-400 leading-relaxed">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      {/* Call to Action Banner */}
      <Container maxWidth="md" className="py-12">
        <Box 
          className="p-8 sm:p-12 text-center rounded-2xl border border-indigo-500/30"
          sx={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1e293b 100%)' }}
        >
          <Typography variant="h4" className="font-bold text-white mb-4" sx={{ fontWeight: 700 }}>
            Ready to organize your next event?
          </Typography>
          <Typography variant="body1" className="text-slate-300 mb-6 max-w-xl mx-auto">
            Join hundreds of planners managing events within their custom budget.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/register"
            sx={{ 
              backgroundColor: '#6366f1', 
              '&:hover': { backgroundColor: '#4f46e5' },
              borderRadius: '8px',
              paddingX: '2rem'
            }}
          >
            Create Your Account
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;