import shortId from "shortid";
import jwt from "jsonwebtoken";
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

export const sign_in = async (data) => {

    // check if user exist
    const user = await User.findOne({ email: data.email });
    if (!user) {
        throw new Error('User with that email does not exist. Please signup.');
    }

    //authenticate
    if (!user.authenticate(data.password)) {
        throw new Error('Email and password do not match.');
    }

    // generate a token and send to client
    const token = await jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: '1d' }
    );

    const { _id, username, name, email, role } = user;

    return {
        token,
        user: { _id, username, name, email, role }
    };

}