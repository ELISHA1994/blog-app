import Tag from  "../models/tag-model.js";

export const create_Tag = async ({ name, slug }) => {
    let newTag = new Tag({ name, slug });
    return await newTag.save();
}

export const get_Tags = async () => {
    return Tag.find({});
}

export const get_Tag = async (data) => {
    return Tag.find({ slug: data });
}

export const remove_Tag = async (data) => {
    return Tag.findOneAndRemove({ slug: data });
}
