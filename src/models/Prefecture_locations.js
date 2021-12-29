//Prefecture_locations.js
import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Prefecture_locations';
const COLLECTION_NAME = 'prefectures_locations';


export const prefectures_locationsSchema = new mongoose.Schema({
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PREFECTUAL_OFFICE: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    LATITUDE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    LONGITUDE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    EN_PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    EN_PREFECTUAL_OFFICE: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
});

export const Prefecture_locationsModel = mongoose.model(DOCUMENT_NAME, prefectures_locationsSchema, COLLECTION_NAME);