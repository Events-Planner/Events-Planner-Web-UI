import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Card, CardContent, Button } from "@mui/material";

// Path imports for MUI Icons to optimize Vite performance & avoid build issues
import EventAvailable from "@mui/icons-material/EventAvailable";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import Celebration from "@mui/icons-material/Celebration";
import ArrowForward from "@mui/icons-material/ArrowForward";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import HomeWork from "@mui/icons-material/HomeWork";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import Headphones from "@mui/icons-material/Headphones";
import TheaterComedy from "@mui/icons-material/TheaterComedy";
import Cake from "@mui/icons-material/Cake";
import Fastfood from "@mui/icons-material/Fastfood";
import Brush from "@mui/icons-material/Brush";
import Palette from "@mui/icons-material/Palette";
import CameraAlt from "@mui/icons-material/CameraAlt";
import SportsEsports from "@mui/icons-material/SportsEsports";

import Navbar from "../navbar/Navbar";

const HomePage = () => {
  const coreFeatures = [
    {
      icon: <EventAvailable fontSize="large" className="text-indigo-400 mb-3" />,
      title: "Explore Events",
      description: "Birthday parties, anniversaries, special day celebrations, and private gatherings curated just for you."
    },
    {
      icon: <AccountBalanceWallet fontSize="large" className="text-indigo-400 mb-3" />,
      title: "Event Planning",
      description: "Plan your events according to your custom requirements and budget without exceeding your financial limits."
    },
    {
      icon: <Celebration fontSize="large" className="text-indigo-400 mb-3" />,
      title: "Memorable Moments",
      description: "Seamlessly organize every detail so your special memories are captured effortlessly while you enjoy the day."
    }
  ];

  const availableServices = [
    {
      icon: <RocketLaunch className="text-indigo-400" />,
      title: "Instant Event Creation",
      description: "Set up customized decorations and budget caps in under two minutes."
    },
    {
      icon: <Celebration className="text-purple-400" />,
      title: "Birthday Party Decorations",
      description: "Theme-based setups, stage backdrops, and custom styling tailored for all ages."
    },
    {
      icon: <HomeWork className="text-pink-400" />,
      title: "House Party Setups",
      description: "Cozy interior decor, ambient lighting, and space optimization for home venues."
    },
    {
      icon: <SportsEsports className="text-lime-400" />,
      title: "Party Game Host & Organizer",
      description: "Lively hosts who organize interactive party games, trivia, crowd challenges, and prize distribution."
    },
    {
      icon: <AutoAwesome className="text-amber-400" />,
      title: "Balloon Decor & Arches",
      description: "Organic balloon garlands, theme arches, and colorful helium bouquets."
    },
    {
      icon: <Headphones className="text-indigo-400" />,
      title: "DJ & Sound Setup",
      description: "High-grade audio gear, party lighting, and custom playlists tailored to your crowd."
    },
    {
      icon: <TheaterComedy className="text-emerald-400" />,
      title: "Magicians",
      description: "Interactive close-up magic shows and stage illusions suited for guests of all ages."
    },
    {
      icon: <Cake className="text-rose-400" />,
      title: "Mascots & Character Costumes",
      description: "Popular cartoon mascot walkarounds for photo ops and kid interactions."
    },
    {
      icon: <Fastfood className="text-orange-400" />,
      title: "Catering & Live Food Stalls",
      description: "Curated party menus, live snack counters, cotton candy, and popcorn machines."
    },
    {
      icon: <Brush className="text-violet-400" />,
      title: "Tattoo Artists",
      description: "Temporary glitter tattoos, body art, and fun face painting stations."
    },
    {
      icon: <Palette className="text-teal-400" />,
      title: "Mehendi Artists",
      description: "Traditional and modern henna designs for bridal parties and festival gatherings."
    },
    {
      icon: <CameraAlt className="text-sky-400" />,
      title: "Photography & Videography",
      description: "Capture key highlights with candid photos, 360 photo booths, and cinematic reels."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow">
        
        {/* Hero Section */}
        <Container maxWidth="lg" className="pt-6 pb-12 text-center">
          <Box className="max-w-3xl mx-auto flex flex-col items-center">
            <Typography 
              variant="h2" 
              component="h1" 
              className="text-white text-4xl sm:text-6xl mb-6 font-extrabold tracking-tight"
              sx={{ fontWeight: 800 }}
            >
              Welcome to <span className="text-indigo-400">Events Planner</span>
            </Typography>

            {/* Extra spacing added after this paragraph */}
            <Typography 
              variant="body1" 
              className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed text-center max-w-2xl mb-16"
              sx={{ textAlign: 'center', marginBottom: '4rem !important' }}
            >
              Explore all available services, organize your customized budget, and transform every milestone into an unforgettable experience.
            </Typography>

            <Button
              component={Link}
              to="/Events"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              className="px-8 py-3 text-base font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
              sx={{ 
                backgroundColor: "#6366f1", 
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 700,
                "&:hover": { backgroundColor: "#4f46e5" } 
              }}
            >
              Browse All Events
            </Button>
          </Box>
        </Container>

        {/* Core Pillars Section */}
        <Container maxWidth="lg" className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
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

        {/* Services Overview Grid */}
        <Container maxWidth="lg" className="py-12">
          <Box className="text-center mb-10 flex flex-col items-center">
            <Typography variant="h4" className="text-2xl sm:text-4xl font-bold text-white mb-3" sx={{ fontWeight: 700 }}>
              Available Event Services
            </Typography>
            <Typography variant="body1" className="text-slate-400 max-w-xl text-center">
              Choose from our wide array of vetted planning services to build your dream event package.
            </Typography>
          </Box>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableServices.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700/50 shrink-0">
                  {service.icon}
                </div>
                <div>
                  <Typography variant="h6" className="text-white font-bold text-base mb-1">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </Typography>
                </div>
              </div>
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
            
            {/* Extra spacing added after this paragraph */}
            <Typography 
              variant="body1" 
              className="text-slate-300 text-center max-w-xl mx-auto mb-10"
              sx={{ textAlign: 'center', marginBottom: '0.5rem !important' }}
            >
              Join hundreds of planners managing events seamlessly within their target budget.
            </Typography>
            
            <Button
              component={Link}
              to="/Events"
              variant="contained"
              size="large"
              className="px-8 py-3 font-bold rounded-xl"
              sx={{ backgroundColor: "#6366f1", "&:hover": { backgroundColor: "#4f46e5" }, textTransform: "none" }}
            >
              Start Planning Now
            </Button>
          </Box>
        </Container>

      </div>
    </div>
  );
};

export default HomePage;