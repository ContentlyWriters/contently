"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const OthersubjectPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#020035] min-h-[44vh] flex flex-col items-center justify-center text-center p-4 shadow-lg backdrop-blur-md">

  <motion.h1
     className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold leading-snug lg:leading-tight mb-4 sm:mb-3"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1 }}
  >
    Assignment Help to Enhance{" "}
    <span className="text-[#fff]">&#34;Academic Performance&#34;</span>
  </motion.h1>

  <motion.p
   className="text-[#f5f5f5] text-sm sm:text-sm lg:text-xl max-w-2xl mx-auto leading-normal lg:leading-relaxed sm:leading-snug"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
   Wide-Ranging Subjects and Services for Students
  </motion.p>

  <motion.div
    className="mt-6"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.5, duration: 1 }}
  >
    <a href="https://www.contentlywriters.com/">
      <Button className="px-6 py-3 bg-[#000] text-white font-medium rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">
        Get Started <FaArrowRight className="inline-block ml-2" />
      </Button>
    </a>
  </motion.div>

</section>


      {/* Introduction Section */}
      <section className="relative py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Unlock Academic Excellence with Our Best Research Paper Writing Services
          </motion.h1> */}
        
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
        Looking for <b>premium assignment help in Oxford?</b> If so, you&#39;ve arrived at the ideal location!
Our business provides expert academic writing services that are intended to assist you in
achieving the best scores possible. We offer a broad range of services, including essays,
assignments, research papers, dissertations, and more, because we recognize that students
have different writing needs.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
      Every document is created from the ground up by our team of skilled professionals, who
base their work on in-depth research and use distinctive, creative language. At Contently
Writers, we customize every assignment to satisfy the demands of your professor and the
particular regulations of your university, guaranteeing excellent, unique content. Whether
you’re searching for <b>the best assignment services</b> or a reliable <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">Assignment helper</a>, we’ve
got you covered.
          </motion.p>
        </div>
      </section>

      <section className="relative py-4 bg-white">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h2
      className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      All Assignment Help Online: Experts in Every Academic Field
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
  Are You Trying to Find Skilled <b>Assignment Writers</b> for Your Project?
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
Our organization is home to a group of exceptionally talented writers who have years of
expertise in producing top-notch academic writing and graduate degrees in a variety of
subjects.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
We are aware that academic writing necessitates a great deal of concentration and
commitment. Our team&#39;s dedication to producing outstanding work every single day has
enabled us to attain a level of skill that is frequently difficult for ordinary students to achieve.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
To make sure you achieve your academic objectives this semester, pick our <b>best-rated
assignment services</b> and see the difference!
    </motion.p>
   </div>
  </section>


      <section className="relative py-4 bg-[#f5f7fa]">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h4
      className="text-2xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
   Types of Assignments We Assist With:
   in Oxford
    </motion.h4>
    <motion.ul
            className="list-disc pl-6 space-y-1 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b><a href="https://www.contentlywriters.com/service/dissertation" className="text-[#5b6cf2]">Dissertation:</a></b>  A dissertation is an extensive research effort that shows how well a
student understands a particular subject within their field of study. It entails critical
analysis, original study, and the creation of novel additions to the corpus of
knowledge already available in that field.</li>
<li><b><a href="https://www.contentlywriters.com/service/buy-a-research-paper" className="text-[#5b6cf2]">Research paper:</a></b> An academic publication that offers a well-supported argument or
analysis on a particular subject, supported by extensive study and data, is called a
research paper. It entails compiling and analyzing data from multiple sources to offer
insights and support the scholarly conversation on the topic.</li>
<li><b><a
href="https://www.contentlywriters.com/service/do-my-assignment" className="text-[#5b6cf2]">Thesis:</a></b> A thesis is a significant academic work that presents a student&#39;s original
research findings and theoretical contributions to their field of study. It shows that the
student can carry out independent study, evaluate information critically, and present
fresh viewpoints or ideas on a certain subject.</li>
<li><b><a
href="https://www.contentlywriters.com/subject/law" className="text-[#5b6cf2]">Law assignment help:</a></b> We also specialize in law assignment help, providing
expert guidance for students studying legal studies and related subjects. Whether it&#39;s
drafting legal essays, case studies, or preparing for exams, our writers are equipped
with the necessary expertise to assist students in excelling in their law courses</li>


          </motion.ul>
        </div>
      </section>


      <section className="relative py-4 bg-white">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h2
      className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
     No More Worries – Get Assignment Help to Secure Your Dream Grades
     Comprehensive assignment help in all subjects
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
We can appreciate your reluctance to use conventional academic writing services, but rest
assured that you are in good hands with us. Our staff is made up of seasoned <b>assignment
helpers</b> with advanced degrees in a range of subjects. They specialize in creating thorough,
excellent assignments from the ground up, guaranteeing that there are no grammatical or
technical mistakes.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
Our assignment writing service is well known for producing papers free of plagiarism and
artificial intelligence. Using cutting-edge technologies, every work is meticulously examined,
and for complete transparency, we offer thorough plagiarism reports.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
Our dedication to assisting students in obtaining the grades they desire is what distinguishes
us. We take pride in being one of the leading providers of <b>the best assignment services</b>,
emphasizing quality, originality, and timely delivery. Our professional writers are here to help
with projects on any subject or topic, whether you need assistance with essays, research
papers, or complicated assignments
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
Choose our service for the greatest assignment help accessible if you want to impress your
teachers and perform better than your colleagues. Choose wisely for your academic
achievement and put your faith in the top assignment writing service in the UK & USA to
improve your scores!
    </motion.p>
   </div>
  </section>


  <section className="relative py-4 bg-white">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h3
      className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
    Contact Contently Writers Today!
    </motion.h3>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
Don’t let academic challenges hold you back. Reach out to Contently Writers now and
experience <b>the best assignment services</b> crafted to ensure your academic success.
Whether you need an experienced <b>assignment helper</b> or a tailored solution for complex
tasks, we’re here to make your educational journey smoother.
    </motion.p>
    </div>
    </section>

  

       {/* Conclusion Section */}
       <section className="relative py-12 bg-[#f5f7fa]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <motion.h4
            className="text-3xl font-bold mb-4 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Ready to Craft Your Assignment?
          </motion.h4>
          <motion.p
            className="text-gray-700 text-lg mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Let us help you make a strong impression. Get personalized, high-quality support
            for your assignments.
          </motion.p>
          <motion.div
            className="mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
          <a href="https://www.contentlywriters.com/">   <Button className="px-6 py-3 bg-[#210404] text-white rounded-full hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-black transition duration-300">
              Start Now <FaArrowRight className="inline-block ml-2" />
            </Button> </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OthersubjectPage;