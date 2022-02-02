import User from "../models/user-model.js";

export const getUser = async (userId) => {
    return User.findById({_id: userId});
}
