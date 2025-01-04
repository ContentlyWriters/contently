"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Button component
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi"; // Icons
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa"; // Additional icons

const DoMyAssignmentPage = () => {
  // Defining a smooth fade-in animation with subtle upward movement
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
    Do My Assignment Online –{" "}
    <span className="text-[#fff]">&#34;Your Academic Ally&#34;</span>
  </motion.h1>

  <motion.p
    className="text-[#f5f5f5] text-sm sm:text-sm lg:text-xl max-w-2xl mx-auto leading-normal lg:leading-relaxed sm:leading-snug"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
    Let us take the stress off your shoulders and deliver exceptional academic work tailored to your needs.
  </motion.p>

  <motion.div
    className="mt-6"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.5, duration: 1 }}
  >
    <a href="https://www.contentlywriters.com/">
      <Button className="px-6 py-3 bg-[#000000] text-white font-medium rounded-full hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-black transition duration-300">
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
            Stuck? We Can Help You &#34;Do My Assignment Online&#34; in No Time!
          </motion.h1> */}
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             It&#39;s not always easy to acknowledge that an assignment is overwhelming. Even if a few extra days might resolve the problem, time is limited, and your agenda is packed. Your classmates are preoccupied with their own assignments, and teachers can only provide brief assistance between courses. This is when you may think, &#34;I wish someone with the right expertise could do my assignment for me.&#34; When you&#39;re thinking, &#39;I need to pay someone to do my assignment online,&#39; Contently Writers is here to deliver top-quality results. Our  <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">best assignment services</a> guarantee fast, reliable, and high-quality assistance, making your academic life easier.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-6 bg-[#f5f7fa]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why We&#39;re the Best Choice When You Need Experts to Do My Assignment Online
          </motion.h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
             <strong> Your Satisfaction, Our Priority </strong> – We prioritize your academic achievement, ensuring all your expectations are met.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
            <strong>  Your Deadlines Matter</strong> – We accept any deadline because we confidently take responsibility for timely submissions.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
             <strong> 100% Authentic Work</strong> – Every order is crafted from scratch, following your requirements to produce exactly what you need.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
            <strong>  Always Evolving</strong> – Our expert writers continually update their skills to stay current in their respective fields.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
            <strong>  Ensuring a Secure Experience</strong> – Our safeguarded payment system offers multiple methods while keeping your information confidential.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
            <strong>  Fast and Reliable</strong> – We provide immediate support for all your academic needs, so you can always count on us to do your assignment online by experts.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
            <strong>  Data Security</strong> – With our secure software, all your personal information is encrypted and stored safely.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
            <strong>  Dedicated to Excellence</strong> – We carefully select our <strong>assignment helpers</strong> to ensure they deliver high-quality work.
            </motion.li>
          </ul>
        </div>
      </section>

      {/* Service Icons Section */}
      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our Service?
          </motion.h3> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
            {/* Animated Icons with Hover Effects */}
            <motion.div
              className="text-center p-6 bg-[#f9fafc] rounded-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FiCheckCircle className="text-4xl text-[#4a90e2] mb-4" />
              <h4 className="text-xl font-semibold mb-2">100% Authentic Work</h4>
              <p className="text-gray-600">All assignments are custom written following your requirements.</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#f9fafc] rounded-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FiClock className="text-4xl text-[#4a90e2] mb-4" />
              <h4 className="text-xl font-semibold mb-2">Always on Time</h4>
              <p className="text-gray-600">Deadlines are never missed with our timely delivery guarantees.</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#f9fafc] rounded-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FiShield className="text-4xl text-[#4a90e2] mb-4" />
              <h4 className="text-xl font-semibold mb-2">Safe & Secure</h4>
              <p className="text-gray-600">Your information is protected with our advanced security measures.</p>
            </motion.div>
          </div>
        </div>
      </section>

       {/* FAQ Section */}
       <section className="relative py-6 ">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-2xl  font-bold mb-6 border-b-2 border-gray-200 pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Client Queries on Affordable Assignment Help: Get the Answers Here
          </motion.h2>
          <p className="text-gray-700 mb-3">
          When deciding to pay someone to do my assignment, it’s essential to consider a few key aspects of the service you choose. Quality should always be a priority, even when you’re looking for affordable options. Our services balance cost and quality, ensuring you receive exceptional assignments without breaking the bank. With our commitment to excellence, you can confidently pay us to do your assignment and achieve the academic success you deserve. Here are some more queries from our clients.
          </p>
          <div className="space-y-6 text-left">
            <motion.h4
              className="text-lg font-semibold text-[#0e1c3d]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Can someone do my assignment for me?
            </motion.h4>
            <p className="text-gray-700">
            Yes, our experienced writers can help with nearly any subject. If you&#39;re stressed about deadlines, just let us know, and we&#39;ll <strong>do your university assignment online</strong>.
            </p>
            <motion.h4
              className="text-lg font-semibold text-[#0e1c3d]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Trustworthy Online Assignment Help for Unique Solutions
            </motion.h4>
            <p className="text-gray-700">
            Contently Writers is a reliable and budget-friendly writing service. We deliver 100% unique assignments with a <strong>SafeAssign</strong> guarantee, backed by skilled writers and a money-back policy. You can trust us to help you excel.
            </p>
            <motion.h4
              className="text-lg font-semibold text-[#0e1c3d]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Can I hire someone to do my assignment?
            </motion.h4>
            <p className="text-gray-700">
              Yes, paying someone to do your assignment is legal. Our platform allows you to hire professional writers for <strong>custom assignments</strong> that meet your academic needs.
            </p>
            <motion.h4
              className="text-lg font-semibold text-[#0e1c3d]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Which site can I use to do my assignment?
            </motion.h4>
            <p className="text-gray-700">
              <strong>Contentlywriters.com</strong> connects you with top-notch <strong>assignment writers</strong> who will create tailored assignments to help you achieve your academic goals.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl  font-bold mb-3 border-b-2 border-gray-200 pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            What Are the Advantages of Hiring an Online Assignment Service?
          </motion.h4>
          <p className="text-gray-700  mb-3">
          Hiring an online service to &#34;do my assignment online by experts&#34; offers numerous advantages. You get access to professionals specializing in various subjects, ensuring that your assignments are thoroughly researched and tailored to your professor’s guidelines.          </p>
          <p className="text-gray-700  mb-3">
          One of the main benefits is <strong>time savings</strong>. With school, work, and personal commitments, completing a challenging assignment can be stressful. By outsourcing your academic tasks to experts, you free up time for other important activities or well-deserved breaks.
          </p>
        </div>
      </section>

      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
           className="text-2xl  font-bold mb-3 border-b-2 border-gray-200 pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
           Are There Any Reliable Websites for Cheap Assignment Help?
          </motion.h4>
          <p className="text-gray-700  mb-3">
          Yes, several reliable platforms provide affordable assignment help, including <strong>Contently Writers</strong>. Our service offers high-quality, tailored assistance for students who need help but are mindful of their budgets. We guarantee you’ll receive expert help that meets your academic expectations without breaking the bank. Our <strong>best assignment services</strong> cater to students’ needs for personalized support.
</p>         
        </div>
      </section>


      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
           className="text-2xl  font-bold mb-3 border-b-2 border-gray-200 pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
           How Can I Ensure the Quality of My Assignment When Choosing a Writing Service?
          </motion.h4>
          <p className="text-gray-700  mb-3">
          Ensuring the quality of your assignment starts with researching trustworthy services like Contently Writers. Begin by reading reviews and testimonials, checking writing samples, and verifying the qualifications of the writers. Clear communication of your requirements will help ensure that the writer understands your expectations. Most reliable services, including ours, offer free revisions to guarantee satisfaction.</p>         
          <p className="text-gray-700  mb-3">
          For more complex needs, such as <a href="https://www.contentlywriters.com/service/buy-a-research-paper" className="text-[#5b6cf2]">research papers</a>,<a href="https://www.contentlywriters.com/service/coursework-writing" className="text-[#5b6cf2]" >coursework writing</a>, or <a href="https://www.contentlywriters.com/service/dissertation" className="text-[#5b6cf2]">dissertation help</a>, make sure to choose a service with proven expertise in those areas. Contently Writers not only excels in delivering high-quality assignments but also ensures that your data is secured with SafeAssign-compliant services.  </p>
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
            transition={{ duration: 0.4 }}
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
            for your assignment.
          </motion.p>
          <motion.div
            className="mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
          <a href="https://www.contentlywriters.com/">  <Button className="px-6 py-3 bg-[#210404] text-white rounded-full hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-black transition duration-300">
              Order Now <FaArrowRight className="inline-block ml-2" />
            </Button></a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DoMyAssignmentPage;
