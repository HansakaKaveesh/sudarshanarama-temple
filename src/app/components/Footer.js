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
    [FaMapMarkerAlt, 'Ambagahahandiya, Kalapaluwawa, Rajagiriya'],
    [FaPhoneAlt, '+94 11 309 48 40'],
    [FaEnvelope, 'contact@sudarshanarama.lk'],
  ];

  return (
    <footer
      className="relative overflow-hidden text-amber-50"
      style={{
        backgroundImage: "url('/footer.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/95 to-amber-900/40" aria-hidden="true" />

      <div className="relative max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Temple Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <FaPrayingHands className="w-12 h-12 text-amber-300 mr-4 drop-shadow-md" />
              <h3 className="text-2xl xl:text-3xl font-serif font-bold text-amber-100 leading-snug">
                ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය
              </h3>
            </div>

            <p className="text-sm text-amber-100/90 mb-6">
              1855 දී පිහිටුවන ලද විහාරය, නවීන ආධුනික සමාජය තුළ බෞද්ධ සත්‍යය සුරකිමින්, භාවනා, ධර්ම සාකච්ඡා හා සංස්කෘතික වැඩසටහන් සමඟින් ප්‍රජාවක් පෝෂණය කරයි.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                '☸️ නොමිලේ භාවනා පන්ති',
                '📅 සතිපතා ධර්ම සාකච්ඡා',
                '👨‍👩‍👧‍👦 පවුල් වැඩසටහන්',
              ].map((label) => (
                <span
                  key={label}
                  className="bg-amber-100/10 px-4 py-1 rounded-full text-xs text-amber-100 border border-amber-100/30 hover:bg-amber-100/20 transition"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-amber-100">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-amber-100/90 hover:text-amber-300 transition"
                  >
                    • {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-5 text-amber-100">Connect with Us</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {contactInfo.map(([Icon, value], index) => (
                  <div key={index} className="flex items-start gap-4 text-sm text-amber-100/90">
                    <Icon className="w-5 h-5 mt-1 text-amber-300" />
                    {index === 1 ? (
                      <a href={`tel:${value}`} className="hover:underline">
                        {value}
                      </a>
                    ) : index === 2 ? (
                      <a href={`mailto:${value}`} className="hover:underline">
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h5 className="text-sm font-semibold mb-3 text-amber-200">Follow Us</h5>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map(([Icon, href, name], index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="p-2 rounded-full bg-amber-100/10 hover:bg-amber-100/20 transition"
                    >
                      <Icon className="w-5 h-5 text-amber-100 hover:text-amber-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 border-t border-amber-100/25 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-100/80">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Sri Sudarshanarama Purana Maha Viharaya. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((text) => (
                <a
                  key={text}
                  href={`/${text.toLowerCase().replace(/ /g, '-')}`}
                  className="hover:text-amber-300 underline-offset-2 hover:underline"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>Developed by</span>
            <a
              href="https://www.linkedin.com/in/hansaka-wijesinghe-285748142/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-amber-100 hover:text-amber-300"
            >
              Hansaka Wijesinghe
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
