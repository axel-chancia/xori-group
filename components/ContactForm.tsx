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
  );
}
