//hada tani fih des champs ID
import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coupon_area_train';
const COLLECTION_NAME = 'coupons_area_train';


export const coupons_area_trainSchema = new mongoose.Schema({
    SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    EN_SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    EN_PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    COUPON_ID_hash: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
});

export const Coupon_area_trainModel = mongoose.model(DOCUMENT_NAME, coupons_area_trainSchema, COLLECTION_NAME);