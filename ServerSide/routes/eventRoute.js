var express = require('express');
var eventRouter = express.Router();


const { fetchEvent, fetchEventbyId, createEvent, updateEvent, deleteEvent}  = require('../controllers/eventController');
const authVerify = require('../middlewares/auth');

eventRouter.get('/', fetchEvent);
eventRouter.get('/:id', authVerify,fetchEventbyId)
eventRouter.post('/create', authVerify,createEvent)
eventRouter.put('/update/:id', authVerify,updateEvent)
eventRouter.delete('/delete/:id',authVerify,deleteEvent)
module.exports = eventRouter;