

const About = () => {
  return (
    <div>
  <title>About Me</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            min-height: 100vh;\n            background-color: #fff;\n        }\n        .container {\n            width: 80%;\n            max-width: 1200px;\n            text-align: center;\n        }\n        h1 {\n            font-size: 3em;\n            margin-bottom: 20px;\n        }\n        p {\n            font-size: 1.2em;\n            line-height: 1.6;\n            margin-bottom: 40px;\n        }\n        .section-title {\n            font-size: 2em;\n            margin: 40px 0 20px;\n        }\n        .timeline {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 100%;\n        }\n        .timeline-column {\n            width: 45%;\n        }\n        .timeline-item {\n            display: flex;\n            align-items: center;\n            margin-bottom: 20px;\n            position: relative;\n        }\n        .timeline-item::before {\n            content: '';\n            position: absolute;\n            width: 10px;\n            height: 10px;\n            background-color: #000;\n            border-radius: 50%;\n            left: -20px;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n        .timeline-item::after {\n            content: '';\n            position: absolute;\n            width: 2px;\n            height: 100%;\n            background-color: #000;\n            left: -15px;\n            top: 0;\n        }\n        .timeline-item:last-child::after {\n            display: none;\n        }\n        .timeline-content {\n            background-color: #fff;\n            border: 2px solid #4a90e2;\n            border-radius: 25px;\n            padding: 10px 20px;\n            width: 100%;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        .timeline-content span {\n            font-size: 1.2em;\n        }\n        @media (max-width: 768px) {\n            .timeline {\n                flex-direction: column;\n            }\n            .timeline-column {\n                width: 100%;\n                margin-bottom: 40px;\n            }\n            .timeline-item::before, .timeline-item::after {\n                display: none;\n            }\n            .timeline-item {\n                justify-content: center;\n            }\n        }\n    " }} />
  <div className="container">
    <h1>About me</h1>
    <p>An innovative and results-driven Mechanical Engineer with a unique blend of technical, creative, and cybersecurity expertise. I have combined my passion for design and programming to create efficient and secure solutions across a range of industries. I excel in designing mechanical systems, developing user-friendly web applications, crafting engaging graphics, building software, and securing digital environments, making me a versatile professional in all industries.</p>
    <div className="timeline">
      <div className="timeline-column">
        <div className="section-title">Experience</div>
        <div className="timeline-item">
          <div className="timeline-content">
            <span>Murang’a University of Technology</span>
            <span>2021-2015</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <span>Murang’a University of Technology</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <span>Murang’a University of Technology</span>
          </div>
        </div>
      </div>
      <div className="timeline-column">
        <div className="section-title">Education</div>
        <div className="timeline-item">
          <div className="timeline-content">
            <span>Murang’a University of Technology</span>
            <span>2021-2015</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <span>Murang’a University of Technology</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <span>Murang’a University of Technology</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
