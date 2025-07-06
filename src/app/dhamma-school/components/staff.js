import Image from "next/image";
import { motion } from "framer-motion";

export default function Staff() {
  const staffMembers = [
    {
      id: 1,
      name: "පූජ්‍ය උළුවිටියේ අනුරුද්ධ හිමි",
      role: "විහාරාධිපති හා විදුහල්පති",
      qualifications: "BA in Buddhist Studies, MA in Education",
      image: "chief-monk.jpg",
    },
    {
      id: 2,
      name: "Mrs. Nadeesha Perera",
      role: "Senior Teacher - Grade 10 & 11",
      qualifications: "BSc in Mathematics, PGDE",
      image: "teacher1.jpg",
    },
    {
      id: 3,
      name: "Mr. Saman Jayasinghe",
      role: "Assistant Teacher - Grade 8 & 9",
      qualifications: "BA in History, Diploma in Teaching",
      image: "teacher2.jpg",
    },
    {
      id: 4,
      name: "Ms. Sunethra Ranasinghe",
      role: "Assistant Teacher - Grade 6 & 7",
      qualifications: "BA in Sinhala, National Diploma in Ed.",
      image: "teacher3.jpg",
    },
    {
      id: 5,
      name: "Mr. Nuwan Fernando",
      role: "Assistant Teacher - Grade 4 & 5",
      qualifications: "BA in Buddhist Philosophy",
      image: "teacher4.jpg",
    },
    {
      id: 6,
      name: "Mrs. Gayani Abeykoon",
      role: "Arts & Culture Teacher",
      qualifications: "Dip. in Fine Arts, Visual Pedagogy",
      image: "teacher5.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-700 mb-12">
          📚 අපගේ ගුරුවරුන්
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {staffMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.05, rotate: 0.2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100"
            >
              <div className="text-center">
                <Image
                  src={`/${member.image}`}
                  alt={member.name}
                  width={140}
                  height={140}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-amber-500 shadow-md mb-4"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-amber-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {member.qualifications}
              </p>

              {/* Optional social links - replace with actual links */}
              <div className="mt-4 flex justify-center space-x-4 text-xl">
                <a href="#" aria-label="Facebook" className="text-amber-500 hover:text-amber-700 transition">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" aria-label="Twitter" className="text-amber-500 hover:text-amber-700 transition">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-amber-500 hover:text-amber-700 transition">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}