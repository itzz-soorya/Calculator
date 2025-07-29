// Simple EmailJS Setup for DemoDemoDemo
// Replace the values below with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // STEP 1: ✅ Your EmailJS Public Key (DONE!)
    publicKey: "gpu0O12WfD8Tl9C9i",
    
    // STEP 2: ✅ Your Gmail Service ID (DONE!)
    serviceId: "service_f0x9eu9",
    
    // STEP 3: ✅ Your Template ID (DONE!)
    templateId: "template_fd3vr7b",
    
    // ✅ Your target email (already correctly set)
    targetEmail: "dragonofhorse666@gmail.com"
};

// Auto-initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY_HERE") {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('📧 EmailJS initialized for DemoDemoDemo');
    }
});

// Quick setup function (call this after updating config above)
function testEmailSetup() {
    if (typeof emailjs === 'undefined') {
        console.log('❌ EmailJS not loaded');
        return;
    }
    
    if (EMAILJS_CONFIG.publicKey === "YOUR_EMAILJS_PUBLIC_KEY_HERE") {
        console.log('⚠️ Please update EMAILJS_CONFIG with your actual credentials');
        return;
    }
    
    console.log('✅ EmailJS configuration looks good!');
    console.log('Target email:', EMAILJS_CONFIG.targetEmail);
}
