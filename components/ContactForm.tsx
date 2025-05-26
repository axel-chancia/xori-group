<<<<<<< HEAD
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FiSend } from 'react-icons/fi'; 


export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_jjq0db5',    // ← remplace par ton ID
        '6bX8atfZl0xutKyYZ',   // ← remplace par ton ID
        e.target,
        'HxfQwbqQY1FrnPKn36_EM'        // ← remplace par ton ID
      )
      .then(() => {
        setSent(true);
        setLoading(false);
      })
      .catch(() => {
        alert("❌ Erreur lors de l'envoi.");
        setLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-neutral-900 border border-neutral-700 text-white p-10 rounded-xl shadow-xl max-w-2xl w-full"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Envoyez-nous un message</h2>

      {sent ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-center text-lg font-semibold"
        >
          ✅ Merci ! Votre message a été envoyé. Une copie vous a aussi été envoyée.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Votre nom"
              className="w-full bg-neutral-800 text-white border border-neutral-600 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Votre email"
              className="w-full bg-neutral-800 text-white border border-neutral-600 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Votre message..."
              className="w-full bg-neutral-800 text-white border border-neutral-600 rounded px-4 py-2"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded flex items-center justify-center gap-2 transition"
          >
            {loading ? (
              'Envoi...'
            ) : (
              <>
                <FiSend className="text-lg animate-bounce" />
                Envoyer
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
=======
"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Formulaire envoyé :", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name")} placeholder="Nom" className="input" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" className="input" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <textarea {...register("message")} placeholder="Message" className="input h-32" />
      {errors.message && <p className="text-red-500">{errors.message.message}</p>}

      <button type="submit" className="btn bg-black text-white px-4 py-2 rounded" disabled={isSubmitting}>
        Envoyer
      </button>

      {isSubmitSuccessful && <p className="text-green-600">Merci pour votre message !</p>}
    </form>
>>>>>>> 0a2747e (projets et contact)
  );
}
