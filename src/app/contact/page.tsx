// app/contact/page.tsx

import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-6 text-gray-600">
        I'd love to hear from you! Use the form below or email me directly at{" "}
        <a href="mailto:hgautam54467@outlook.com" className="text-blue-600 underline">
          hgautam54467@outlook.com
        </a>
      </p>
      <ContactForm />
    </main>
  );
}
