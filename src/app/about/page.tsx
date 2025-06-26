// app/about/page.tsx

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1f2a44] text-white px-4">
      <div className="bg-[#1f2a44] max-w-2xl w-full text-center p-10 rounded-lg shadow-lg space-y-6">
        {/* Circle Initial */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-2xl font-bold">
          R
        </div>

        {/* About Text */}
        <p className="text-sm leading-relaxed text-gray-300">
          I’M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME.
          IT’S EASY. JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR
          OWN CONTENT AND MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG
          AND DROP ME ANYWHERE YOU LIKE ON YOUR PAGE.
        </p>

        {/* Download Resume Button */}
        <Link
          href="/himanshu_resume.pdf" // Place the PDF in public/ folder
          download
          className="inline-block border border-green-500 px-6 py-2 text-green-500 hover:bg-green-500 hover:text-black transition duration-200"
        >
          DOWNLOAD RESUME
        </Link>
      </div>
    </section>
  );
}
