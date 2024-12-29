import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const EventCard = ({ title, description, date, location, category }) => {
  return (
    <Card
      sx={{
        background: "linear-gradient(90deg, #002f6c 0%, #004e92 100%)",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            color: "lightgray",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {description}
        </Typography>
        <Box sx={{ fontSize: "0.9rem", mb: 1 }}>
          <strong>Date:</strong> {date}
        </Box>
        <Box sx={{ fontSize: "0.9rem", mb: 1 }}>
          <strong>Location:</strong> {location}
        </Box>
        <Box
          sx={{
            fontSize: "0.9rem",
            bgcolor: "#00c6ff",
            color: "#000428",
            display: "inline-block",
            px: 2,
            py: 0.5,
            borderRadius: "8px",
          }}
        >
          {category}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
