import { FaFacebookF, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer 
      className="relative border-t-4 border-yellow-200 shadow-lg overflow-hidden"
      style={{
        backgroundImage: "url('/footer.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 to-yellow-800/30" aria-hidden="true"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Temple Information */}
          <div className="text-yellow-50 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4 text-yellow-100 drop-shadow-md">
              Sri Sudarshanarama Purana Maha Viharaya
            </h3>
            <p className="text-sm mb-4 leading-relaxed text-yellow-50/90 max-w-xl">
              Nestled in the heart of Colombo, our temple has been a beacon of Buddhist teachings 
              and community harmony since 1958. Join us in preserving ancient wisdom while 
              embracing modern spiritual needs.
            </p>
            <div className="flex items-center space-x-2">
              <span className="bg-yellow-100/20 px-3 py-1 rounded-full text-xs font-medium text-yellow-100 backdrop-blur-sm border border-yellow-100/30">
                🕉️ Open Daily: 5 AM - 8 PM
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-yellow-50">
            <h4 className="text-lg font-semibold mb-4 text-yellow-100 drop-shadow-md">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                ['/events', 'Upcoming Events'],
                ['/dhamma-school', 'Dhamma School'],
                ['/donations', 'Make a Donation'],
                ['/contact', 'Volunteer Opportunities']
              ].map(([href, text]) => (
                <li key={href}>
                  <a href={href} className="group hover:text-yellow-200 transition-colors flex items-center">
                    <span className="mr-2 transition-transform group-hover:translate-x-1">➔</span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-yellow-50">
            <h4 className="text-lg font-semibold mb-4 text-yellow-100 drop-shadow-md">Connect With Us</h4>
            <ul className="space-y-3 text-sm mb-6">
              {[
                [FaMapMarkerAlt, '123 Dharma Road, Colombo 05<br/>Sri Lanka'],
                [FaPhoneAlt, '+94 112 345 678'],
                [FaEnvelope, 'contact@sudarshanarama.lk']
              ].map(([Icon, text], index) => (
                <li 
                  key={index}
                  className="flex items-center hover:text-yellow-200 transition-colors group"
                >
                  <Icon className="w-5 h-5 mr-3 text-yellow-200 transition-transform group-hover:scale-110" />
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>

            <div className="flex space-x-3 mt-4">
              {[
                [FaFacebookF, 'https://facebook.com'],
                [FaYoutube, 'https://youtube.com'],
                [FaInstagram, 'https://instagram.com']
              ].map(([Icon, href], index) => (
                <a 
                  key={index}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-yellow-100/20 rounded-full hover:bg-yellow-100/30 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-yellow-100/20"
                  aria-label={`Follow us on ${Icon.displayName}`}
                >
                  <Icon className="w-6 h-6 text-yellow-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-yellow-100/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-yellow-100">
            <div className="text-center md:text-left mb-4 md:mb-0 text-sm">
              &copy; {new Date().getFullYear()} Sri Sudarshanarama Purana Maha Viharaya. 
              All rights reserved. | <a href="/privacy" className="hover:text-yellow-200 underline-offset-4 hover:underline">Privacy Policy</a>
            </div>
            <div className="text-xs flex items-center">
              Crafted with <span className="text-yellow-200 mx-1">❤️</span> by
              <a 
                href="https://www.linkedin.com/in/hansaka-wijesinghe-285748142/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 hover:text-yellow-200 font-medium transition-colors flex items-center"
              >
                Hansaka Wijesinghe
                <FaLinkedin className="ml-2 w-4 h-4 text-yellow-100 hover:text-yellow-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}