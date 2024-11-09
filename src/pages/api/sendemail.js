import nodemailer from "nodemailer";

export default async function sendEnquiryEmail(req, res) {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    port: process.env.EMAIL_PORT,
    host: process.env.EMAIL_HOST,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Booking Enquiry`,
    text: "",
    html: `
      <div>
        <p><strong>Trip Type:</strong> ${req.body.tripType}</p>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Mobile No.:</strong> ${req.body.mobile}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Date & Time of Journey:</strong> ${req.body.dateTime}</p>
        <p><strong>Pickup Location:</strong> ${req.body.pickup}</p>
        <p><strong>Dropoff Location:</strong> ${req.body.dropoff}</p>
      </div>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      return res
        .status(404)
        .json({ status: false, message: "Issue in sending mail", err: err });
    } else {
      return res.status(200).json({
        status: true,
        message: "Enquiry Send Successfully",
        // info: info,
      });
    }
  });
}
