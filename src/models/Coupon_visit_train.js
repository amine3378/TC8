//hada tani fih des champs ID
import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coupon_visit_train';
const COLLECTION_NAME = 'coupons_visit_train';


export const coupons_visit_trainSchema = new mongoose.Schema({
    PURCHASE_FLG: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    I_DATE: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    PAGE_SERIAL: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    REFERRER_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    VIEW_COUPON_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    USER_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    SESSION_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PURCHASEID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
});

export const Coupon_visit_trainModel = mongoose.model(DOCUMENT_NAME, coupons_visit_trainSchema, COLLECTION_NAME);