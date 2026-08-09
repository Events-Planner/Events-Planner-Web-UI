import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import { 
  RocketLaunch, 
  Security, 
  Analytics, 
  ConfirmationNumber, 
  ArrowForward, 
  LockOpen 
} from "@mui/icons-material";

const LandingPage = () => {
  const stats = [
    { label: "Active Events", value: "10,000+" },
    { label: "Budget Saved", value: "$2.5M+" },
    { label: "Happy Planners", value: "50,000+" }
  ];

  const highlights = [
    {
      icon: <RocketLaunch fontSize="large" className="text-indigo-400" />,
      title: "Instant Event Creation",
      description: "Set up customized event timelines, guest lists, and budget caps in under two minutes."
    },
    {
      icon: <Analytics fontSize="large" className="text-purple-400" />,
      title: "Real-time Expense Tracking",
      description: "Monitor costs live with intuitive visual breakdowns to avoid overspending."
    },
    {
      icon: <ConfirmationNumber fontSize="large" className="text-pink-400" />,
      title: "Seamless Ticketing",
      description: "Manage registrations, access control, and attendee details effortlessly."
    },
    {
      icon: <Security fontSize="large" className="text-emerald-400" />,
      title: "Encrypted & Secure",
      description: "Your financial data and user details are protected with bank-grade security."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Decorative Gradient Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero Section */}
      <Container maxWidth="lg" className="pt-20 pb-16 relative z-10 flex flex-col items-center text-center">
        <Box className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
          <span>✨ Streamline Your Event Planning</span>
        </Box>

        <Typography 
          variant="h1" 
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight text-center"
          sx={{ fontWeight: 800, textAlign: 'center' }}
        >
          Plan Flawless Events. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Stay Right on Budget.
          </span>
        </Typography>

        {/* Subtitle with explicit margin bottom for 1-line spacing */}
        <Typography 
          variant="body1" 
          className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed text-center"
          sx={{ textAlign: 'center', width: '100%', marginBottom: '2rem' }}
        >
          From personal celebrations to massive tech conferences, organize every detail, manage guest lists, and control costs—all from one unified hub.
        </Typography>

        {/* High-Contrast Clear Buttons */}
        <Box className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
          <Button
            component={Link}
            to="/Register"
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            className="w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
            sx={{ 
              backgroundColor: "#6366f1", 
              color: "#ffffff",
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { backgroundColor: "#4f46e5" } 
            }}
          >
            Create Free Account
          </Button>

          <Button
            component={Link}
            to="/Login"
            variant="outlined"
            size="large"
            startIcon={<LockOpen />}
            className="w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg font-bold rounded-xl transition-all hover:scale-105"
            sx={{ 
              borderColor: "#6366f1", 
              color: "#a5b4fc",
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { 
                borderColor: "#818cf8", 
                backgroundColor: "rgba(99, 102, 241, 0.15)",
                color: "#ffffff"
              } 
            }}
          >
            Sign In
          </Button>
        </Box>

        {/* Social Proof / Stats Strip */}
        <Box className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</span>
              <span className="text-sm text-slate-400 mt-1 font-medium">{stat.label}</span>
            </div>
          ))}
        </Box>
      </Container>

      {/* Feature Section Grid */}
      <Container maxWidth="lg" className="py-20 relative z-10">
        <Box className="text-center mb-14 flex flex-col items-center">
          <Typography 
            variant="h3" 
            className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center" 
            sx={{ fontWeight: 700, textAlign: 'center' }}
          >
            Everything You Need To Host Great Events
          </Typography>
          <Typography 
            variant="body1" 
            className="text-slate-400 max-w-xl mx-auto text-center"
            sx={{ textAlign: 'center', width: '100%' }}
          >
            Forget messy spreadsheets and chaotic group chats. Built for modern creators and event planners.
          </Typography>
        </Box>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex gap-5 items-start text-left"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 shrink-0">
                {item.icon}
              </div>
              <div>
                <Typography variant="h6" className="text-white font-bold mb-2">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="text-slate-400 leading-relaxed">
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modern Banner CTA */}
      <Container maxWidth="lg" className="pb-20">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-slate-900 border border-indigo-500/30 p-10 sm:p-16 text-center overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <Typography variant="h3" className="text-3xl sm:text-5xl font-extrabold text-white mb-4 text-center" sx={{ fontWeight: 800, textAlign: 'center' }}>
              Start Planning Your Next Event Today
            </Typography>
            <Typography variant="body1" className="text-slate-300 text-lg mb-8 text-center" sx={{ textAlign: 'center' }}>
              Join thousands of organizers making event management completely stress-free.
            </Typography>
            <Button
              component={Link}
              to="/Register"
              variant="contained"
              size="large"
              className="px-10 py-3.5 font-bold text-lg rounded-xl"
              sx={{ backgroundColor: "#6366f1", "&:hover": { backgroundColor: "#4f46e5" }, textTransform: "none" }}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;