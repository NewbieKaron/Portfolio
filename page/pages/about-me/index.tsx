import Link from "next/link";

const AboutMe = () => {
    return (
        <div className="bg-gray-100 text-gray-900 p-6 md:p-10 shadow-md">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      
      {/* Introduction Section */}
      <section className="mb-6">
        <p className="text-xl text-center text-gray-700">
        &quot;Don’t write code that’s just going to work. Write code that’s easy to maintain.&quot; — Robert C. Martin
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Languages & Frameworks</h3>
            <p className="text-gray-600">HTML, CSS, JavaScript, React, Next.js, Lua</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tools</h3>
            <p className="text-gray-600">NPM, Visual Studio Code, Webpack, Roblox Studio</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Database</h3>
            <p className="text-gray-600">SQL (MySQL) NoSQL (Firebase, DataStore)</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Version Control</h3>
            <p className="text-gray-600">Git, GitHub</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Projects</h2>
        <p className="text-center text-lg text-gray-700">
          Check out some of my recent projects on my <Link href="/projects">Projects Page</Link>
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Me</h2>
        <p className="text-center text-lg text-gray-700">
          Feel free to reach out to me via email or LinkedIn for collaborations or just to say hi!
        </p>
      </section>
    </div>
    );
};

export default AboutMe;