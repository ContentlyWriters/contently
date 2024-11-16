"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const ResearchPaperPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#f5f7fa] to-[#ebeff5] min-h-[40vh] flex flex-col items-center justify-center text-center p-6">
        <motion.h1
          className="text-[#0e1c3d] text-5xl leading-tight mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          Unlock Academic Excellence with Our{" "}
          <span className="text-[#4a90e2]">Research Paper Writing Services</span>
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 1 }}
        >
          Get expert assistance with research papers of all kinds, including case studies,
          surveys, and analytical reports.
        </motion.p>
        <motion.div
          className="mt-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Button className="px-6 py-3 bg-[#4a90e2] text-white rounded-full hover:bg-[#357abd] transition duration-300">
            Get Started <FaArrowRight className="inline-block ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Unlock Academic Excellence with Our Best Research Paper Writing Services
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            At Contently Writers, we understand the challenges students face when writing research
papers. Whether it&#39;s an argumentative paper, a report, a survey, an experimental analysis, a
case study, or an analytical paper, our expert writers are here to assist you with high-quality,
100% plagiarism-free content. By entrusting your research paper assignments to us, you are
ensuring that you receive top grades while relieving yourself from the stress of tight
deadlines.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           If writing your research paper is taking longer than expected and hindering your ability to
focus on other studies, don’t worry. Our team is dedicated to delivering your assignments
ahead of time so you can breathe easy, even with the tightest schedules. Get in touch with
us today to experience seamless academic support for your research paper needs.
          </motion.p>
        </div>
      </section>

      <section className="relative py-12 bg-white">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h1
      className="text-3xl font-bold mb-6 text-[#0e1c3d]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Hire Writers for Custom Research Paper Writing Services Online – 100%
      Plagiarism-Free in All Formats
    </motion.h1>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      A research paper is a detailed, evidence-based written document that explores a particular
      topic or subject. It includes an introduction to the research problem, a review of relevant
      literature, and a discussion of methods, findings, and conclusions. As a student, mastering
      the art of writing a research paper can be daunting, but Contently Writers is here to guide
      you through every step.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      We provide <b>custom research paper writing services online</b> to cater to a variety of
      formats. Our team of professional writers specializes in delivering unique, research-driven
      assignments, ensuring each paper adheres to academic standards. Our research paper
      writing services include:
    </motion.p>

    <motion.ul
      className="text-gray-700 mb-6 leading-relaxed list-disc pl-6"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <li>
        <strong>Analytical Research Paper Assignments:</strong> Analytical papers evaluate information
        from various angles and perspectives. Our team excels in synthesizing this information to create
        well-rounded arguments and insights.
      </li>
      <li>
        <strong>Expert Help with Experimental Research Paper Writing:</strong> Experimental research
        papers require detailed analysis and presentation of data collected from controlled experiments.
        Our experts are skilled in writing high-quality experimental papers across a wide range of subjects.
      </li>
      <li>
        <strong>Research Paper Report Writing Services:</strong> Our report writing services focus on
        detailing research findings, emphasizing key takeaways, and summarizing relevant data in a clear,
        organized format.
      </li>
      <li>
        <strong>Expert Help with Argumentative Research Paper Writing:</strong> Writing an
        argumentative paper requires in-depth analysis of both sides of an issue. We offer comprehensive
        assistance in crafting well-supported arguments, backed by credible sources.
      </li>
      <li>
        <strong>Writing Services for Case Study Research Papers:</strong> Case studies involve the
        detailed examination of a person, group, or situation. We ensure your case study is insightful and
        well-researched, leading to informed conclusions.
      </li>
      <li>
        <strong>Survey-Based Research Paper Writing Services: </strong> Surveys are often used to collect
data for academic research. Our specialists design and execute surveys that gather
valuable insights, ensuring only relevant data is included in your paper
      </li>
    </motion.ul>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      We also provide expert research paper writing help across additional subjects, such as <b>law,
statistics,</b> and other subjects and services. Our <b>assignment experts</b> ensure that all your
academic needs are met, no matter the complexity or subject matter.
    </motion.p>
  </div>
</section>


      {/* Services We Offer Section */}
      <section className="relative py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Research Paper Services We Offer
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            {[
              "Analytical Research Paper",
              "Experimental Research Paper",
              "Report Writing",
              "Argumentative Research Paper",
              "Case Study Research Paper",
              "Survey-Based Research Paper"
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
                <FaBook className="text-4xl text-[#4a90e2] mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service}</h4>
                <p className="text-gray-600">High-quality assistance for {service.toLowerCase()}.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-12 bg-[#f5f7fa]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           The Process of Our Research Paper Writing Service: Your Source for Help with
           Research Paper Assignments
          </motion.h3>
          <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
     At Contently Writers, we follow a systematic and streamlined process for writing research
     papers, ensuring quality and timely delivery
    </motion.p>
          <motion.ol
            className="list-decimal pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <li><strong>Tell Us Your Needs:</strong> Begin by filling out the order form with detailed specifications for
your research paper. Be sure to include any specific university guidelines or
formatting requirements.</li>
            <li><strong>Go Ahead with Payment:</strong> Once you’ve finalized your order, proceed with the
payment using secure methods like RazorPay and PayPal. We offer a seamless
transaction process, ensuring a smooth experience.</li>
            <li><strong>Discover Exceptional Solutions:</strong> Once the payment is processed, our expert
writers get to work. You will receive a well-structured, meticulously researched paper
before the deadline. We guarantee that all papers are crafted with attention to detail
and meet the highest academic standards.</li>
          </motion.ol>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our Research Paper Writing Services?
          </motion.h2>
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            When you choose Contently Writers, you’re opting for the <b>best research paper writing help
for students</b>. We are committed to delivering papers that not only meet but exceed your
academic expectations.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           Additionally, we offer <b>online research paper writing services at cheap rates</b> without
compromising on quality. Our services are designed to accommodate a variety of student
budgets, making it easier to get expert help with research paper assignments no matter the
cost concerns.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           If you have any questions or if there’s something missing on our site, don’t hesitate to
contact us. Our support team is available 24/7 to assist you with any inquiries. Our support
team is available around the clock to assist you with any questions or concerns. At Contently
Writers, we’re committed to making your academic journey easier and more successful.
          </motion.p>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <strong>High-Quality Content</strong> – We prioritize academic excellence with every paper.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <strong>Affordable Rates</strong> – Our services are competitively priced without compromising quality.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <strong>24/7 Support</strong> – Our team is always available to assist you with any inquiries.
            </motion.li>
          </ul>
        </div>
      </section>

       {/* Conclusion Section */}
       <section className="relative py-12 bg-[#f5f7fa]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Craft Your Personal Statement?
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let us help you make a strong impression. Get personalized, high-quality support
            for your personal statement.
          </motion.p>
          <motion.div
            className="mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button className="px-6 py-3 bg-[#4a90e2] text-white rounded-full hover:bg-[#357abd] transition duration-300">
              Start Now <FaArrowRight className="inline-block ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResearchPaperPage;