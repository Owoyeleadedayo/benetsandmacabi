"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#0071B3] items-start lg:items-center justify-start lg:justify-between p-6 md:p-14 gap-4 md:gap-2">
      <div className="flex flex-col">
        <p className="text-md leading-4 text-white font-normal capitalize">
          newsletter
        </p>
        <p className="text-xl md:text-3xl text-white font-semibold capitalize">
          Get Newsletter
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <Input
            className="py-3 bg-white border-0 rounded-none w-44 md:w-62.5 text-sm md:text-base"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
          />
          <Button
            className="bg-black py-3 border-3 border-black rounded-none text-white text-sm md:text-base cursor-pointer"
            onClick={handleSubscribe}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </div>
        {message && (
          <p
            className={`text-sm ${status === "error" ? "text-red-200" : "text-white"}`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
