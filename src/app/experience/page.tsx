// app/experience/page.tsx

import Timeline from "../../components/Timeline";

export default function ExperiencePage() {
  return (
    <section
      className="bg-cover bg-center text-white py-20 px-6 bg-[#606a80]"
      style={{ backgroundImage: "url('/images/skills-bg.jpg')" }}
    >
      <Timeline />
    </section>
    
  );
}
