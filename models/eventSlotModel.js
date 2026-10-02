import mongoose from "mongoose";

const eventSlotSchema = new mongoose.Schema({

    eventName: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    startTime: {
        type: String,
        require: true,
    },
    endTime: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    capacity: {
        type: Number,
        require: true,
    },
    status: 'open' | 'closed' ,
    createdAt: {
    type: Date,
    require: true,
},
    updatedAt: {
    type: Date,
    require: true,
}
}
)

const Eventslot = mongoose.model('eventslot', eventSlotSchema);

export default Eventslot;