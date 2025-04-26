"use client";

import { useRef, useEffect, useState } from "react";
import { Form, Input as AntInput } from "antd";
import { motion, useAnimation } from "framer-motion";
import { EyeInvisibleOutlined, EyeOutlined, MailOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";

interface SharedInputProps {
  label: string;
  name: string;
  type?: string;
  className?: string;
  labelStyle?: string;
  placeholder?: string;
  rules?: object[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  multiple?: boolean;
  preview?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  }
};

const inputVariants = {
  rest: { scale: 1 },
  focus: {
    scale: 1.02,
    boxShadow: "0px 0px 12px rgba(100, 181, 246, 0.3)",
    transition: { duration: 0.2 }
  }
};

const Input: React.FC<SharedInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  rules = [],
  className,
  labelStyle,
  value,
  onChange,
  disabled = false,
  multiple = false,
  preview = false,
}) => {
  const controls = useAnimation();
  const inputRef = useRef<HTMLDivElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      // Cleanup object URLs
      previews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previews]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Revoke previous URLs
      setPreviews(prev => {
        prev.forEach(url => URL.revokeObjectURL(url));
        return [];
      });
      // Generate new URLs
      const urls = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviews(urls);
      if (onChange) {
        onChange(e);
      }
    }
  };

  useEffect(() => {
    const handleFocus = () => controls.start("focus");
    const handleBlur = () => controls.start("rest");

    const inputElement = inputRef.current?.querySelector('input');
    if (inputElement) {
      inputElement.addEventListener('focus', handleFocus);
      inputElement.addEventListener('blur', handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', handleFocus);
        inputElement.removeEventListener('blur', handleBlur);
      }
    };
  }, [controls]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full mb-4"
      whileHover={{ scale: 1.01 }}
    >
      <Form.Item
        label={
          <motion.span
            className={`${labelStyle} text-white`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {label}
          </motion.span>
        }
        name={name}
        rules={rules}
        valuePropName={type === 'file' ? 'files' : 'value'}
        getValueFromEvent={type === 'file' ? (e) => e.target.files : undefined}
      >
        <div ref={inputRef}>
          {type === "textarea" ? (
            <motion.div variants={inputVariants} initial="rest" animate={controls}>
              <AntInput.TextArea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`p-3 rounded-lg w-full ${className}`}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </motion.div>
          ) : type === "password" ? (
            <motion.div
              variants={inputVariants}
              initial="rest"
              animate={controls}
            >
              <AntInput.Password
                placeholder={placeholder}
                iconRender={(visible) => (
                  <motion.div
                    animate={{ rotate: visible ? 0 : 180 }}
                    transition={{ type: "spring" }}
                  >
                    {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </motion.div>
                )}
                className={`p-3 rounded-lg w-full ${className}`}
              />
            </motion.div>
          ) : (
            <motion.div
              variants={inputVariants}
              initial="rest"
              animate={controls}
            >
              <AntInput
                disabled={disabled}
                value={value}
                onChange={type === 'file' ? handleFileChange : onChange}
                type={type}
                placeholder={placeholder}
                className={`p-3 rounded-lg w-full ${className}`}
                multiple={type === 'file' ? multiple : undefined}
                prefix={
                  name === "email" ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <MailOutlined className="text-gray-500" />
                    </motion.div>
                  ) : name === "password" ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <LockOutlined className="text-gray-500" />
                    </motion.div>
                  ) : name === "phoneNumber" ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <PhoneOutlined className="text-gray-400" />
                    </motion.div>
                  ) : null
                }
              />
              {type === 'file' && preview && previews.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {previews.map((url, index) => (
                    // <img
                    //   key={url}
                    //   src={url}
                    //   alt={`Preview ${index + 1}`}
                    //   className="w-20 h-20 object-cover rounded"
                    //   onLoad={() => URL.revokeObjectURL(url)}
                    // />
                    <Image
                      src={url}
                      key={url}
                      alt={`Preview ${index + 1}`}
                      layout="fill" // This ensures the image fits the container
                      objectFit="cover"
                      className="rounded"
                      onLoadingComplete={() => URL.revokeObjectURL(url)} // Cleanup after the image loads
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Form.Item>
    </motion.div>
  );
};

export default Input;