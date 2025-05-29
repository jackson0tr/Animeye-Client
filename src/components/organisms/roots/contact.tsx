// // app/contact/page.tsx
// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
// import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
// import Image from "next/image";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     phone: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", formData);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   };

//   const buttonVariants = {
//     hover: { scale: 1.03, backgroundColor: "#4F46E5" },
//     tap: { scale: 0.98 }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.h3 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4"
//           >
//             BREAK THE ICE AND SAY HELLO.
//           </motion.h3>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-lg md:text-xl text-indigo-600 max-w-2xl mx-auto"
//           >
//             Thank you for your interest. For any request please fill out the form below or email us at
//             <span className="font-semibold"> hello@animeye.co</span>
//           </motion.p>
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Left Column */}
//           <motion.div 
//             variants={itemVariants}
//             className="space-y-8"
//           >
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <Image
//                 src="/imgs/contact.svg"
//                 alt="Contact us"
//                 width={500}
//                 height={300}
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>

//             {/* Contact Info */}
//             <motion.div 
//               variants={itemVariants}
//               className="space-y-6 bg-white rounded-2xl shadow-lg p-8"
//             >
//               <div className="flex items-start space-x-4">
//                 <FaLocationDot className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   123 Anime Street, Tokyo, Japan<br />
//                   Postal Code: 100-0001
//                 </p>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <FaPhone className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-700">+81 3-1234-5678</p>
//                   <p className="text-gray-700">+81 90-1234-5678</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <FaEnvelope className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
//                 <p className="text-gray-700">hello@animeye.co</p>
//               </div>

//               <div className="border-t border-green-300 my-6 pt-6">
//                 <h4 className="text-lg font-semibold text-indigo-800 mb-4">Connect With Us</h4>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
//                     <FaWhatsapp className="text-2xl" />
//                   </a>
//                   <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
//                     <FaFacebook className="text-2xl" />
//                   </a>
//                   <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
//                     <FaInstagram className="text-2xl" />
//                   </a>
//                   <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
//                     <FaTwitter className="text-2xl" />
//                   </a>
//                   <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
//                     <FaTiktok className="text-2xl" />
//                   </a>
//                   <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
//                     <FaYoutube className="text-2xl" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Contact Form */}
//           <motion.div 
//             variants={itemVariants}
//             className="relative"
//           >
//             <div className="bg-green-100 rounded-2xl shadow-lg p-8 relative overflow-hidden">
//               {/* Chat bubble decoration */}
//               <div className="absolute top-6 right-6 w-16 h-16 bg-green-300 rounded-full opacity-20"></div>
//               <div className="absolute bottom-6 left-6 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
              
//               <div className="relative z-10">
//                 <h4 className="text-2xl font-bold text-indigo-800 mb-8 text-center">Send us a message</h4>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="fullname"
//                       name="fullname"
//                       value={formData.fullname}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                       placeholder="Enter your phone number"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                       placeholder="Enter your email address"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                       placeholder="Type your message here..."
//                     ></textarea>
//                   </div>
                  
//                   <div className="flex justify-end">
//                     <motion.button
//                       type="submit"
//                       variants={buttonVariants}
//                       whileHover="hover"
//                       whileTap="tap"
//                       className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md transition-colors"
//                     >
//                       Send Message
//                     </motion.button>
//                   </div>
//                 </form>
//               </div>
//             </div>
            
//             {/* Live Chat Floating Button */}
//             <div className="absolute -bottom-6 left-6 flex items-end">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.8, duration: 0.5 }}
//                 className="relative"
//               >
//                 <Image
//                   src="/imgs/circle-green.svg"
//                   alt="Green circle"
//                   width={80}
//                   height={80}
//                   className="w-16 h-16 absolute -top-6 -right-4 z-0"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative z-10 w-14 h-14 rounded-full bg-purple-600 shadow-lg flex items-center justify-center text-white font-semibold text-xs text-center px-2"
//                 >
//                   Live Chat
//                 </motion.button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// components/ContactSection.tsx
"use client";

import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="relative bg-white shadow-lg rounded-xl p-6 md:p-10 mt-10 mx-4 md:mx-20 flex flex-col md:flex-row gap-10">
      {/* Avatar + Info */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div className="relative mb-4">
          <Image
            src="/imgs/contact.svg" // Replace with your avatar image
            alt="Avatar"
            width={500}
                height={300}
                className="w-full h-auto rounded-lg"
            // className="w-24 h-24 rounded-full border-4 border-pink-400"
          />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            Zizi
          </span>
        </div>
        <ul className="text-gray-700 text-sm space-y-2">
          <li><strong>📍</strong> 13 El abd allah bld street, Nasr City</li>
          <li><strong>📞</strong> 0101 737 3711 / 0111 222 333 444</li>
          <li><strong>✉️</strong> hello@ziziverse.com</li>
        </ul>
        <div className="flex gap-4 mt-4 text-pink-500 text-xl">
          <FaWhatsapp />
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaTiktok />
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 relative">
        <div className="bg-[#d0f7ce] rounded-[2rem] p-6 relative">
          <div className="absolute -top-6 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-[#d0f7ce]"></div>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md border border-[#8ef08c] bg-white focus:outline-none focus:ring-2 focus:ring-[#7ee87a]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-md border border-[#8ef08c] bg-white focus:outline-none focus:ring-2 focus:ring-[#7ee87a]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-[#8ef08c] bg-white focus:outline-none focus:ring-2 focus:ring-[#7ee87a]"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 rounded-md border border-[#8ef08c] bg-white h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#7ee87a]"
            />
            <button
              type="submit"
              className="bg-[#ff00a0] text-white px-8 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Live Chat */}
      <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 rotate-[-90deg]">
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full shadow-md">
          Live Chat
        </button>
      </div>
    </div>
  );
}
