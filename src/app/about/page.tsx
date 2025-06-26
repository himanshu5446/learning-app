// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">About Me</h1>

      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        I’m Himanshu Gautam, a passionate Full Stack Developer based in Hyderabad, India, with over 7 years
        of experience in building enterprise-grade applications using technologies like .NET, Angular, Azure,
        and Databricks.
      </p>

      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        I specialize in developing scalable microservices, data pipelines, and frontend UIs with a focus on
        performance and user experience. I’ve built tools that improve audit monitoring, cut report latency,
        and handle millions of records through cloud-native solutions.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-2">Education</h2>
      <ul className="text-sm text-gray-700 list-disc list-inside">
        <li>M.Tech in Software Technology – VIT Vellore, 2015</li>
        <li>B.Tech in Computer Science – Rajasthan Technical University, 2013</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-2">Quick Highlights</h2>
      <ul className="text-sm text-gray-700 list-disc list-inside">
        <li>7+ years of experience with .NET, Angular, Azure</li>
        <li>Built and deployed solutions for Deloitte, HP, Grant Thornton</li>
        <li>Designed large-scale data pipelines in Azure Databricks</li>
        <li>Mentored junior devs and led code reviews</li>
      </ul>
    </main>
  );
}
