// app/skills/page.tsx

import { skills } from "../../constants/skills";

const SkillCategory = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Skills</h1>
      <SkillCategory title="Languages" items={skills.languages} />
      <SkillCategory title="Frontend" items={skills.frontend} />
      <SkillCategory title="Backend" items={skills.backend} />
      <SkillCategory title="Cloud" items={skills.cloud} />
      <SkillCategory title="Data & Analytics" items={skills.dataAndAnalytics} />
      <SkillCategory title="Tools & Platforms" items={skills.toolsAndPlatforms} />
      <SkillCategory title="Methodologies" items={skills.methodologies} />
    </main>
  );
}
