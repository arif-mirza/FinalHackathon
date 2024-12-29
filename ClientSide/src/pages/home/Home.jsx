import React, { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import { Box, Button, Typography, Grid, Card, CardContent } from "@mui/material";
import EventCard from "../../components/eventcards/EventCard";
import Login from "../../login/login";
function Home() {

  const events = [
    {
      title: "Wedding Ceremony",
      description: "Celebrate love and happiness in a grand way.",
      date: "2024-02-14",
      location: "Grand Palace, LA",
      category: "Wedding",
    },
    {
      title: "Corporate Meeting",
      description: "Professional networking and business growth.",
      date: "2024-03-10",
      location: "Tech Hub, NY",
      category: "Corporate",
    },
    {
      title: "Birthday Bash",
      description: "Let's make birthdays extra special!",
      date: "2024-04-05",
      location: "Sunshine Hall, SF",
      category: "Birthday",
    },
  ];

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleLoginClose = () => setIsLoginOpen(false);




  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(90deg, #000428 0%, #004e92 100%)",
          color: "white",
          textAlign: "center",
          padding: "2rem",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Welcome Section */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Welcome to Event Manager
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontWeight: "light",
            fontSize: "1.2rem",
            color: "lightgray",
          }}
        >
          "Plan your events with ease and perfection."
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#004e92",
            color: "white",
            px: 4,
            py: 1,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "medium",
            "&:hover": {
              bgcolor: "#002f6c",
            },
          }}
          onClick={handleLoginOpen}
        >
          Get Started
        </Button>

        {/* Event Cards Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Upcoming Events
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {events.map((event, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <EventCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  location={event.location}
                  category={event.category}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Login Modal */}
      <Login open={isLoginOpen} handleClose={handleLoginClose} />



    </>
  )

}

export default Home;
