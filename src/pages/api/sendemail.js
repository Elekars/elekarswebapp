import nodemailer from "nodemailer";

export default async function sendEnquiryEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const transporter = nodemailer.createTransport({
    service: "hostinger",
    port: 465,
    host: "smtp.hostinger.com",
    secure: true,
    auth: {
      user: "info@elekarscab.com",
      pass: "Elekars@6608",
    },
  });

  const mailData = {
    from: "info@elekarscab.com",
    to: "info@elekarscab.com",
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
      return res.status(404).json({ status: false, message: "Issue in sending mail", err: err });
    } else {
      return res.status(200).json({
        status: true,
        message: "Enquiry Send Successfully",
        info: info,
      });
    }
  });
}
