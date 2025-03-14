

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout for About Me Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: About Me Text */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
            <p className="text-gray-600">
              An innovative and results-driven Mechanical Engineer with a unique blend of technical, creative, and cybersecurity expertise. I have combined my passion for design and programming to create efficient and secure solutions across a range of industries. I excel in designing mechanical systems, developing user-friendly web applications, crafting engaging graphics, building software, and securing digital environments, making me a versatile professional in all industries.
            </p>
          </div>

          {/* Right Column: Experience and Education */}
          <div className="space-y-6">
            {/* Experience Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
              <ul className="mt-4 space-y-4">
                <li className="text-gray-600">
                  <strong>Murang’a University of Technology</strong> (2021-2015)
                  <ul className="list-disc list-inside ml-4">
                    <li>Igembe Tea Factory</li>
                    <li>Safaricom PLC</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
              <ul className="mt-4 space-y-4">
                <li className="text-gray-600">
                  <strong>Murang’a University of Technology</strong> (2021-2015)
                </li>
                <li className="text-gray-600">
                  <strong>FreeCodeCamp</strong>
                </li>
                <li className="text-gray-600">
                  <strong>Self-Taught</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
