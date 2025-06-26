// components/ExperienceTimeline.tsx

import { experiences } from "../constants/experience";

export default function ExperienceTimeline() {
  return (
    <section
      className="relative py-20 px-6 text-white bg-cover bg-center bg-[#1f2a44]" // Replace with your image
    >
      <div className="absolute inset-0  z-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold tracking-wider mb-20">
          <span className="text-white">EXPERIENCE</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-green-500" />

          {/* Timeline items */}
          <div className="space-y-20">
            {experiences.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex justify-between items-center w-full ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-5/12"></div>
                  <div className="z-10 w-5 h-5 bg-green-500 rounded-full border-4 border-[#2c3144] absolute left-1/2 transform -translate-x-1/2" />
                  <div className="bg-transparent w-5/12 text-sm leading-relaxed">
                    <p className="text-green-400 font-semibold">{item.duration}</p>
                    <h3 className="text-white text-lg font-bold">{item.company}</h3>
                    <p className="italic">{item.title}</p>
                    <p className="text-gray-300 mt-2">{item.bullets}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
