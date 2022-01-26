import shortId from "shortid";
import User from "../models/user-model.js";

export const sign_up = async (data) => {
    const { name, email, password } = data;

    const user = await User.findOne({ email })
    if (user) {
        throw new Error('Email is taken')
    }

    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({ name, email, password, profile, username })

    return await newUser.save();
}