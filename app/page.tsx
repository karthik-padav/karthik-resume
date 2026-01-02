"use client";

import { useState, useEffect } from "react";
import { Code, Terminal, Folder, ExternalLink } from "lucide-react";
import { contants } from "@/utils/constant";

export default function Home() {
  const { developerDetails, profiles, experience, skills, projects, contact } =
    contants;
  const [typedText, setTypedText] = useState("");
  const fullText = `const developer = { name: ${developerDetails.name}, role: ${developerDetails.role} };`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a className="flex items-center gap-2" href="#me">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="text-xl font-mono font-bold">
                {"<Developer />"}
              </span>
            </a>
            <nav className="gap-6 hidden md:flex">
              {["about", "experience", "skills", "projects", "contact"].map(
                (section) => (
                  <a
                    href={`#${section}`}
                    key={section}
                    className={`font-mono text-sm hover:text-green-400 transition-colors text-gray-400`}
                  >
                    .{section}()
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="border-b border-gray-800 bg-gradient-to-b from-gray-950 to-gray-900"
        id="me"
      >
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="mb-4">
            <Code className="w-12 h-12 text-green-400 mb-4" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-green-400">{developerDetails.name}</span>
          </h1>
          <div className="font-mono text-xl text-gray-400 mb-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            {developerDetails.role} specializing in building exceptional digital
            experiences with React and Node.js
          </p>
          <div className="flex gap-4">
            {profiles.map((i) => (
              <a
                target="_blank"
                key={i.name}
                href={i.url}
                className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                <i.icon className="w-5 h-5" />
                {i.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-gray-800 py-16" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-mono">
            <span className="text-green-400">//</span> About Me
          </h2>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
              <span className="text-purple-400">const</span> aboutMe = {"{"}
              {"\n"}
              {"  "}name:{" "}
              <span className="text-green-400">'{developerDetails.name}'</span>,
              {"\n"}
              {"  "}role:{" "}
              <span className="text-green-400">'{developerDetails.role}'</span>,
              {"\n"}
              {"  "}location:{" "}
              <span className="text-green-400">
                '{developerDetails.location}'
              </span>
              ,{"\n"}
              {"  "}description:{" "}
              <span className="text-green-400">'{developerDetails.desc}'</span>,
              {"\n"}
              {"}"};
            </pre>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="border-b border-gray-800 py-16 bg-gray-950"
        id="experience"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-mono">
            <span className="text-green-400">//</span> Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors "
              >
                <h3 className="text-xl font-bold text-green-400">{exp.role}</h3>
                <span className="text-sm text-gray-400 font-mono">
                  {exp.company} ({exp.active})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b border-gray-800 py-16" id="skills">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-mono">
            <span className="text-green-400">//</span> Skills
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {skills.map((items) => (
              <div
                key={items.name}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 md:flex space-x-2"
              >
                <h3 className="text-xl font-bold mb-4 text-green-400 capitalize font-mono">
                  {items.name}
                </h3>
                <div className="flex flex-wrap gap-2 items-start">
                  {items.data.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-green-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="border-b border-gray-800 py-16 bg-gray-950"
        id="projects"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-mono">
            <span className="text-green-400">//</span> Hobby Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-3">
                  <Folder className="w-8 h-8 text-green-400" />
                  <a
                    href={project.href}
                    target="_blank"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-100">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3 font-mono">
                  {project.stack}
                </p>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-mono">
            <span className="text-green-400">//</span> Get In Touch
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-gray-300 mb-6 text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="grid grid-cols-1 md:flex flex-wrap gap-4">
              {[...contact, ...profiles].map(
                (i: {
                  name: string;
                  icon: any;
                  tooltip?: string;
                  url: string;
                }) => (
                  <div className="relative inline-block" key={i.name}>
                    <a
                      href={i.url}
                      aria-describedby={i.name}
                      className="w-full md:w-auto peer inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold rounded-lg transition-colors"
                    >
                      <i.icon className="w-5 h-5" />
                      {i.name}
                    </a>

                    {i?.tooltip && (
                      <div
                        id={i.name}
                        role={i.name}
                        className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 rounded bg-gray-900 p-2 text-xs text-white opacity-0 transition peer-hover:opacity-100 peer-focus:opacity-100"
                      >
                        {i.tooltip}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-mono">
            Built With <span>❤️</span> © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
