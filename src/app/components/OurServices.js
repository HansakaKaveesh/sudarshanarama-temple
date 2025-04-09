import { FaPrayingHands, FaLeaf, FaSun, FaHeart, FaBook,FaChild,FaHandsHelping,FaBookOpen,FaMountain,FaHandHoldingHeart,FaMusic,FaCalendarDay,FaArrowRight } from "react-icons/fa";

export default function OurServices() {
  const services = [
    {
      icon: <FaPrayingHands className="text-3xl text-yellow-800" />,
      title: "Meditation Sessions",
      description: "Daily guided meditation practices to cultivate mindfulness and inner peace",
      link: "/meditation"
    },
    {
      icon: <FaBook className="text-3xl text-yellow-800" />,
      title: "Dhamma School",
      description: "Sunday school program for children to learn Buddhist principles and moral values",
      link: "/dhamma-school"
    },
    {
      icon: <FaLeaf className="text-3xl text-yellow-800" />,
      title: "Dhamma Talks",
      description: "Weekly discourses on Buddhist teachings and practical life applications",
      link: "/dhamma-talks"
    },
    {
      icon: <FaChild className="text-3xl text-yellow-800" />,
      title: "Youth Programs",
      description: "Engaging activities and discussions for young adults to connect with Dhamma",
      link: "/youth-programs"
    },
    {
      icon: <FaSun className="text-3xl text-yellow-800" />,
      title: "Poya Programs",
      description: "Full moon day observances with special rituals and community activities",
      link: "/poya-programs"
    },
    {
      icon: <FaHandsHelping className="text-3xl text-yellow-800" />,
      title: "Counseling Services",
      description: "Spiritual guidance and counseling based on Buddhist psychology",
      link: "/counseling"
    },
    {
      icon: <FaHeart className="text-3xl text-yellow-800" />,
      title: "Dana & Charity",
      description: "Opportunities for generous giving and compassionate service projects",
      link: "/dana"
    },
    {
      icon: <FaBookOpen className="text-3xl text-yellow-800" />,
      title: "Library Access",
      description: "Extensive collection of Buddhist literature and digital resources",
      link: "/library"
    },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-yellow-900 mb-4">
          OUR SERVICES
          </h2>
          <div className="w-20 h-1 bg-yellow-700 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-yellow-800 max-w-2xl mx-auto">
            Discover transformative practices and community programs rooted in 
            ancient Buddhist wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-yellow-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-yellow-700 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>
                <a
                  href={service.link}
                  className="inline-flex items-center text-yellow-800 hover:text-yellow-700 font-medium transition-colors"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}