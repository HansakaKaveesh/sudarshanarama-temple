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
  <div className="flex items-center mb-8 animate-fade-in">
    <FaPrayingHands className="w-14 h-14 text-amber-300 mr-5 drop-shadow-md" />
    <h3 className="text-3xl xl:text-4xl font-serif font-bold text-amber-100 drop-shadow-lg leading-tight">
      ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය - කලපලුවාව
    </h3>
  </div>

  <p className="text-base mb-8 leading-relaxed text-amber-50/95 max-w-3xl animate-fade-in delay-100">
    1855 දී පිහිටුවන ලද අපගේ විහාරස්ථානය කොළඹ ආධ්‍යාත්මික අභයභූමියක් ලෙස ථෙරවාදී බෞද්ධ සම්ප්‍රදායන් ආරක්ෂා කරමින් නවීන, 
    ඇතුළත් ප්‍රජාවක් පෝෂණය කරයි. අපි සෑම වයස් කාණ්ඩයක් සඳහාම දිනපතා භාවනා සැසි, ධර්ම සාකච්ඡා සහ සංස්කෘතික වැඩසටහන් පිරිනමන්නෙමු.
  </p>

  <div className="flex flex-wrap gap-4 animate-fade-in delay-200">
    {[
      '☸️ නොමිලේ භාවනා පන්ති',
      '📅 සතිපතා ධර්ම සාකච්ඡා',
      '👨👩👧👦 පවුල් වැඩසටහන්'
    ].map((text) => (
      <span
        key={text}
        className="bg-amber-100/10 px-5 py-2 rounded-full text-sm font-semibold text-amber-100 border border-amber-100/30 backdrop-blur-md hover:bg-amber-100/20 hover:scale-105 transition-all duration-300 cursor-default"
      >
        {text}
      </span>
    ))}
  </div>
</div>


          {/* Quick Links Grid */}
          <div className="lg:col-span-1">
  <h4 className="text-2xl font-bold mb-8 text-amber-100 drop-shadow-md animate-fade-in">
    Explore
  </h4>

  <div className="grid grid-cols-2 gap-2 animate-fade-in delay-100">
    {quickLinks.map(([href, text]) => (
      <a
        key={href}
        href={href}
        className="group flex items-center p-3 rounded-xl hover:bg-amber-100/10 hover:shadow-md transition-all duration-300"
      >
        <span className="w-2.5 h-2.5 mr-4 bg-amber-300 rounded-full transition-transform duration-300 group-hover:scale-150 group-hover:bg-amber-400" />
        <span className="text-sm font-semibold text-amber-50 group-hover:text-amber-100 transition-colors duration-300">
          {text}
        </span>
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
        <div className="border-t border-amber-100/25 pt-10 mt-12 animate-fade-in">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-amber-100/90">
    
    {/* Left Side */}
    <div className="text-center md:text-left text-sm space-y-2">
      <p>
        &copy; {new Date().getFullYear()} Sri Sudarshanarama Purana Maha Viharaya. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((text) => (
          <a
            key={text}
            href={`/${text.toLowerCase().replace(/ /g, '-')}`}
            className="text-amber-100/80 hover:text-amber-300 transition-all underline-offset-4 hover:underline text-xs font-medium tracking-wide"
          >
            {text}
          </a>
        ))}
      </div>
    </div>

    {/* Right Side */}
    <div className="text-xs flex items-center gap-1">
      <span>Developed by</span>
      <a
        href="https://www.linkedin.com/in/hansaka-wijesinghe-285748142/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-amber-100 font-semibold hover:text-amber-300 transition-all group"
      >
        Hansaka Wijesinghe
        <FaLinkedin className="w-4 h-4 text-amber-100 group-hover:text-amber-300 transition-all" />
      </a>
    </div>

  </div>
</div>

      </div>
    </footer>
  );
}