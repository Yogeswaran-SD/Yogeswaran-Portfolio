"use client";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RxEnvelopeClosed, RxPerson, RxPencil1 } from "react-icons/rx";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

type ToastState = {
  show: boolean;
  type: "success" | "error";
  message: string;
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "success",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "yogi_009",
        "template_s96gcn9",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "aiQu_oppvvYF-ZQI9"
      );

      showToast("success", "Message sent successfully! I'll get back to you soon. 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      showToast("error", "Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl backdrop-blur-xl border shadow-2xl max-w-sm"
            style={{
              background:
                toast.type === "success"
                  ? "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.15))"
                  : "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(217,70,239,0.15))",
              borderColor:
                toast.type === "success"
                  ? "rgba(16,185,129,0.4)"
                  : "rgba(239,68,68,0.4)",
              boxShadow:
                toast.type === "success"
                  ? "0 0 30px rgba(16,185,129,0.2)"
                  : "0 0 30px rgba(239,68,68,0.2)",
            }}
          >
            {toast.type === "success" ? (
              <BsCheckCircleFill className="text-emerald-400 text-2xl shrink-0" />
            ) : (
              <BsXCircleFill className="text-red-400 text-2xl shrink-0" />
            )}
            <p className="text-white text-sm font-medium leading-snug">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="contact"
        className="flex flex-col items-center justify-center py-20 px-5 z-[20] relative w-full"
      >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2 },
          },
        }}
        className="w-full max-w-5xl"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
          Contact Me
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 bg-[#030014]/50 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-[0_0_30px_rgba(113,47,255,0.15)] border border-[#712fff]/10">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-white mb-2">Let&apos;s Connect</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;m always open to new opportunities, collaborations, or just a friendly chat. 
              Drop a message and I&apos;ll get back to you as soon as possible!
            </p>
            <div className="mt-8 flex flex-col gap-6 w-full h-full min-h-[200px] lg:min-h-[250px] rounded-2xl bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] flex items-center justify-center relative overflow-hidden border border-purple-500/20 shadow-inner">
              <div className="w-[150px] h-[150px] rounded-full bg-purple-500/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-[100px] h-[100px] rounded-full bg-cyan-500/20 blur-3xl absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2"></div>
              <RxEnvelopeClosed className="text-7xl text-purple-300 z-10 opacity-70 drop-shadow-[0_0_15px_rgba(168,124,255,0.5)]" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-[1.2] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-300 font-medium ml-1">Name</label>
              <div className="relative flex items-center">
                <RxPerson className="absolute left-4 text-gray-400 text-xl" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#0a0a1a]/80 border border-[#712fff]/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-300 font-medium ml-1">Email</label>
              <div className="relative flex items-center">
                <RxEnvelopeClosed className="absolute left-4 text-gray-400 text-xl" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="yourmail@example.com"
                  className="w-full bg-[#0a0a1a]/80 border border-[#712fff]/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-300 font-medium ml-1">Message</label>
              <div className="relative flex">
                <RxPencil1 className="absolute left-4 top-4 text-gray-400 text-xl" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full bg-[#0a0a1a]/80 border border-[#712fff]/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-2 flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(113,47,255,0.4)] transform hover:-translate-y-1 w-full sm:w-auto self-start"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
    </>
  );
};
