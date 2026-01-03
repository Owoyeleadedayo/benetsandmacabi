"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react"; 

type Props = {
  src: string;
  onClose: () => void;
};

export default function ImageModal({ src, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] h-[90%]"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 z-50 bg-black/60 text-white rounded-full p-2 hover:bg-black transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <Image
          src={src}
          alt="Preview"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
