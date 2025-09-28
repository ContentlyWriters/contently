// components/main/notification.js
"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
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
    warning: "bg-yellow-100/90 border-yellow-200 text-yellow-800",
    error: "bg-red-100/90 border-red-200 text-red-800",
  };

  const notificationContent = (
    <AnimatePresence>
      {show && (
      <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ type: "spring", stiffness: 500, damping: 30 }}
  className={`
    fixed top-5 right-5 z-[99999]
    w-[80%] max-w-[250px] sm:w-[300px] sm:max-w-sm
    backdrop-blur-md shadow-lg border ${bgColor[type]}
    rounded-xl px-4 py-2 flex items-center justify-between
    break-words text-sm sm:text-base
  `}
>
  <span className="flex-1 break-words">{message}</span>
  <button
    onClick={() => setShow(false)}
    className="ml-3 text-gray-400 hover:text-gray-600 shrink-0"
  >
    <IoClose size={16} />
  </button>
</motion.div>

      )}
    </AnimatePresence>
  );

  if (typeof document !== "undefined") {
    return createPortal(notificationContent, document.body);
  }
  return null;
});

Notification.displayName = "Notification";

export default Notification;
