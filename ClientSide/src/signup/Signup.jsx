import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, description, location, date, category });
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{
        width: 500,
        background: "linear-gradient(135deg, #000000, #0044cc)",
        color: "white",
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
        mx: "auto",
        mt: "10vh",
        textAlign: "center",
        position: "relative",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Close Button */}
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
        onClick={() => console.log("Close form")} // Add logic to close the form
      >
        <CloseIcon />
      </IconButton>

      {/* Event Creation Header */}
      <Typography
        component={motion.h1}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(90deg, #fff, #fff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Create Event
      </Typography>

      {/* Subheading */}
      <Typography
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        sx={{
          mb: 3,
          fontSize: "1rem",
          color: "rgba(255, 255, 255, 0.8)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Plan your next amazing event with a touch of style!
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <TextField
          fullWidth
          label="Event Title"
          type="text"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            mb: 2,
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
        />

        {/* Description Input */}
        <TextField
          fullWidth
          label="Event Description"
          type="text"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            mb: 2,
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
        />

        {/* Location Input */}
        <TextField
          fullWidth
          label="Event Location"
          type="text"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{
            mb: 2,
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
        />

        {/* Date Input */}
        <TextField
          fullWidth
          label="Event Date"
          type="datetime-local"
          variant="outlined"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{
            mb: 2,
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
        />

        {/* Category Input */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Category
          </InputLabel>
          <Select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.6)",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.8)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff",
              },
            }}
          >
            <MenuItem value="Conference">Conference</MenuItem>
            <MenuItem value="Workshop">Workshop</MenuItem>
            <MenuItem value="Meetup">Meetup</MenuItem>
            <MenuItem value="Webinar">Webinar</MenuItem>
          </Select>
        </FormControl>

        {/* Create Event Button */}
        <Button
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "#0072ff",
            color: "white",
            fontWeight: "bold",
            py: 1.5,
            borderRadius: 2,
            "&:hover": {
              bgcolor: "#004e92",
            },
          }}
        >
          Create Event
        </Button>
      </form>
    </Box>
  );
};

export default AddEvent;
