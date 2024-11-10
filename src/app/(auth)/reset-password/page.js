import React from "react";
import { Suspense } from "react";
import ResetPasswordScreen from "@/components/main/auth/reset-password";
export default function ResetPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordScreen />
    </Suspense>
  );
}
