const route = require("express").Router();
const SibApiV3Sdk = require("sib-api-v3-sdk");
const dotenv = require("dotenv");

dotenv.config({ path: "./../.env" });

// Configure API key authorization
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Create an instance of the TransactionalEmailsApi
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// POST /api/send-email
route.post("/", async (req, res) => {
  try {
    // Validate request body
    if (!req.body || !req.body.formData) {
      return res.status(400).json({
        success: false,
        error: "Invalid request body. Expected formData object.",
      });
    }

    const { formData } = req.body;

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "message",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = "New Contact Form Submission";
    sendSmtpEmail.htmlContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `;
    sendSmtpEmail.sender = {
      name: "AppNXT Contact Form",
      email: process.env.BREVO_FROM_EMAIL || "info@appnxt.in",
    };
    sendSmtpEmail.to = [
      {
        email: process.env.BREVO_TO_EMAIL || "info@appnxt.in",
      },
    ];

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to send email",
    });
  }
});

module.exports = route;
