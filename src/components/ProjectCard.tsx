// components/ProjectCard.tsx

type Project = {
  title: string;
  company: string;
  technologies: string[];
  description: string;
  impact?: string;
};

export default function ProjectCard({
  title,
  company,
  technologies,
  description,
  impact,
}: Project) {
  return (
    <div className="bg-[#1f2a44]/90 border rounded-lg shadow p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{company}</p>
      <p className="text-gray-700 text-sm">{description}</p>
      {impact && <p className="text-green-700 text-sm mt-2 font-medium">Impact: {impact}</p>}
      <div className="flex flex-wrap mt-3 gap-2 ">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
