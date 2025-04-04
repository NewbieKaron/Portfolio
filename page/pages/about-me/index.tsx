import Link from "next/link";

const AboutMe = () => {
    return (
        <div className="bg-gray-100 text-gray-900 p-6 md:p-10 shadow-md">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      
      {/* Introduction Section */}
      <section className="mb-6">
        <p className="text-xl text-center text-gray-700">
          Coding in simple term is basically WECSR cycle. CSR (Client side rendering)
          Wakeup, Eat, Code, Sleep, Repeat
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Eat</h3>
            <p className="text-gray-600">If you`re hungry, <span className="bg-green-500 border-radius rounded-[10px]">EAT</span></p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Sleep</h3>
            <p className="text-gray-600">Necessity</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Repeat</h3>
            <p className="text-gray-600">Ah. The typical life cycle.</p>
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