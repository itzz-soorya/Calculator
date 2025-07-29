// EmailJS Configuration for DemoDemoDemo
// This file contains the EmailJS setup for sending results

// Initialize EmailJS when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // EmailJS Public Key - Replace with your actual public key from EmailJS dashboard
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
});

// Email template configuration
const EMAIL_CONFIG = {
    serviceId: 'gmail', // Use 'gmail' as service ID
    templateId: 'flames_results', // Create this template in EmailJS
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY' // Your EmailJS public key
};

// Function to setup EmailJS service
function setupEmailService() {
    // This will be called automatically
    // You need to:
    // 1. Sign up at https://emailjs.com
    // 2. Create a Gmail service
    // 3. Create an email template
    // 4. Get your public key
    // 5. Replace the placeholders above
}
