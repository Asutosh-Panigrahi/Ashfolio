interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  // Check if EmailJS is available
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY || "your_emailjs_public_key";
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID || "your_emailjs_service_id";
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID || "your_emailjs_template_id";

  // For demo purposes, we'll simulate the email sending
  // In production, you would use EmailJS or a backend service
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the email data for development
    console.log("Email would be sent with data:", {
      ...data,
      emailJsPublicKey,
      emailJsServiceId,
      emailJsTemplateId
    });
    
    // In a real implementation, you would use:
    // await emailjs.send(emailJsServiceId, emailJsTemplateId, data, emailJsPublicKey);
    
    // For now, we'll just resolve successfully
    return Promise.resolve();
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
}
