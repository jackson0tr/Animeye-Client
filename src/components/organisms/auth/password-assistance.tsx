// app/PasswordAssistance/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/helpers/theme-provider";
import Image from "next/image";
import logo from "../../../../public/imgs/logo.svg";
import { FaLocationDot, FaChevronDown, FaFacebook, FaGoogle } from "react-icons/fa6";

const PasswordAssistance = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("United States");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setIsSubmitting(false);
        }, 1500);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const buttonVariants = {
        initial: { scale: 1 },
        tap: { scale: 0.95 },
        hover: { scale: 1.03 },
    };

    const { theme } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[var(--dark-blue)]' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} items-center justify-center p-4`}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <Image
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full"
                />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`w-full max-w-md ${theme === 'dark' ? 'bg-[var(--dark-blue)]' : 'bg-[var(--white)]'} rounded-2xl shadow-xl overflow-hidden p-8`}
            >
                <motion.h3
                    variants={itemVariants}
                    className={`text-2xl font-bold text-center ${theme === 'dark' ? 'text-[var(--light-green)]' : 'text-[var(--dark-blue)]'} mb-8`}
                >
                    Password Assistance
                </motion.h3>

                <motion.p
                    variants={itemVariants}
                    className={`text-start ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} mb-8`}
                >
                    Enter the Email address or mobile phone number associated with
                    Animeye account.
                </motion.p>

                <form onSubmit={handleSubmit}>
                    <motion.div variants={itemVariants} className="mb-6">
                        <label
                            htmlFor="name"
                            className={`block text-sm font-medium ${theme === 'dark' ? 'text-[var(--pink)]' : 'text-[var(--dark-blue)]'} mb-1`}
                        >
                            Mobile number / Email
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 text-[var(--dark-blue)] bg-[var(--white)] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            placeholder="Enter your Mobile number / Email"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            type="submit"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            disabled={isSubmitting}
                            className={`w-full py-3 px-4 rounded-lg !bg-[var(--pink)]  font-semibold !text-[var(--white)] ${isSubmitting
                                ? "bg-[var(--light-green)] cursor-not-allowed"
                                : "bg-indigo-600 hover:bg-indigo-700"
                                } transition-colors shadow-md`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="h-5 w-5  border-t-2 border-white border-solid rounded-full"
                                    />
                                    <span className="ml-2">Processing...</span>
                                </div>
                            ) : (
                                "Continue"
                            )}
                        </motion.button>
                    </motion.div>
                </form>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`mt-8 text-center ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} text-sm`}
                >
                    <p>Has your email or mobile number changed?</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`mt-2 text-center ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} text-sm`}
                >
                    <p>If you no longer use the email address associated with your Animeye account,<br /> you may contact <Link href="/support" className={`${theme === 'dark' ? 'text-[var(--cyan)]' : 'text-[var(--pink)]'} underline`}>
                        Customer Service
                    </Link> for help restoring access to your account.{" "}
                    </p>
                </motion.div>


            </motion.div>


        </div>
    );
};

export default PasswordAssistance;