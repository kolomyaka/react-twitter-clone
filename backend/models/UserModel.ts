import pkg from 'mongoose';
const { model, Schema, Document } = pkg;

export interface UserModelInterface {
    _id?: string
    email:string
    fullname:string
    username:string
    password:string
    confirmHash:string
    confirmed:boolean
    location?:string
    about?:string
    website?: string
}

export type UserModelDocumentInterface = Document & UserModelInterface

// Описываем схему
const UserSchema = new Schema<UserModelInterface>({
    email: {
        unique: true,
        required: true,
        type: String,
    },
    fullname: {
        required: true,
        type: String
    },
    username: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    confirmHash: {
        required: true,
        type: String,
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    location: String,
    about: String,
    website: String,
});

UserSchema.set('toJSON', {
    transform: function(_, obj) {
        delete obj.password
        delete obj.confirmHash
        return obj
    }
})

export const UserModel = model('User', UserSchema);