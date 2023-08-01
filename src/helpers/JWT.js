import jwt  from "jsonwebtoken";

export const generateToken = ( data, expiresIn ) => {
    return jwt.sign( { id: data }, process.env.TOKEN_SECRET || "tokentest",
        {
            expiresIn
        } 
    );
}

export const verifyToken = ( token ) => {
    try {
        const payload = jwt.verify( token, process.env.TOKEN_SECRET || "tokentest" );
        return {
            success: true,
            message: payload.id
        }
    } catch (error) {
        return {
            success: false,
            message: "Token invalido: " + error
        }
    }
}