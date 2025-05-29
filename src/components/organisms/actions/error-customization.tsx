// app/success/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ErrorCustomization = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center max-w-md"
            >
                {/* Error image */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-8"
                >
                    <Image
                        src="/imgs/error-customization.svg" // Update extension if needed (.jpg, .svg, etc)
                        alt="Customization Error"
                        width={300}
                        height={300}
                        className="w-64 h-64 object-contain"
                    />
                </motion.div>

                {/* Error message */}
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-[var(--pink)] mb-6"
                >
                    Oops!
                </motion.h2>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-xl md:text-2xl text-[var(--dark-blue)] mb-10"
                >
                    Customization for this product isn’t available
                    at the moment!
                </motion.p>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-xl md:text-2xl text-[var(--dark-blue)] mb-10"
                >
                    Please try again soon and stay tuned on this page!
                </motion.p>

                {/* Continue button */}

                <Link href={'/'} passHref>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 !bg-[var(--pink)] !text-[var(--white)] !rounded-full font-semibold shadow-lg hover:!bg-[var(--dark-blue)] transition-colors"
                    >
                        Back Shopping
                    </motion.button>
                </Link>

            </motion.div>
        </div>
    );
};

export default ErrorCustomization;