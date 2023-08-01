import nodemailer from "nodemailer";
import { generateToken } from "./JWT.js";

function sendEmail(email, title, body, generateToke = false) {
    let error;
    let res;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASS}`
        }
    });

    //generar url con token
    if (generateToke === true) {
        const token = generateToken(email, "1h");
        const urlConfirm = `${process.env.CLIENT_URL}/auth/confirm/${token}`;
        body += `<a href="${urlConfirm}" target="_black">Confirmar</a> </p>`;
    }

    const mailOptions = {
        from: `${process.env.EMAIL_ADDRESS}`,
        to: `${email}`,
        subject: title,
        html: body
    };

    transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
            error = err;
        } else {
            res = response;
        };
    });
    
    if (error) {
        return Promise.reject({
            success: false,
            message: error
        });
    }

    return Promise.resolve({
        success: true,
        message: res
    });

}
export default sendEmail;