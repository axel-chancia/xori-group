'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('sent');
      formRef.current.reset();
    } catch (error) {
      console.error('Erreur envoi email :', error);
      setStatus('error');
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold">Formulaire de contact</h2>

      <div>
        <label htmlFor="user_name" className="block font-medium">Nom</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="user_email" className="block font-medium">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {status === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>

      {status === 'sent' && <p className="text-green-600">Message envoyé !</p>}
      {status === 'error' && <p className="text-red-600">Erreur lors de l’envoi.</p>}
    </form>
  );
}
