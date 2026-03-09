"use client";

import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Resend } from 'resend';
import { useState } from "react";

export default function Contact() {

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setSuccess(false);

  const form = e.currentTarget;
  const formData = new FormData(form);


  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setSuccess(true);
      form.reset(); // 🔹 limpia el formulario
    }

  } catch (error) {
    console.error(error);
  }

   if (!data.name || !data.email || !data.message) {
  alert("Please fill all fields");
  return;
}
  setLoading(false);
};

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      
      <div className="text-center">

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
        </h2>

        {/* Subheadline */}
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Interested in working together or discussing a project? Feel free to reach
          out. I'm always open to new opportunities and collaborations.
        </p>

        {/* Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 text-left">

          {/* Form */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400 transition-all duration-300">
            
            <h3 className="text-xl font-semibold mb-6">
              Send me a message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div>
                <label className="block text-sm text-neutral-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name" name="name" required minLength={2}
                  className="w-full border border-neutral-200 dark:border-neutral-800 bg-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-500 mb-2">
                  Email
                </label>
                <input
                  type="email" name="email"
                  placeholder="example@email.com" required
                  className="w-full border border-neutral-200 dark:border-neutral-800 bg-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  name="message" required minLength={10}
                  className="w-full border border-neutral-200 dark:border-neutral-800 bg-transparent rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-60"
                >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
                </button>

            {success && (
            <p className="text-green-500 text-sm text-center">
                Message sent successfully! I'll get back to you soon.
            </p>
            )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 flex flex-col">
            
            <h3 className="text-xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 flex-1">

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-neutral-500 mb-1">Phone</h4>
                  <p className="text-neutral-800 dark:text-neutral-200">
                    +57 311 724 9900
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-neutral-500 mb-1">Email</h4>
                  <p className="text-neutral-800 dark:text-neutral-200">
                    julianaherrera522@gmail.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-neutral-500 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/573117249900"
                    target="_blank"
                    className="text-purple-600 hover:underline"
                  >
                    Chat with me →
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-neutral-500 mb-1">Location</h4>
                  <p className="text-neutral-800 dark:text-neutral-200">
                    Medellín, Colombia
                  </p>
                </div>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-neutral-500">
                  Available for freelance and full-time opportunities
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}