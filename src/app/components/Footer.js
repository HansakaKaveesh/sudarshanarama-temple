import { FaFacebookF, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing Facebook and YouTube icons

export default function Footer() {
  return (
    <footer className="bg-yellow-100 border-t border-yellow-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Temple Information */}
          <div className="text-yellow-900">
            <h3 className="text-lg font-semibold mb-4">Sri Sudarshanarama Purana Maha Viharaya</h3>
            <p className="text-sm mb-2">A Sanctuary of Peace and Spiritual Growth</p>
            <p className="text-sm">Established 1958</p>
          </div>

          {/* Contact Information */}
          <div className="text-yellow-900">
  <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
  <ul className="space-y-2 text-sm">
    <li className="flex items-center">
      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-yellow-700" aria-hidden="true" />
      <span>123 Dharma Road, Colombo</span>
    </li>
    <li className="flex items-center">
      <FaPhoneAlt className="w-4 h-4 mr-2 text-yellow-700" aria-hidden="true" />
      <span>+94 112 345 678</span>
    </li>
    <li className="flex items-center">
      <FaEnvelope className="w-4 h-4 mr-2 text-yellow-700" aria-hidden="true" />
      <span>info@sudarshanarama.lk</span>
    </li>
  </ul>
</div>

          {/* Social Media */}
          <div className="text-yellow-900">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-700 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-700 transition-colors">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-yellow-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-yellow-900">
            <div className="text-center md:text-left mb-4 md:mb-0 text-sm">
              &copy; {new Date().getFullYear()} Sri Sudarshanarama Purana Maha Viharaya. All rights reserved.
            </div>
            <div className="text-xs text-yellow-900/80">
              Developed by{" "}
              <a 
                href="https://hansaka.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-700 transition-colors"
              >
                Hansaka Wijesinghe
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}