import Image from "next/image";
import { motion } from "framer-motion";

export default function Staff() {
    const staffMembers = [
        {
            id: 1,
            name: "පූජ්‍ය උළුවිටියේ අනුරුද්ධ හිමි",
            role: "විහාරාධිපති හා විදුහල්පති",
            qualifications: "BA in Buddhist Studies, MA in Education",
            image: "chief-monk.jpg"
        },
        {
            id: 2,
            name: "Mrs. Name",
            role: "Senior Teacher - Grade 10 & 11",
            qualifications: "BSc in Mathematics, PGDE",
            image: "teacher1.jpg"
        },
        {
            id: 3,
            name: "Mr. Name",
            role: "Assistant Teacher - Grade 8 & 9",
            qualifications: "BA in History, Diploma in Teaching",
            image: "teacher2.jpg"
        },
        {
            id: 4,
            name: "Mr. Name",
            role: "Assistant Teacher - Grade 8 & 9",
            qualifications: "BA in History, Diploma in Teaching",
            image: "teacher2.jpg"
        },
        {
            id: 5,
            name: "Mr. Name",
            role: "Assistant Teacher - Grade 8 & 9",
            qualifications: "BA in History, Diploma in Teaching",
            image: "teacher2.jpg"
        },
        {
            id: 6,
            name: "Mr. Name",
            role: "Assistant Teacher - Grade 8 & 9",
            qualifications: "BA in History, Diploma in Teaching",
            image: "teacher2.jpg"
        }
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 ">
                    Our Teaching Staff
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staffMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-center">
                                <Image
                                    src={`/${member.image}`}
                                    alt={member.name}
                                    width={150}
                                    height={150}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-amber-600 shadow-md"
                                    priority
                                />
                                {/* Add placeholder image if needed */}
                                <noscript>
                                    <img
                                        src={`/${member.image}`}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-amber-600 shadow-md"
                                    />
                                </noscript>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                            <p className="text-amber-600 font-semibold mb-2">{member.role}</p>
                            <p className="text-gray-600 transition-colors duration-300 hover:text-amber-600">
                                {member.qualifications}
                            </p>
                            
                            <div className="mt-4 flex justify-center space-x-3">
                                <a href="#" className="text-amber-600 hover:text-amber-700">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-amber-600 hover:text-amber-700">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-amber-600 hover:text-amber-700">
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