import Connect from "./Connect";
import Contact from "./Contact";

const Contconn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <Contact />
      <Connect  />
    </div>
  );
}
export default Contconn;