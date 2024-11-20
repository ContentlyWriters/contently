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


const ManagementPage = () => {
  return (
    <div className=" text-[#333] font-sans">
    {/* Hero Section with Animation */}
    <div className="bg-[#e9f2f2] py-8 text-center relative overflow-hidden">
      <motion.h1
        className="text-grey sm:text-[40px] lg:text-[50px] text-[30px] pt-20 mx-auto font-semibold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Best Management Assignment Help
      </motion.h1>
      <motion.p
        className="text-[#191936] text-[25px] pt-2 mb-8 mx-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Get expert assistance in management assignments globally.
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
          {/* <motion.p
            className="text-3xl font-bold mb-6 text-[#303030]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Best Management Assignment Help
          </motion.p> */}
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
At Contently Writers, we take pride in our team of skilled writers, many of whom hold MBAs and have advanced technical expertise from IIIT. We specialize in delivering top-notch management assignments, including essays, dissertations, case studies, and reports. Whether your focus is on operations, risk management, change management, or supply chain logistics, we create unique, plagiarism-free content tailored to your requirements.
</motion.p>
        </section>

        {/* Highlight Section */}
        <section className="mb-12">
          <motion.h3
            className="text-3xl font-bold mb-6 text-[#303030]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Efficient Help for Your Academic Journey
          </motion.h3>
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
            With our best management assignment help, you&#39;ll find a reliable partner in managing your time effectively. Our dedicated support is designed to enhance your work, impress your professors, and maintain affordability, giving you the peace of mind to focus on your studies.
          </motion.p>
        </section>

         {/* Services Section */}
         <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-[#303030]">
          Achieve Academic Success with Minimal Stress
          </h3>
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
          Our dedicated writers carry out in-depth research on your topic, ensuring that every detail meets your assignment criteria. Take the pressure off yourself and concentrate on your studies while we manage the hard work. Choose Contently Writers today for high-quality, custom-written assignments that lead to exceptional results!         
          </motion.p>
          </section>



        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#303030]">
            Expert Help with Management Assignment Services
          </h2>
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
         Are you feeling overwhelmed by your management assignments? Worry no more! Our <strong>help with management assignment services</strong> is designed to relieve you of the stress associated with academic pressures. We cover a comprehensive range of subjects, including Business Management, Operations Management, and Strategic Management, ensuring you receive tailored support that enhances your understanding and boosts your academic performance.          </motion.p>
<p  className="text-lg leading-7 mb-6">
We understand that low grades can be a significant source of anxiety for students. That’s why we are dedicated to providing high-quality assignments that not only meet your requirements but also help you achieve the grades you deserve. Our team of experienced professionals is available 24/7 to address your queries and provide any assistance you need, ensuring that you’re never left in the lurch.
</p>
<p  className="text-lg leading-7 mb-6">
Moreover, we pride ourselves on delivering assignments well before your deadline, giving you ample time to review and make any necessary adjustments. With our help with management assignment services, you can focus on your studies with confidence, knowing that expert support is just a click away. Choose us today and turn your academic challenges into triumphs!
</p>
          {/* Cards Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 ">
      {["Operations Management", "Risk Management", "Change Management", "Supply Chain"].map((title, index) => (
        <motion.div
          className="text-center p-6 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          key={index}
        >
          <FaCheckCircle className="text-[#020035] text-4xl mb-4 mx-auto  transition-colors duration-200" />
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p>Expert assistance in {title.toLowerCase()} for smoother processes.</p>
        </motion.div>
      ))}
    </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#303030]">
          Comprehensive Business Management Assignment Help
          </h2>
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
Our Business Management assignment help covers a wide range of essential topics to assist students in mastering key management concepts. This includes Organizational Behavior, Risk Management, Human Resource Management, and Project Management. For specialized needs, our Operations Management assignments help focuses on areas like supply chain management and process optimization, while our Change Management assignment help guides students through leadership and transformation challenges. Additionally, our Strategic Management assignments help provides support with competitive analysis, decision-making frameworks, and real-world applications, ensuring well-researched, high-scoring solutions across all areas. If you’re looking for assistance beyond business management, be sure to check our <a href="https://www.contentlywriters.com/service/other-subjects-and-services" class="text-[#5b6cf2]">other subjects and services</a>. And if you ever find yourself overwhelmed with tasks, remember that we’re here to help—just ask us to <a href="https://www.contentlywriters.com/service/do-my-assignment" class="text-[#5b6cf2]">do my assignment!</a>!          </motion.p>
          </section>

          <section className="mb-10">
  <h3 className="text-3xl font-bold mb-6 text-[#303030]">Why Choose Our Management Assignment Help Services?</h3>
  <ol className="list-decimal list-inside text-lg leading-7 space-y-3">
    <li>
      <strong>Qualifications:</strong> Our team consists of expert writers holding PhDs and MBAs in their respective fields.
    </li>
    <li>
      <strong>Samples:</strong> Writing samples are available upon request to showcase our expertise and quality.
    </li>
    <li>
      <strong>Plagiarism-Free:</strong> We guarantee 100% original content, ensuring that every assignment is unique.
    </li>
    <li>
      <strong>Deadlines:</strong> We pride ourselves on timely delivery, even for urgent requests, so you never miss a deadline.
    </li>
    <li>
      <strong>Revisions:</strong> If you’re not satisfied with your assignment, we offer free revisions to ensure it meets your expectations.
    </li>
    <li>
      <strong>Confidentiality:</strong> We have strong privacy policies in place to protect your personal information.
    </li>
    <li>
      <strong>Specific Topics:</strong> Our assistance spans various management subjects, catering to your specific academic needs.
    </li>
    <li>
      <strong>Communication:</strong> Enjoy regular updates and responsive support throughout the assignment process.
    </li>
    <li>
      <strong>Quality Guarantees:</strong> We provide money-back guarantees and quality assurances to give you peace of mind.
    </li>
    <li>
      <strong>Affordable Prices:</strong> We provide quality services at budget-friendly rates, ensuring that you receive great value for your investment.
    </li>
    <li>
      <strong>Right Structure:</strong> All assignments follow the correct structure as per university guidelines, ensuring better grades.
    </li>
    <li>
      <strong>24/7 Support:</strong> Our team is always available to help you with any queries.
    </li>
    <li>
      <strong>Safe and Secure:</strong> We prioritize your privacy, ensure that your data remains confidential, and provide assignments that are <a href="https://www.contentlywriters.com" class="text-[#5b6cf2]">Safe Assign</a>-compliant, so students can trust our services fully.
    </li>
  </ol>
</section>

  {/* Why Choose Us Section */}
  <section className="mb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "PhD & MBA Experts",
          "Plagiarism-Free Work",
          "Timely Delivery",
          "Confidentiality",
          "Affordable Prices",
          "24/7 Support"
        ].map((item, index) => (
          <motion.div
            className="flex items-start p-6 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            key={index}
          >
            <MdAssignment className="text-4xl text-[#5b6cf2] mr-4" />
            <div>
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-gray-700">We ensure {item.toLowerCase()} in all your assignments.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

<section className="mb-10">
  <h2 className="text-3xl font-bold mb-6 text-[#303030]">Conclusion</h2>
  <p className="text-lg leading-7">
    Our best management assignment help services ensure that students receive comprehensive support across all areas of management studies. Whether you need help with Business Management, Operations Management, Change Management, or Strategic Management, we offer affordable, plagiarism-free, and custom assignments to improve your academic performance. Don&#39;t hesitate to reach out and ask for help with management assignment services or say, “Do my homework,” and we will deliver quality work that aligns with your university guidelines.
  </p>
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

export default ManagementPage;
