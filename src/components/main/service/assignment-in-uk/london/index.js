"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const LondonPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ede6e6] to-[#ebe8e8] min-h-[44vh] flex flex-col items-center justify-center text-center p-4 shadow-lg backdrop-blur-md">

  <motion.h1
    className="text-black text-4xl sm:text-5xl font-semibold leading-tight mb-4"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1 }}
  >
    Assignment Help in{" "}
    <span className="text-[#5b6cf2]">&#34;London&#34;</span>
  </motion.h1>

  <motion.p
    className="text-black text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
    Trusted Academic Support for University Students
  </motion.p>

  <motion.div
    className="mt-6"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.5, duration: 1 }}
  >
    <a href="https://www.contentlywriters.com/">
      <Button className="px-6 py-3 bg-[#210404] text-white font-medium rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">
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
         Are you struggling to meet your assignment deadlines or finding it difficult to maintain
academic excellence? Contently Writers offers premium assignment help in London, along
with the <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">Best content writing services</a>, both tailored to meet the stringent standards of
universities and colleges. With our experienced writers and dedication to quality, we ensure
every assignment and piece of content is crafted to meet your unique academic and
professional requirements.
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
      Why Choose Contently Writers for Assignment Help in London?
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
   Navigating the complexities of university assignments can be challenging, but our expertise
   makes the process seamless. Here’s why students across London trust us:
    </motion.p>
    <motion.ul
            className="list-decimal pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b>Expert Writers for Every Discipline</b><br></br>Our team comprises professional writers with expertise across a wide range of university
subjects, including management, IT, and general disciplines like history or sociology. Each
assignment is handled by a subject expert, ensuring accuracy and depth.</li>
<li><b>Plagiarism-Free Content</b><br></br> Originality is our promise. Every assignment undergoes rigorous plagiarism checks and is
crafted to be 100% unique, helping you maintain academic integrity.</li>
<li><b>Affordable Assignment Writing in London</b><br></br> We understand students&#39; financial constraints. Our pricing is transparent and affordable,
ensuring you receive premium quality without stretching your budget.</li>
<li><b>Timely Delivery</b><br></br> No matter how tight your deadline is, we guarantee on-time delivery. We work efficiently so
you have ample time to review your assignment before submission.</li>
<li><b>24/7 Support for Students</b><br></br> Got questions or need updates on your assignment? Our customer support team is available
around the clock to address your concerns.</li>
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
    Subjects We Cover in Our Assignment Writing Help
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
            className="list-disc pl-6 space-y-1 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b><a href="https://www.contentlywriters.com/subject/management" className=" text-[#5b6cf2]">Management Assignments:</a></b> Covering topics like strategic management,
            organizational behavior, and project management.</li>
<li><b> <a href="https://www.contentlywriters.com/subject/information-technology" className=" text-[#5b6cf2]">IT Assignments:</a></b>  From coding and database management to IT research projects,
we have specialists to guide you.</li>
<li><b><a href="https://www.contentlywriters.com/subject/general-subjects" className=" text-[#5b6cf2]">General Subjects:</a></b> Including history, literature, sociology, and more</li>

          </motion.ul>
          <motion.p
      className="text-gray-700 mb-2 mt-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
  Whatever the subject, we tailor each assignment to meet the specific guidelines and
  requirements of your university
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
      What Sets Contently Writers Apart?
    </motion.h3>
    <section >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-1 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Personalized Assignment Solutions
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-1 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
         At <b>Contently Writers</b>, we recognize that every student has unique needs. Our writers
carefully follow your instructions, ensuring every assignment aligns perfectly with your
professor&#39;s expectations.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-1 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Trusted by Students in London
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-1 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
         Our commitment to delivering plagiarism-free, high-quality work has earned us the trust of
thousands of university students. From one-off projects to ongoing support, we have helped
countless students achieve academic success.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-1 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Professional and Qualified Writers
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-1 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
          Our team includes experts with advanced degrees in their respective fields. They bring a
          wealth of knowledge and professionalism to every assignment.
          </motion.p>
          
        </div>
      </section>
        </div>
      </section>


      <section className="relative py-4 bg-[#f5f7fa]">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h3
      className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
    How to Order Assignment Help in London
    </motion.h3>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
  Ordering from <b>Contently Writers</b> is a simple and hassle-free process:
    </motion.p>
    <motion.ul
            className="list-disc pl-6 space-y-1 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><b>Submit Your Requirements</b> Fill out our online order form with all the necessary details, including your subject,
            topic, guidelines, and deadline.</li>
<li><b> Receive a Custom Quote</b>  Based on your requirements, we provide a no-obligation quote that’s tailored to your
needs.</li>
<li><b>Secure Payment and Delivery</b> Use our safe and reliable payment options to complete your order. Once confirmed,
our experts begin working on your assignment, ensuring timely delivery.</li>

          </motion.ul>
          <motion.p
      className="text-gray-700 mb-2 mt-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
  Whatever the subject, we tailor each assignment to meet the specific guidelines and
  requirements of your university
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
     Questions You Might Have
    </motion.h3>
    <section >
        <div className="max-w-[1280px] mx-auto px-2 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-1 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Why Should I Choose Contently Writers for Assignment Help?
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
         We combine expertise, affordability, and commitment to quality. Our focus on
         plagiarism-free, customized assignments ensures you achieve the best results.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-1 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Do You Handle Urgent Assignments?
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
         Yes, we excel at meeting tight deadlines without compromising on quality. Share your
         requirements, and we’ll deliver on time.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-1 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Are Your Services Affordable?
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-1 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
          Absolutely. Our <b>affordable assignment writing in London</b> is designed to provide
          high-quality assistance at a student-friendly price.
          </motion.p>
          
        </div>
      </section>
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
          Get Started with the Best Assignment Help in London
          </motion.h3>
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
        Don’t let academic challenges overwhelm you. With <b>Contently Writers</b>, you gain access to
the best <b>assignment writing help in London</b> backed by experienced writers, affordable
pricing, and a commitment to excellence.
          </motion.p> <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
        Ready to achieve higher grades? <a href="https://www.contentlywriters.com/contact" className="text-[#5b6cf2]">Contact us</a> today and let our experts handle your
        assignments with precision and care.
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

export default LondonPage;