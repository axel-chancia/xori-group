import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Nous contacter</h2>
      <ContactForm />
    </div>
  );
}
