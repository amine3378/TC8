import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coupon_list_train';
const COLLECTION_NAME = 'coupons_list_train';


export const coupons_list_trainSchema = new mongoose.Schema({
    large_area_name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    ken_name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    small_area_name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    GENRE_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    CAPSULE_TEXT: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PRICE_RATE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    CATALOG_PRICE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    DISCOUNT_PRICE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    DISPFROM: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    DISPEND: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    DISPPERIOD: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    VALIDFROM: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    VALIDEND: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    VALIDPERIOD: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    USABLE_DATE_MON: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_TUE: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_WED: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_THU: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_FRI: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_SAT: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_SUN: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_HOLIDAY: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    USABLE_DATE_BEFORE_HOLIDAY: {
        type: mongoose.Schema.Types.Char,
        required: true,
    },
    COUPON_ID_hash: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    en_capsule: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    en_genre: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    en_small_area: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    en_ken: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    en_large_area: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
});

export const Coupon_list_trainModel = mongoose.model(DOCUMENT_NAME, coupons_list_trainSchema, COLLECTION_NAME);