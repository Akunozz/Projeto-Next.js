"use client"; // Toaster precisa rodar no cliente

import { Toaster } from "sonner";

export function ToasterProvider() {
  return <Toaster position="top-right" richColors duration={5000} />;
}
