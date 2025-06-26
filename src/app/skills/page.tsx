// components/SkillMatrix.tsx

const skills = [
  { name: "C#", level: "90%" },
  { name: ".NET / Web API", level: "85%" },
  { name: "Angular", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Azure (Functions, App Service)", level: "85%" },
  { name: "Databricks", level: "70%" },
  { name: "Power BI", level: "80%" },
];

export default function SkillMatrix() {
  return (
    <section
      className="bg-cover bg-center text-white py-20 px-6 bg-[#606a80]"
      style={{ backgroundImage: "url('/images/skills-bg.jpg')" }}
    >
      <div className="bg-[#1f2a44]/90 p-10 max-w-4xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-center text-4xl font-bold mb-2 tracking-widest">01 PROFESSIONAL</h2>
        <p className="text-center text-gray-300 mb-12">MY KNOWLEDGE LEVEL IN SOFTWARE</p>

        <ul className="space-y-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-600 pb-2"
            >
              <span className="text-md font-medium uppercase text-gray-200">{skill.name}</span>
              <span className="text-green-400 text-md font-bold">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
