import postImg from "./upload-img.js";

const upload = {
    paths: {
        '/api/file/upload-img': {
            ...postImg
        }
    }
}

export default upload;