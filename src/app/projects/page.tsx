// app/projects/page.tsx

import { projects } from "../../constants/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
       <section
      className="bg-cover bg-center text-white py-20 px-6 bg-[#606a80]"
      style={{ backgroundImage: "url('/images/skills-bg.jpg')" }}
    >
      <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
    </section>
    
  );
}
