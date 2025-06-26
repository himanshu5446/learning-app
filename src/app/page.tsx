// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        👋 Hi, I'm Himanshu Gautam
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Azure Full Stack Developer with 7+ years of experience building scalable .NET + Angular applications
        and data pipelines using Azure Databricks, Power BI, and cloud-native services.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <Link
          href="/resume"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Resume
        </Link>
        <Link
          href="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
