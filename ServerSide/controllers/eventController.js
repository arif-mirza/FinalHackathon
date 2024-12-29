const { Event , userValidationSchema } = require("../models/eventModel")



const createEvent = async (req, res) => {
    try {
       
        // Destructure the data from req.body
        const { id, title, description, location, date, category } = req.body;

        // Ensure required fields are present
        if (!title || !description || !date || !category) {
            return res.status(400).json({
                status: "Error creating event",
                error: "Missing required fields: title, description, date, or category"
            });
        }

        // Convert date to a proper Date object
        const parsedDate = new Date(date);  // This will convert the string to a Date object

        // If the date conversion fails, the parsedDate will be Invalid Date
        if (isNaN(parsedDate)) {
            return res.status(400).json({
                status: "Error creating event",
                error: "Invalid date format. Please use 'YYYY-MM-DD' format."
            });
        }

        // Create a new event object
        let newEvent = new Event({
            id,
            title,
            description,
            location,
            date: parsedDate,  // Use the parsed Date object
            category
        });

        // Save the event to the database
        let output = await newEvent.save();

        // Respond with success message
        res.json({
            data: output,
            status: "A new event was created."
        });

    } catch (error) {
        // Log the error and return a detailed error message
        console.error('Error creating event:', error);

        res.status(500).json({
            error: error.message || error,
            status: "Error creating event",
            data: []
        });
    }
};

// fetch events


const fetchEvent = async (req, res) => {
    try {

        let todos = await Event.find();

        res.json({
            data: todos,
            status: "success"
        })

    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })

    }
}


const fetchEventbyId = async (req, res) => {
    try {
        let id = req.params.id;
        let event = await Event.findOne({ id: id })
        res.json({
            data: event,
            status: "Event is searching by ID"
        })

    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })

    }

}


const deleteEvent = async (req, res) => {
    try {
        let id = req.params?.id;
        let todo = await Event.findOneAndDelete({ id: id });
        res.json({
            data: todo,
            status: `Event ${Event.title} deleted`
        })

    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
}

const updateEvent = async (req, res) => {
    try {
        let id = req.params?.id;
        res.json({
            data:id,
            status: "success"
        })

    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })
    }
}

























module.exports = {
    createEvent,
    fetchEvent,
    fetchEventbyId,
    deleteEvent,
    updateEvent

};
