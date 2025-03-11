import Connect from "./Connect";
import Contact from "./Contact";

const Contconn = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6">
      <Contact />
      <Connect  />
    </div>
  );
}
export default Contconn;