import bcrypt from "bcrypt";

export async function hashPass( pass ){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash( pass, salt);
}

export async function comparePass( key, passhash ){
    return await bcrypt.compare( key, passhash );
}