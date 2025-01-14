import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message,
      });

      res
        .status(200)
        .json({ success: true, message: "E-posta Başarıyla gönderildi." });
    } catch (err) {
      console.error("E-posta gönderim hatası: ", err);
      res
        .status(500)
        .json({ success: false, message: "E-posta gönderilirken hata oluştu" });
    }
  }
};

export default sendEmail;
