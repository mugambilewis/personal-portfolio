import Card from "./Card";
import PropTypes from 'prop-types';


const Skills = () => {
Skills.propTypes = {
  skill: PropTypes.string.isRequired,
};
    return(
     
      <div className="flex flex-col justify-center items-center">
        <div className=" top-0 px-6 py-4  rounded-md"><h1 className="text-3xl md:text-5xl font-bold text-gray-900">Skill</h1></div>
   
        <div className="grid grid-cols-4 top-10 sm:grid-cols-4 sm:px-0.5 lg:grid-cols-6 gap-4 w-full lg:w-[60%] p-6">
          <Card icon="logos:css-3" title="CSS3" description="Styling beautiful layouts and animations." />
          <Card icon="material-icon-theme:powerpoint" width="24" height="24" title="PowerPoint"/>
          <Card icon="devicon:react" width="128" height="128" title="React.JS"/>
          <Card icon="devicon:tailwindcss" width="128" height="128" title="TailwindCSS"/>
          <Card icon="devicon:redux" width="128" height="128" title="Redux"/>
          <Card icon="devicon:canva" width="128" height="128" title="Canva"/>
          <Card icon="arcticons:autocad" width="48" height="48" title="AutoCAD"/>
          <Card icon="hugeicons:capcut-rectangle" width="24" height="24" title="CapCut"/>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    ) ;
  }
  
  export default Skills; // Now 'About' is the default export