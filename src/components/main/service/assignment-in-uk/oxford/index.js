"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const OxfordPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#020035] min-h-[64vh] flex flex-col items-center justify-center text-center p-4 shadow-lg backdrop-blur-md">

  <motion.h1
    className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold leading-snug lg:leading-tight mb-4 sm:mb-3"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1 }}
  >
    Expert Assignment Writers in{" "}
    <span className="text-[#fff]">&#34;Oxford&#34;</span>
  </motion.h1>

  <motion.p
    className="text-[#f5f5f5] text-sm sm:text-sm lg:text-xl max-w-2xl mx-auto leading-normal lg:leading-relaxed sm:leading-snug"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
   Professional Help for Students
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
        Oxford University students face a variety of assignments, from essays to research papers,
each requiring detailed attention and strong academic focus. Seeking <b>assignment help in
Oxford</b> provides students with expert guidance to navigate these challenges effectively. With
its high academic standards, Oxford often compels students to seek professional assistance
to meet rigorous expectations. Balancing demanding coursework with other responsibilities
can be overwhelming, but our experts are here to help.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
       At Contently Writers, we offer tailored assistance across subjects like <a href="https://www.contentlywriters.com/subject/law" className="text-[#5b6cf2]"> Law</a>, <a
href="https://www.contentlywriters.com/subject/statistics" className="text-[#5b6cf2]">Statistics</a>, and
<a href="https://www.contentlywriters.com/subject/general-subjects" className="text-[#5b6cf2]"> General subjects</a>, ensuring every academic requirement is met precisely. Whether you&#39;re
tackling an intricate thesis or a simple essay, our <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">Assignment experts</a> are equipped to
handle tasks of any complexity.
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
      Best Assignment Writers in Oxford Online:
      Academic Support at Your Fingertips
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
   Our <b>best assignment writers in Oxford online</b> bridge the gap between students and their
academic goals, offering unparalleled support regardless of location. Whether you&#39;re an
Oxford student or studying elsewhere, our online assignment help ensures you receive
top-notch assistance from seasoned professionals
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
 Each paper we deliver adheres strictly to university guidelines, including those of prestigious
institutions like Oxford and Cambridge. From research papers to essays and thesis, we
combine meticulous research with exceptional writing skills to produce assignments that
excel. Additionally, our secure payment gateway, budget-friendly pricing, and discounts
make academic help accessible to all.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
 With <b>online assignment help in Oxford by experts</b>, you can confidently achieve academic
success, no matter where you are. Let distance be no barrier to your journey toward
excellence.
    </motion.p>
   </div>
  </section>

       {/* Services We Offer Section */}
       <section className="relative py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
  {[
    "Plagiarism-Free",
    "24/7 Customer Support",
    "On-Time Delivery"
  ].map((service, index) => (
    <motion.div
      key={index}
      className="text-center p-6 bg-[#f9fafc] rounded-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* <FaBook className="text-4xl text-[#4a90e2] mb-4" /> */}
      <h4 className="text-xl font-semibold mb-2">{service}</h4>
      <p className="text-gray-600">
        {service === "Top-Tier Writers" && "Skilled writers who deliver high-quality, research-driven papers tailored to your academic needs."}
        {service === "Request Any Paper" && "Get assistance with a full range of academic writing types, customized to your specifications."}
        {service === "Strict Anti-Plagiarism Policy" && "Committed to authentic, plagiarism-free content that upholds academic standards."}
      </p>
    </motion.div>
  ))}
</div>

        </div>
      </section>


      <section className="relative py-4 bg-[#f5f7fa]">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h2
      className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
   Why Students Choose the Best Assignment Helper
   in Oxford
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
  Our services are designed to meet the diverse needs of university students. We assist in:
    </motion.p>
    <motion.ul
            className="list-decimal pl-6 space-y-1 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b>High-Quality Content:</b>  Our team guarantees exceptional quality, tailored to
            university standards.</li>
<li><b>Expert Writers:</b>  We collaborate with skilled professionals who simplify complex
academic tasks.</li>
<li><b>24/7 Availability: </b> Our specialists are available around the clock to provide prompt
support.</li>
<li><b>Secure Assistance: </b> We safeguard your privacy, ensuring your data remains
confidential.</li>
<li><b>Affordable Services: </b> With competitive pricing and exciting discounts, we make
academic help budget-friendly.</li>
<li><b>Unlimited Revisions: </b> Not satisfied? We&#39;ll revise your assignment for free until you&#39;re
happy.</li>

          </motion.ul>
          <motion.p
      className="text-gray-700 mb-2 mt-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
 We also offer specialized help in niche areas like law and statistics, alongside support for
general academic subjects. This ensures students receive a comprehensive solution to all
their academic needs.
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
    What Makes Contently Writers Stand Out?
    </motion.h3>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
  Our commitment to excellence sets us apart. By combining subject expertise with a
personalized approach, we create assignments that help students secure top grades while
adhering to strict deadlines. Here’s why we’re the preferred choice:
    </motion.p>
    <motion.ul
            className="list-disc pl-6 space-y-1 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b>Plagiarism-Free Work:</b> All assignments are 100% original and crafted with academic
            integrity.</li>
<li><b>Timely Delivery:</b>  Never worry about missing a deadline again.</li>
<li><b>Affordable Rates:</b> High-quality services at student-friendly prices.</li>
<li><b>Expert Insights:</b> Our team includes seasoned professionals with deep subject
knowledge.</li>

          </motion.ul>
          <motion.p
      className="text-gray-700 mb-2 mt-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
 Whether it’s an essay, research paper, or dissertation, our <b>best assignment helper in
 Oxford</b> is here to make your academic journey seamless.
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
      Achieve Academic Success with Contently Writers
    </motion.h3>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
   At Contently Writers, we aim to simplify your educational challenges while helping you
achieve your academic goals. By offering <b>assignment help in Oxford</b> across a wide range
of subjects, including law, statistics, management, and general topics, we ensure you
receive professional, tailored assistance every step of the way.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
 Our expert writers focus on delivering assignments that adhere to university standards while
showcasing your unique perspective. Whether you’re working under tight deadlines or
navigating intricate topics, we provide solutions designed to reduce your stress and enhance
your performance.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
 With a strong emphasis on quality, originality, and timely submissions, we are dedicated to
helping you succeed. Contact us today and experience the difference with expert academic
support tailored to your needs!
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
          <a href="/contact">   <Button className="px-6 py-3 bg-[#210404] text-white rounded-full hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-black transition duration-300">
              Start Now <FaArrowRight className="inline-block ml-2" />
            </Button> </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OxfordPage;