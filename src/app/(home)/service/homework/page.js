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
          Struggling with Homework?{" "}
          <span className="text-[#4a90e2]">&#34;Best Homework Help Online&#34;</span>
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
        <a href="https://www.contentlywriters.com/">   <Button className="px-6 py-3 bg-[#4a90e2] text-white rounded-full hover:bg-[#357abd] transition duration-300">
            Get Started <FaArrowRight className="inline-block ml-2" />
          </Button></a>
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
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           Who can provide me with online homework assistance? This question has undoubtedly
come up more than once if you&#39;re a student. This situation is frequent: there are a lot of
assignments that need to be completed by a certain date, and the strain can be too much to
handle. It might be difficult to manage your time and maintain motivation while finishing all of
your assignments, particularly when your lecturers have high standards. What do a lot of
students do, then? They begin looking for trustworthy assistance online in the hopes of
locating a person who can complete their assignments at a fair price.
          </motion.p>
          <motion.p
            className="text-gray-700  leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           Thankfully, there’s an answer: the <b>best homework help online</b>. We offer trustworthy and
reasonably priced assistance that prioritizes your academic success and satisfaction. With a
transparent process, <b>affordable homework help for students</b>, and <a href="https://www.contentlywriters.com" className="text-[#5b6cf2]">best assignment
services</a>, our support is designed to meet your needs effectively.
          </motion.p>
        </div>
      </section>

      <section className="relative py-4 bg-white">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h2
      className="text-3xl font-bold mb-6 text-[#0e1c3d]"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Reliable and Affordable Homework Help for Students
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
   Students frequently look up &#34;do my homework online.&#34; It can seem like there aren&#39;t enough
hours in the day when there are several assignments in numerous subjects, each with a
deadline. The concept of <b>homework help</b> becomes very alluring at this point.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      At our core, we aim to simplify your life. Our &#34;do my homework&#34; service provides
dependable, uncomplicated assistance that saves you time and reduces stress. We
understand the busy schedules students have, and our service provides flexibility, ensuring
you have the time and peace of mind to focus on what matters most to you.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      With us, you get straightforward, honest support without hidden fees or unnecessary
complications. We take care of your schoolwork carefully and thoughtfully, ensuring that
each project meets high standards, helping you achieve your academic goals.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      In addition to <b>homework help</b>, we offer support across a wide range of <a href="https://www.contentlywriters.com/service/other-subjects-and-services" className="text-[#5b6cf2]">other subjects and
services</a>. Our expertise includes <b>do my assignment</b> requests, <b>assignment helper</b> support,
and <b>assignment experts</b> ready to assist students across multiple disciplines and topics.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Whenever homework or assignments start piling up, remember that we are here to support
you. Contact us, share your needs, and we’ll handle the rest. Whether it’s homework
assistance, <a href="https://www.contentlywriters.com/service/do-my-assignment" className="text-[#5b6cf2]">do my assignment</a> help, or <b>expert help with homework online</b>, our mission is
to make your academic life more manageable.
    </motion.p>
  </div>
</section>


    

      {/* Process Section */}
      <section className="relative py-12 bg-[#f5f7fa]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          Affordable Homework Help for Students – Reliable Support When You Need It
          </motion.h2>
          <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
     If you&#39;ve ever wondered, &#34;Can I pay someone to do my homework?&#34; we are ready to help in
areas like economics, physics, chemistry, and more. Simply saying, &#34;Help me with my
homework,&#34; allows us to complete your request efficiently and with a focus on quality.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
     Here’s why students choose our services to complete their online assignments:
    </motion.p>


         
          <motion.ul
            className="list-disc pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <li>Our pricing policies make our <b>homework writing service affordable and
            accessible</b> for students at all academic levels worldwide.</li>
            <li>We ensure that every project is original and free from plagiarism, designed to meet
            your specific requirements.</li>
            <li>Our writers are skilled <b>assignment experts</b> who follow your instructions carefully</li>
<li>We don’t rely on pre-written papers; each research paper, case study, or homework
project is crafted from scratch.</li>
<li>You can depend on us for high-quality <b>homework assistance</b> and <b>best assignment
services</b>.</li>
<li>Our support team is available 24/7 to assist with your assignments whenever you
need it.</li>
<li>We offer an easy return policy if, for any reason, you&#39;re not satisfied with the finished
product.</li>
          </motion.ul>
        </div>
      </section>

        {/* Services We Offer Section */}
        <section className="relative py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Essay Writing Service for Students
          </motion.h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
  {[
    "Pricing Policies",
    "24/7 to Assist",
    "High-Quality "
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
            What Are the Best Subject-Specific Homework Help Resources?
          </motion.h2>
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
         When looking for <b>homework help online</b>, it’s essential to find platforms that specialize in
your subjects of interest. Many students seek <b>expert help with homework online</b> in areas
like math, science, history, and literature. We provide subject-specific resources to ensure
that you get guidance tailored to your field, connecting you with <b>assignment experts</b> who
excel in those areas.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
          By using our specialized platform, you’re ensuring access to <b>top homework help</b> from
experts who understand your academic needs in detail. And if you’re looking for help beyond
homework, we offer comprehensive <b>assignment help</b> and additional <b>subject support</b> for a
variety of academic requirements.
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
            transition={{ duration: 0.8 }}
          >
           Why Choose Contently Writers for Custom Essay
           Writing Help Online?
          </motion.h3>
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           From skilled writers to high-quality, plagiarism-free content, Contently Writers offers
everything you need to succeed academically. Trust in our <b>custom essay writing
help online</b> to handle your most challenging assignments with the professionalism
and dedication that only an industry leader can provide. Let us help you excel with
confidence.
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
            transition={{ duration: 0.8 }}
          >
            Ready to Craft Your Personal Statement?
          </motion.h4>
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
            transition={{ delay: 0.3, duration: 0.6 }}
          >
          <a href="https://www.contentlywriters.com/">   <Button className="px-6 py-3 bg-[#4a90e2] text-white rounded-full hover:bg-[#357abd] transition duration-300">
              Start Now <FaArrowRight className="inline-block ml-2" />
            </Button> </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResearchPaperPage;