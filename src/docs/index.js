import upload from "./upload/index.js";
import tags from "./tags.js";

const docs = {
    ...tags,
    ...upload
}

export default docs;