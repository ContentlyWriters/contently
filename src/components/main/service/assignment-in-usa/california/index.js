"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const CaliforniaPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#738290] min-h-[44vh] flex flex-col items-center justify-center text-center p-4 shadow-lg backdrop-blur-md">

  <motion.h1
    className="text-black text-4xl sm:text-5xl font-semibold leading-tight mb-4"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1 }}
  >
    Get the Best Assignment Help in{" "}
    <span className="text-[#fff]">&#34;California&#34;</span>
  </motion.h1>

  <motion.p
    className="text-[#f5f5f5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
    Local expertise for exceptional assignments, wherever you are in the USA.
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
          Writing assignments and managing academic workload can be overwhelming for many
students. Deadlines, complex topics, and pressure to perform can lead to stress. If you’re
wondering where to find reliable <b>best assignment help in California</b>, you&#39;ve come to the
right place. Our professional team is here to assist you with top-notch <b>assignment writing
help in California</b> to ensure flawless submissions.
          </motion.p>
          <motion.p
            className="text-gray-700  leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
          At Contently Writers, we specialize in delivering <b>affordable homework help for students</b>
and offer <b>assignment helpers in California</b> who are experts in various subjects. Whether
you&#39;re struggling with a marketing case study, a law essay, or an engineering research
paper, we provide tailored support designed to meet the specific needs of each student. Our
expert <a href="https://www.contentlywriters.com" className="text-[#5b6cf2]">assignment helpers</a> ensure that your work is of the highest quality, meeting all
academic requirements, while being plagiarism-free.
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
      Why Choose Us for the Best Assignment Help in California?
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
   As a leading service provider in California, we are committed to your academic success.
   Here’s why our services stand out:
    </motion.p>
    <motion.ul
            className="list-decimal pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b>Expert Assistance Across All Subjects</b><br></br> Whether you&#39;re studying law, marketing, finance, or engineering, our team of
assignment experts has the specialized knowledge to help you excel in your
coursework. We handle assignments in a wide range of subjects to ensure that every
student gets the help they need.</li>
<li><b>Affordable Assignment Help for Every Student</b><br></br> We understand the financial challenges students face, which is why we offer the <b>best
assignment help USA online</b> at competitive prices. With our reasonable rates, you
don&#39;t have to compromise on quality to stay within your budget. Our goal is to make
quality academic support accessible to all students.</li>
<li><b>Plagiarism-Free Content</b><br></br> Originality is a priority for us. Every assignment you receive from us is written from
scratch, ensuring that you submit 100% original content. We also provide a free
plagiarism report on request, giving you peace of mind knowing your work is free
from copied content.</li>
<li><b>On-Time Delivery</b><br></br> We know that deadlines are crucial to academic success. Our team is dedicated to
delivering your assignments well before the due date, giving you time to review and
ask for revisions if needed. You can always rely on us for timely, stress-free
submissions.</li>
<li><b>24/7 Customer Support</b><br></br> Our customer support team is available around the clock to assist with any queries
you may have. Whether it&#39;s a question about your assignment or a request for
updates, we’re here to help whenever you need us.</li>
          </motion.ul>
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
      Common Questions Students Ask About Assignment Help
    </motion.h2>
    <motion.ul
            className="list-decimal pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <li><b>&#34;Can someone do my assignment for me online?&#34;</b><br></br> Absolutely! Our <b>Do My Assignment for Me online</b> service ensures that your academic
tasks are completed by experienced writers. You can trust our team to handle your
assignments professionally, saving you time and reducing stress.</li>
<li><b>&#34;What are the best assignment help websites?&#34;</b><br></br> The best assignment help websites, like ours, offer personalized assistance, timely delivery,
and work that adheres to your requirements. Look for a service that provides a diverse range
of subjects, guarantees plagiarism-free content, and has a transparent pricing structure.</li>
<li><b>&#34;What makes our assignment writing help in California stand out?&#34;</b><br></br> Our <b>top assignment help services in California</b> stand out because of our expert writers,
commitment to originality, affordable pricing, and 24/7 customer support. We focus on
delivering quality work that is tailored to your specific academic needs.</li>
<li><b>&#34;Do you offer help with all subjects?&#34;</b><br></br> Yes, we cover a wide variety of subjects. From <b>marketing assignment help to engineering</b>
and <b>law homework help</b>, we have experts available to assist in any subject area. This
ensures that no matter your major or focus, we can help you with any academic task.</li>
<li><b>&#34;How do I know my assignment will be done correctly?&#34;</b><br></br> Our <b>assignment experts</b> are highly qualified and experienced, holding degrees from
reputable institutions. We follow strict guidelines and double-check each paper for errors and
plagiarism before submission. Additionally, you have the option to request revisions to
ensure the work meets your expectations.</li>
          </motion.ul>
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
     Explore the Subjects Covered by Our Top Assignment Help Services in
     California
    </motion.h3>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
  At Contently Writers, we specialize in a broad range of subjects to cater to the diverse needs
  of students. Here are some of the most popular subjects we cover:
    </motion.p>
    <motion.ul
            className="list-disc pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b>California Marketing Assignment Help:</b> Marketing assignments require a blend of
creativity and in-depth knowledge of market strategies. Our <b>assignment helpers in
California</b> provide comprehensive, well-researched work that adheres to the latest
trends and case studies in the marketing industry.</li>
<li><b> Law Assignment Help:</b> Legal studies can be challenging, with complex case laws,
statutes, and intricate legal concepts. Our <a href="https://www.contentlywriters.com/subject/law" className="text-[#5b6cf2]">law assignment helpers</a> offer expert
support for assignments involving contract law, constitutional law, and more. We
simplify complex legal topics to ensure clarity and accuracy in your submissions.</li>
<li><b>Finance Assignment Help in California:</b> Finance assignments often require
precision, calculations, and detailed explanations. If you’re struggling with financial
modeling, accounting principles, or statistical analysis, our <a href="https://www.contentlywriters.com/subject/accounting" className="text-[#5b6cf2]">finance assignment help </a>
in California will guide you through the process, ensuring that all calculations are
correct and well-explained.</li>
<li><b>Engineering Assignment Help:</b> <a href="https://www.contentlywriters.com/subject/engineering-studies" className="text-[#5b6cf2]"> Engineering assignments </a> often involve technical
knowledge and problem-solving skills. Whether it’s civil, mechanical, or electrical
engineering, our team is ready to assist you with thorough research and accurate
solutions. Simply ask us to “<a href="https://www.contentlywriters.com/service/do-my-assignment/" className="text-[#5b6cf2]"> do my assignment for me online,</a>” and we’ll take care
of the rest.</li>

          </motion.ul>
        </div>
      </section>

       



      {/* Why Choose Us Section */}
      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
           Why You Should Choose Our California Assignment Help Services
          </motion.h3>
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
         By choosing <b>California assignment help services</b> from Contently Writers, you&#39;re investing
in your academic future. We provide high-quality support that helps you stay on top of your
assignments, reduce stress, and improve your grades. Let us take care of your academic
tasks so you can focus on other important aspects of your life.
excel in those areas.
          </motion.p>
        </div>
      </section>

      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
          Conclusion
          </motion.h3>
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
          If you&#39;re seeking the <b>best assignment help in California</b>, look no further. With our
affordable pricing, expert help, and guaranteed satisfaction, we are the perfect choice for
students who need reliable, high-quality academic assistance. Don’t let assignments
overwhelm you – contact us today for the best assignment help USA online!
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

export default CaliforniaPage;