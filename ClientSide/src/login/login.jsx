import React, { useState } from "react";
import {
    Box,
    Modal,
    Typography,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Signup from "../signup/Signup";

const Login = ({ open, handleClose }) => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const handleSignupOpen = () => setIsSignupOpen(true);
    const handleSignupClose = () => setIsSignupOpen(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleLogin = (e) => {
        e.preventDefault();
        email,
            password

        console.log("email", email);
        console.log("password", password);




    }





    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="login-modal-title"
                aria-describedby="login-modal-description"
            >
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    sx={{
                        width: 400,
                        background: "black",
                        color: "white",
                        borderRadius: 3,
                        boxShadow: 24,
                        p: 4,
                        mx: "auto",
                        mt: "15vh",
                        textAlign: "center",
                        position: "relative",
                        fontFamily: "'Poppins', sans-serif",
                        overflow: "hidden",
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Welcome Animation */}
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
                        Welcome Back!
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
                        Login to continue planning amazing events!
                    </Typography>

                    {/* Email Input */}
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
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

                    {/* Password Input */}
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            mb: 3,
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

                    {/* Login Button */}
                    <Button
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        fullWidth
                        variant="contained"
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
                        onClick={handleLogin}
                    >
                        Login
                    </Button>

                    {/* Signup Link */}
                    <Typography
                        variant="body2"
                        sx={{
                            mt: 3,
                            color: "rgba(255, 255, 255, 0.8)",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Don't have an account?{" "}
                        <a
                            href="#"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                            onClick={handleSignupOpen}
                        >
                            Sign Up
                        </a>
                    </Typography>
                </Box>
            </Modal>

            <Signup open={isSignupOpen} handleClose={handleSignupClose} />

        </>
    );
};

export default Login;
