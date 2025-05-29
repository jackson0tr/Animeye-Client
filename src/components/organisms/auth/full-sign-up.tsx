// app/full-sign-up/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/helpers/theme-provider";
import Image from "next/image";
import logo from "../../../../public/imgs/logo.svg";
import { FaChevronDown } from "react-icons/fa";

const FullSignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("+20");
    const [isCountryOpen, setIsCountryOpen] = useState(false);

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

    const countryOptions = [
        { code: "+1", name: "United States", flag: "🇺🇸" },
        { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
        { code: "+33", name: "France", flag: "🇫🇷" },
        { code: "+49", name: "Germany", flag: "🇩🇪" },
        { code: "+81", name: "Japan", flag: "🇯🇵" },
        { code: "+20", name: "Egypt", flag: "🇪🇬" },
    ];

    const { theme } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[var(--dark-blue)]' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} items-center justify-center  p-4`}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                {/* Replace with your logo */}
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
                    className={`text-2xl font-bold text-start ${theme === 'dark' ? 'text-[var(--light-green)]' : 'text-[var(--dark-blue)]'} mb-8`}
                >
                    Create New Account
                </motion.h3>

                <form onSubmit={handleSubmit}>
                    <motion.div variants={itemVariants} className="mb-6">
                        <label
                            htmlFor="name"
                            className={`block text-sm font-medium ${theme === 'dark' ? 'text-[var(--pink)]' : 'text-[var(--dark-blue)]'} mb-1`}
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 text-[var(--dark-blue)] bg-[var(--white)] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            placeholder="Enter your full name"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-6">
                        <label
                            className={`block text-sm font-medium ${theme === 'dark' ? 'text-[var(--pink)]' : 'text-[var(--dark-blue)]'} mb-1`}
                        >
                            Mobile Number
                        </label>
                        <div className="flex gap-2">
                            {/* Country Selector */}
                            <div className="relative w-1/3">
                                <button
                                    type="button"
                                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                                    className={`!w-full !flex !items-center !justify-between !px-4 !py-3 !border !border-gray-300 !text-[var(--dark-blue)] !bg-[var(--white)] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                                >
                                    <span>{selectedCountry}</span>
                                    <FaChevronDown
                                        className={`${theme === 'dark' ? 'text-[var(--pink)]' : 'text-[var(--dark-blue)]'} transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {isCountryOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md !bg-[var(--white)] shadow-lg"
                                    >
                                        <ul className="py-1">
                                            {countryOptions.map((country) => (
                                                <li key={country.code}>
                                                    <button
                                                        type="button"
                                                        className={`w-full text-left px-4 py-2 text-sm !text-[var(--dark-blue)] !bg-[var(--white)] hover:bg-indigo-100 ${selectedCountry === country.code ? 'bg-indigo-100' : ''}`}
                                                        onClick={() => {
                                                            setSelectedCountry(country.code);
                                                            setIsCountryOpen(false);
                                                        }}
                                                    >
                                                        {country.flag} {country.name} ({country.code})
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </div>

                            {/* Mobile Input */}
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                className="flex-1 px-4 py-3 border border-gray-300 text-[var(--dark-blue)] bg-[var(--white)] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                placeholder="Enter your mobile number"
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-8">
                        <label
                            htmlFor="mobile"
                            className={`block text-sm font-medium ${theme === 'dark' ? 'text-[var(--pink)]' : 'text-[var(--dark-blue)]'} mb-1`}
                        >
                            Password
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 text-[var(--dark-blue)] bg-[var(--white)] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            placeholder="Enter your password"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="mb-8">
                        <label
                            htmlFor="mobile"
                            className={`block text-sm font-medium ${theme === 'dark' ? 'text-[var(--pink)]' : 'text-[var(--dark-blue)]'} mb-1`}
                        >
                            Re enter password
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 text-[var(--dark-blue)] bg-[var(--white)] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            placeholder="Enter your re enter password"
                        />
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className={`text-start ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} mb-3`}
                    >
                        Enter the Email address or mobile phone number associated with
                        Animeye account.
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
                                "Verify mobile number"
                            )}
                        </motion.button>
                    </motion.div>
                </form>

                <motion.div
                    variants={itemVariants}
                    className="mt-8 text-start"
                >
                    <Link
                        href="/help"
                        className={`${theme === 'dark' ? '!text-[var(--light-green)]' : '!text-[var(--dark-blue)]'} font-medium hover:text-indigo-800 transition-colors`}
                    >
                        Already have an account? {" "}
                        <Link href='/sign-in'>
                            <span className="text-[var(--pink)] underline">Sign In!</span>
                        </Link>
                    </Link>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className={`mt-3 text-sm ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} `}
                    >
                        By signing in, you agree to Animeye's {" "}
                        <Link href="/terms" className="!text-[var(--pink)] !underline hover:!text-[var(--light-green)]">Terms & Conditions</Link> and <Link href="/privacy" className="!text-[var(--pink)] !underline hover:!text-[var(--light-green)]">Privacy Policy</Link>
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FullSignUp;