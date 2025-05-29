// app/NotValidNum/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/helpers/theme-provider";
import Image from "next/image";
import logo from "../../../../public/imgs/logo.svg";

const NotValidNum = () => {

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
                className={`w-full max-w-md ${theme === 'dark' ? 'bg-[var(--dark-blue)]' : 'bg-[var(--white)]'} rounded-2xl shadow-xl overflow-hidden p-8`}
            >
                <motion.h3
                    variants={itemVariants}
                    className={`text-2xl font-bold text-start ${theme === 'dark' ? 'text-[var(--light-green)]' : 'text-[var(--dark-blue)]'} mb-8`}
                >
                    Create New Account
                </motion.h3>

                <motion.div
                    variants={itemVariants}
                    className={`border-2 border-[var(--pink)] rounded-lg p-4 mb-6`}
                >
                    <div className="flex items-start">
                        <div className="mr-3 flex-shrink-0">
                            <Image
                                src="/imgs/error.svg"
                                alt="Error"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </div>
                        <div>
                            <p className={`font-semibold ${theme === 'dark' ? 'text-[var(--light-green)]' : 'text-[var(--dark-blue)]'}`}>
                                Mobile number already in use
                            </p>
                            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-[var(--white)]' : 'text-[var(--gray-2)]'}`}>
                                You indicated that you are a new customer, but this account already exists with the mobile number +201144523002
                            </p>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    variants={itemVariants}
                    className="mt-8 text-start"
                >
                    <span
                        className={`${theme === 'dark' ? '!text-[var(--light-green)]' : '!text-[var(--dark-blue)]'} font-medium hover:text-indigo-800 transition-colors`}
                    >
                        Are you an existing customer?
                    </span>
                    <Link passHref href='/sign-in'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className={`mt-3 text-sm text-[var(--pink)] hover:!underline`}
                        >
                            Sign-in
                        </motion.p>
                    </Link>

                    <Link passHref href='/forgot-password'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className={`text-sm text-[var(--pink)] hover:!underline`}
                        >
                            Forgot your password?
                        </motion.p>
                    </Link>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className={`mt-3 font-medium text-[var(--dark-blue)] `}
                    >
                        New to Animeye?
                    </motion.p>

                    <Link passHref href='/forgot-password'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className={`mt-2 text-sm text-[var(--pink)] hover:!underline`}
                        >
                            Create new account?
                        </motion.p>
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

export default NotValidNum;