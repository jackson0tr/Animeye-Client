// app/Support/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/helpers/theme-provider";
import Image from "next/image";
import logo from "../../../../public/imgs/logo.svg";

const Support = () => {

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
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[var(--dark-blue)]' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} items-center justify-center  p-4`}>
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
                className={`w-full max-w-md ${theme === 'dark' ? 'bg-[var(--dark-blue)]' : 'bg-[var(--white)]'} rounded-2xl shadow-xl  overflow-hidden p-8`}
            >

                {/* Support Image */}
                <motion.div
                    variants={itemVariants}
                    className="mb-6"
                >
                    <Image
                        src="/imgs/support.svg"
                        alt="Customer Support"
                        width={120}
                        height={120}
                        className="w-24 h-24 mx-auto"
                    />
                </motion.div>

                {/* Heading */}
                <motion.h3
                    variants={itemVariants}
                    className={`text-2xl font-bold ${theme === 'dark' ? 'text-[var(--light-green)]' : 'text-[var(--dark-blue)]'} mb-4`}
                >
                    Contact Customer Service
                </motion.h3>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className={`mb-4 ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'}`}
                >
                    To continue, you'll need to contact customer service.
                </motion.p>

                {/* Continue Button */}
                <motion.div className="flex justify-center" variants={itemVariants}>
                    <Link passHref href='/contact'>
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className={`py-3 px-8 rounded-lg !bg-[var(--white)] !border !border-[var(--pink)] font-semibold !text-[var(--dark-blue)] transition-colors shadow-md`}
                    >
                        Continue to customer service
                    </motion.button>
                    </Link>

                </motion.div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={`mt-8 w-full max-w-md ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'} text-sm`}
            >
                <div className="flex justify-center space-x-6 mb-3">
                    <Link
                        href="/terms"
                        className={`!text-[var(--pink)] hover:!underline transition-colors`}
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        href="/privacy"
                        className={`!text-[var(--pink)] hover:!underline transition-colors`}
                    >
                        Privacy policy
                    </Link>
                    <Link
                        href="/help"
                        className={`!text-[var(--pink)] hover:!underline transition-colors`}
                    >
                        Help
                    </Link>
                </div>

                <div className={`h-px w-full ${theme === 'dark' ? 'bg-[var(--gray-1)]' : 'bg-[var(--gray-2)]'} mb-3`}></div>

                <p className="text-center">© 2024, Animeye.co</p>
            </motion.div>
        </div>
    );
};

export default Support;