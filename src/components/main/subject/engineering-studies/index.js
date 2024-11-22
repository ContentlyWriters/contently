"use client";
import { FaCheckCircle } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { motion } from "framer-motion"; // For subtle animations
import { Button } from "@/components/ui/button";

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const EngineeringPage = () => {
  return (
    <div className="text-[#333] font-sans">
      {/* Hero Section with Animation */}
      <div className="bg-[#e9f2f2] py-8 text-center relative overflow-hidden">
        <motion.h1
          className="text-grey sm:text-[40px] lg:text-[50px] text-[30px] pt-20 mx-auto font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Best Engineering Assignment Help
        </motion.h1>
        <motion.p
          className="text-[#191936] text-[25px] pt-2 mb-8 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Expert Engineering Assignment Help – From Concepts to Completion!
        </motion.p>
        <motion.div
          className="h-[5px] w-[120px] bg-[#5b6cf2] mx-auto rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        ></motion.div>
      </div>

      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Introduction */}
          <div className="px-6 sm:px-10 lg:px-[60px] py-12 bg-white">
            <section className="mb-12">
              {/* <motion.h1
                className="text-3xl font-bold mb-6 text-[#303030]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Information Technology Assignment Help to Boost Your Grades Effortlessly
              </motion.h1> */}
              <motion.p className="text-lg leading-7 mb-6">
              Are you having trouble with your engineering homework? Have you been looking up
"Complete my engineering assignment" online? If so, it's time to set your concerns regarding
writing services for engineering assignments aside. A group of very talented assignment
writers who are also seasoned engineers work for Contently Writers. We are here to make
sure you succeed academically because we have years of experience creating excellent
engineering assignments.              </motion.p>
              <motion.p className="text-lg leading-7 mb-6">
              Being the top website for engineering students looking for assignment help, we work hard to
protect you from receiving poor scores and to earn your trust by greatly enhancing your
academic performance. Assignments in engineering can be difficult, particularly when
dealing with complicated subjects. But our skilled writers are experts at accurate and
well-written articles on both basic and sophisticated engineering subjects. Furthermore, our
services are free of plagiarism, as confirmed by programs like <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">
SafeAssign</a>, guaranteeing
uniqueness and academic honesty.              </motion.p>
            </section>

            <section className="mb-12">
  <motion.h2
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Top-Notch Engineering Assignment Help for All Disciplines
  </motion.h2>
  <motion.p className="text-lg leading-7 mb-6">
    There are several subfields or branches within the large field of engineering, and each one
    calls for particular knowledge. Our assignment writers have been helping students with their
    projects for many years and have extensive understanding of a variety of engineering areas.
    Continue reading to find out more about the branches we cover:
  </motion.p>

  <motion.h3 className="text-2xl font-bold mb-4 text-[#303030]">
  ●  Engineering in Computer Science
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    Because of their extensive use in a variety of sectors, including information technology, banking, entertainment, media, healthcare, and education, computers have become essential in today's world. The need for qualified computer science engineers and experts is increasing along with the demand for technology. One of the most popular programs is Computer Science Engineering (CSE), which gives students a thorough understanding of networking, computer programming, and related topics. For students looking for <b>software engineering assignment help</b>, we also provide expert guidance to tackle complex topics and deliver assignments that meet academic standards with precision.
  </motion.p>

  <motion.h3 className="text-2xl font-bold mb-4 text-[#303030]">
  ●  Mechanical Engineering
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    Designing, creating, and manufacturing machinery requires the use of engineering mathematics and physics principles. Mechanical engineers frequently work in sectors including metal, steel, forging, mining, and automotive, offering a plethora of employment chances for recent graduates each year, according to our engineering assignment writing experts. You can save a lot of time and concentrate on understanding important ideas in mechanical engineering, such as materials science, structural analysis, mechanics, kinematics, thermodynamics, and electricity, by choosing to use our mechanical engineering assignment help.
  </motion.p>

  <motion.h3 className="text-2xl font-bold mb-4 text-[#303030]">
  ●  Communication and Electronics Engineering
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    Power electronics, semiconductor devices, integrated circuits, logic design, VLSI, signals, and systems are the main areas of study for this field of engineering. Every year, more and more students are drawn to Electronics & Communication Engineering because of its stellar job possibilities. Our professional academic writers have completed projects on almost every subject in electronics and communication engineering, so you can be sure that you will receive excellent support that is customized to meet your academic demands.
  </motion.p>

  <motion.h3 className="text-2xl font-bold mb-4 text-[#303030]">
  ●  Robotics and Automation Engineering
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    Automation & Robotics Engineering is a great option for those who are enthusiastic about creating novel applications, designing robots, and investigating automation systems, as our engineering assignment writing team has pointed out. Electro-mechanics, robot manipulators, robotic sensors, robot motion planning, computer-aided manufacturing, and artificial intelligence are just a few of the many issues covered in this field. In this innovative field, our professionals are prepared to offer customized advice that will make your tasks stand out.
  </motion.p>

  <motion.h3 className="text-2xl font-bold mb-4 text-[#303030]">
  ●  Civil Engineering
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    Look at the roads, buildings, bridges, canals, dams, airports, pipelines, and sewage systems in your immediate surroundings. The experts in charge of planning and building each of these crucial structures are civil engineers. Our committed staff at Contently Writers has been helping students overcome their academic obstacles for years by providing <b>civil engineering assignment help</b>. Our objective is to offer you top-notch support so you may succeed in your civil engineering courses, emphasizing fundamental ideas and real-world applications.
  </motion.p>

  <motion.h3 className="text-2xl font-bold mb-4 text-[#303030]">
  ●  Electrical Engineering
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    Electromagnetism, electronics, and electricity are the main subjects of study and application in electrical engineering. Students in this discipline gain experience working with high- and low-voltage equipment that is utilized in power generation, transportation networks, and renewable energy systems. Our <b>Electrical engineering assignment help</b> can assist you if you want to succeed in your electrical engineering degree but are feeling overburdened by coursework. We guarantee that your papers are flawlessly written, freeing up more time for you to concentrate on becoming an expert in this demanding yet worthwhile profession.
  </motion.p>

  <motion.h3 className="text-2xl font-bold mb-4 text-[#303030]">
  ●  Aeronautical Engineering
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    Research, design, development, and testing of aircraft are all part of aeronautical engineering. The need for qualified aeronautical engineers is expected to increase dramatically in industries including airlines, the Ministry of Defense, helicopter manufacture, the Air Force, NASA, and aviation firms, according to our professional assignment writers. If you’re struggling with academic challenges in this field, our <b>expert Aerospace Engineering Assignment Help</b> ensures that you receive top-quality assistance on various aeronautical topics, enabling you to achieve academic success while preparing for a bright future in this dynamic industry.
  </motion.p>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 mt-8">
    {["Computer Science", "Civil Engineering", "Aeronautical", "Robotics"].map((title, index) => (
      <motion.div
        className="text-center p-6 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        key={index}
      >
        <FaCheckCircle className="text-[#020035] text-4xl mb-4 mx-auto transition-colors duration-200" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p>Expert assistance with {title.toLowerCase()} assignments to help you succeed.</p>
      </motion.div>
    ))}
  </div>
</section>

<section className="mb-12">
  <motion.h2
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Why Choose Contently Writers for Engineering Assignment Help?
  </motion.h2>
  <motion.p className="text-lg leading-7 mb-6">
    At Contently Writers, we provide comprehensive <b>engineering assignment help</b> to ensure
    students excel in their academic pursuits. From <b>Civil Engineering Assignment Help</b> to
    <b> Software Engineering Assignment Help</b>, our experts specialize in a wide range of
    disciplines. Whether you need <b>Electrical Engineering Assignment Help, help with
    biomedical engineering assignments</b> or even <b>expert Aerospace Engineering Assignment Help</b>,
    we deliver tailored solutions crafted by professionals with deep industry knowledge.
  </motion.p>
  
  <motion.p className="text-lg leading-7 mb-6">
    In addition to engineering, we offer expert assistance in <a
href="https://www.contentlywriters.com/subject/information-technology" className="text-[#5b6cf2]">IT</a>, <a href="https://www.contentlywriters.com/subject/law" className="text-[#5b6cf2]"> Law</a>, <a href="https://www.contentlywriters.com/subject/statistics" className="text-[#5b6cf2]"> Statistics</a>, and many other
    fields. Our mission is to provide top-notch, plagiarism-free content that meets your academic
    requirements, helping you save time and achieve outstanding results.
  </motion.p>
  
  <motion.p className="text-lg leading-7 mb-6">
    Reach out to Contently Writers today and take the first step toward academic success. With
    our assistance, you can confidently tackle even the most challenging assignments while
    preparing for a successful career in your chosen field.
  </motion.p>
</section>



        

          {/* Call to Action */}
          <div id="faq" className="px-4 sm:!px-10 lg:!px-[50px] bg-[#000]">
            <div className="max-w-[1280px] mx-auto py-10 lg:py-24 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
              <p className="text-white text-3xl text-center">
                Get your assignment done in just a few clicks
              </p>

              <Button
                type="button"
                className="p-8 bg-[#5b6cf2] text-xl hover:bg-white hover:text-black"
              >
                <a
    href="https://contentlywriters.com"
  >
    Write my assignment
  </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EngineeringPage;
