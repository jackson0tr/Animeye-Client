// app/Verify/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/helpers/theme-provider";
import Image from "next/image";
import logo from "../../../../public/imgs/logo.svg";
import { FaLocationDot, FaChevronDown, FaFacebook, FaGoogle } from "react-icons/fa6";

const Verify = () => {
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
                    Enter verification code
                </motion.h3>

                <motion.p
                    variants={itemVariants}
                    className={`text-start ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} mb-8`}
                >
                    For your security, we have sent the code to your email
                    D******@gmail.com.
                </motion.p>

                <form onSubmit={handleSubmit}>
                    <motion.div variants={itemVariants} className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 text-[var(--dark-blue)] bg-[var(--white)] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            placeholder="****"
                        />
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className={`text-start text-[var(--pink)] mb-1`}
                    >
                        Resend Code!
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className={`text-start ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--dark-blue)]'} mb-1`}
                    >
                        Please wait 1 minute before requesting another code.
                    </motion.p>

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

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 text-start"
                        >
                            <Link
                                href="/help"
                                className={`${theme === 'dark' ? '!text-[var(--light-green)]' : '!text-[var(--dark-blue)]'} font-medium hover:text-indigo-800 transition-colors`}
                            >
                                Need Help?
                            </Link>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className={`mt-3 text-sm ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} `}
                            >
                                If you cannot receive the code, or if you changed your email or phone
                                number, <span className={`${theme === 'dark' ? 'text-[var(--cyan)]' : 'text-[var(--pink)]'} underline`}>try a different way.</span>
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </form>


            </motion.div>


        </div>
    );
};

export default Verify;