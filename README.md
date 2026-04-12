# 🍕 Pizza Orders - Next.js App

A modern and stylish pizza order tracking web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

This app allows users to browse pizza orders with real-time search, view detailed order statuses, and authenticate securely using **Google OAuth 2.0**. Designed with a clean UI and mobile responsiveness in mind.

---

## 🚀 Features

- ✅ Display a list of pizza orders with customer and order information  
- 🔍 Real-time search by pizza or customer name  
- 🟢 Color-coded status badges: Pending, Preparing, Out for Delivery, Delivered, Cancelled  
- 🍕 Dynamic pizza background images for each order card  
- 🔐 Google OAuth 2.0 authentication  
- 💾 Session persistence across page reloads  
- 📱 Responsive design using Tailwind CSS  
- ⚙️ Environment variable management for secure OAuth credentials  
- 🧼 Clean, modular React + TypeScript code following Next.js best practices  

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) – React framework for production  
- [TypeScript](https://www.typescriptlang.org/) – Static type checking  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- [NextAuth.js](https://next-auth.js.org/) – Authentication solution for Next.js  
- [Google OAuth 2.0](https://developers.google.com/identity) – Secure login  

---

## 🛠️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)  
- npm (comes with Node.js)

---

### 📥 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/pizza-orders-nextjs.git
cd pizza-orders-nextjs

# 2. Install dependencies
npm install

# 3. Create a .env.local file in the root directory and add your Google OAuth credentials

# .env.local
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000

# 4. Run the development server
npm run dev



Then open your browser and visit:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔑 Usage

- 🔐 **Login** using your Google account  
- 🍕 **Browse** the list of pizza orders  
- 🔍 **Search** orders by pizza or customer name in real-time  
- 🏷️ **View order status** with color-coded badges  
- 🔄 **Session persists** across page reloads for a smooth experience



---

## ✨ Code Highlights

- 🧩 Functional components with **TypeScript** typings  
- ⚛️ State management via `useState` and `useEffect`  
- 🎨 **Tailwind CSS** for utility-first responsive design  
- ♿ Semantic HTML with accessibility best practices  
- 🗂️ Static data stored in `/data/data.json`  
- 🔐 Environment variables for storing sensitive data securely  
- 🖼️ Next.js `public` folder used for static assets (e.g., pizza images)



---

## 🔗 Live Demo

👉 https://fe-assesment-ap7cpmzmx-vaibhav-sharmas-projects-871cf6d0.vercel.app/

---



