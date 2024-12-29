const Yup = require('yup')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: String,
});



const userValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name must be at least 3 characters long').optional(),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    address: Yup.string().optional(),
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    userValidationSchema
};