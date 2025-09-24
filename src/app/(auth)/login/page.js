"use client";

import { useState } from "react";
import AuthModal from "@/components/main/auth/login";

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        window.history.back(); 
      }}
    />
  );
}
