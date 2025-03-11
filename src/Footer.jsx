


const Footer = () => {
  return (
    <footer className="text-gray-900 bg-white py-8 pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold">MyWebsite</h2>
            <p className="mt-2 text-gray-400">
              Your go-to platform for amazing content. Stay connected with us.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Services</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            {/* <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600"><FaLinkedin size={24} /></a>
            </div> */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
  }

export default Footer;
