// components/main/notification.js
"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Notification = forwardRef((props, ref) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info"); 
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showNotification(msg, msgType = "info") {
      setMessage(msg);
      setType(msgType);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    },
  }));

  const bgColor = {
    info: "bg-white/90 border-gray-200 text-gray-900",
    success: "bg-green-100/90 border-green-200 text-green-800",
    error: "bg-red-100/90 border-red-200 text-red-800",
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`fixed top-5 right-5 z-[99999] w-[310px] backdrop-blur-md shadow-lg border ${bgColor[type]} rounded-xl px-4 py-2 flex items-center justify-between`}
        >
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={() => setShow(false)}
            className="ml-3 text-gray-400 hover:text-gray-600"
          >
            <IoClose size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Notification;
