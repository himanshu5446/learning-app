// components/Timeline.tsx

import { experiences } from "../constants/experience";

export default function Timeline() {
  return (
    <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[34px] top-1"></div>
          <div className="bg-white p-4 shadow-md rounded-md border">
            <h3 className="text-xl font-semibold text-blue-700">
              {exp.title} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-600">
              {exp.duration} • {exp.location}
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-700 text-sm space-y-1">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
