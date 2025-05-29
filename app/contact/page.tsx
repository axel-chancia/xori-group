import ContactForm from '@/components/ContactForm';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contactez-nous</h1>
        <p className="mt-2 text-gray-600">Nous répondons sous 24h</p>
      </div>
      <ContactForm />
    </main>
  );
}
