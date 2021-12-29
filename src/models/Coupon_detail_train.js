//had le fichier yhtaj d'autres fichiers, rana dayrin fih d'autres id, sma kayen ordre de création
import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coupon_detail_train';
const COLLECTION_NAME = 'coupons_detail_train';


export const coupons_detail_trainSchema = new mongoose.Schema({
    SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    ITEM_COUNT: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    I_DATE: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    PURCHASEID_hash: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    USER_ID_hash: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    COUPON_ID_hash: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    en_SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
});

export const Coupon_detail_trainModel = mongoose.model(DOCUMENT_NAME, coupons_detail_trainSchema, COLLECTION_NAME);