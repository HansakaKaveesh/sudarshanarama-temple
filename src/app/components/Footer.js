import {
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPrayingHands,
} from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    [FaFacebookF, 'https://facebook.com', 'Facebook'],
    [FaYoutube, 'https://youtube.com', 'YouTube'],
    [FaInstagram, 'https://instagram.com', 'Instagram'],
    [FaTwitter, 'https://twitter.com', 'Twitter'],
    [FaLinkedin, 'https://linkedin.com', 'LinkedIn'],
  ];

  const quickLinks = [
    ['/events', 'Upcoming Events'],
    ['/dhamma-school', 'Dhamma School'],
    ['/meditation', 'Meditation Programs'],
    ['/donations', 'Make a Donation'],
    ['/contact', 'Contact Us'],
    ['/history', 'Temple History'],
  ];

  const contactInfo = [
    [FaMapMarkerAlt, '123 Dharma Road, Colombo 05<br/>Sri Lanka'],
    [FaPhoneAlt, '+94 112 345 678'],
    [FaEnvelope, 'contact@sudarshanarama.lk'],
  ];

  return (
    <footer
      className="relative border-t-4 border-amber-300 shadow-xl overflow-hidden text-amber-50"
      style={{
        backgroundImage: "url('/footer.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top 30%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/95 to-amber-800/40" aria-hidden="true" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Temple Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <FaPrayingHands className="w-12 h-12 text-amber-300 mr-4" />
              <h3 className="text-2xl xl:text-3xl font-serif font-bold text-amber-100 drop-shadow-lg">
                Sri Sudarshanarama Purana Maha Viharaya
              </h3>
            </div>
            <p className="text-base mb-6 leading-relaxed text-amber-50/95 max-w-2xl">
            1855 දී පිහිටුවන ලද අපගේ විහාරස්ථානය කොළඹ ආධ්‍යාත්මික අභයභූමියක් ලෙස ථෙරවාදී බෞද්ධ සම්ප්‍රදායන් ආරක්ෂා කරමින් නවීන, 
            ඇතුළත් ප්‍රජාවක් පෝෂණය කරයි. අපි සෑම වයස් කාණ්ඩයක් සඳහාම දිනපතා භාවනා සැසි, ධර්ම සාකච්ඡා සහ සංස්කෘතික වැඩසටහන් පිරිනමන්නෙමු.
            </p>
            <div className="flex flex-wrap gap-3">
              {['☸️ Free Meditation Classes', '📅 Weekly Dhamma Talks', '👨👩👧👦 Family Programs'].map((text) => (
                <span
                  key={text}
                  className="bg-amber-100/15 px-4 py-2 rounded-full text-sm font-medium text-amber-100 backdrop-blur-sm border border-amber-100/25 hover:bg-amber-100/25 transition-colors cursor-default"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-amber-100 drop-shadow-md">Explore</h4>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map(([href, text]) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center p-3 -m-3 rounded-lg hover:bg-amber-100/10 transition-colors"
                >
                  <span className="w-2 h-2 mr-3 bg-amber-300 rounded-full transition-transform group-hover:scale-150" />
                  <span className="text-sm font-medium">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-6 text-amber-100 drop-shadow-md">Connect</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <address className="not-italic space-y-5">
                {contactInfo.map(([Icon, text], index) => (
                  <div
                    key={index}
                    className="flex items-start group transition-colors hover:text-amber-200"
                  >
                    <Icon className="w-6 h-6 mt-1 mr-4 text-amber-300 group-hover:animate-pulse" />
                    {index === 1 ? (
                      <a href={`tel:${text}`} className="hover:underline underline-offset-4">{text}</a>
                    ) : index === 2 ? (
                      <a href={`mailto:${text}`} className="hover:underline underline-offset-4">{text}</a>
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    )}
                  </div>
                ))}
              </address>

              <div>
                <h5 className="text-sm font-semibold mb-4 text-amber-200">Follow Our Journey</h5>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(([Icon, href, name], index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-amber-100/15 rounded-xl hover:bg-amber-100/25 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-amber-100/30 group"
                      aria-label={`Follow us on ${name}`}
                    >
                      <Icon className="w-6 h-6 text-amber-100 group-hover:text-amber-300 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-amber-100/25 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-amber-100/90">
            <div className="text-center md:text-left text-sm">
              &copy; {new Date().getFullYear()} Sri Sudarshanarama Purana Maha Viharaya. All rights reserved.
              <div className="mt-1 space-x-4">
                {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((text) => (
                  <a
                    key={text}
                    href={`/${text.toLowerCase().replace(/ /g, '-')}`}
                    className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-xs flex items-center">
              Developed 
              by
              <a
                href="https://www.linkedin.com/in/hansaka-wijesinghe-285748142/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:text-amber-300 font-medium transition-colors flex items-center group"
              >
                Hansaka Wijesinghe
                <FaLinkedin className="ml-2 w-4 h-4 text-amber-100 group-hover:text-amber-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}