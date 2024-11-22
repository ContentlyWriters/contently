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

const LawPage = () => {
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
          Statistics Assignment Help Online
        </motion.h1>
        <motion.p
          className="text-[#191936] text-[25px] pt-2 mb-8 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Professional Support for Guaranteed Success
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
              Are you struggling with overwhelming statistical data and complex calculations? Our
statistics assignment help is here to provide the support you need! Our team of skilled
statisticians is committed to delivering exceptional assistance for all your statistics
assignments. Additionally, we offer a variety of other academic services, including <a
href="https://www.contentlywriters.com/service/personal-statement" className="text-[#5b6cf2]"> Personal statement</a> Help, <a
href="https://www.contentlywriters.com/service/buy-a-research-paper" className="text-[#5b6cf2]"> Research paper</a> Assistance, <a
href="https://www.contentlywriters.com/service/coursework-writing" className="text-[#5b6cf2]"> Coursework writing</a>, and much more!            </motion.p>
            </section>
<section>
            <motion.h2
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Why Choose Our Statistics Assignment Help?
  </motion.h2>

  <motion.div
  className="mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
<motion.h4 className="text-2xl font-semibold text-[#303030]  ">
● Expert Guidance: 
  <span className="text-2xl font-normal text-[#383838] ml-4 text-lg leading-7">
  Our knowledgeable tutors have a strong grasp of statistical
concepts, offering support on everything from basic data analysis to sophisticated
modeling techniques.
  </span>
</motion.h4>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  Timely Delivery:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    We respect deadlines and guarantee that your assignments will be completed and delivered on time.
  </motion.p>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  Affordable Pricing:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    We offer competitive pricing, ensuring our services fit within your budget.
  </motion.p>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  24/7 Support:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    Our dedicated customer support team is available 24/7 to address your concerns and assist you with any questions.
  </motion.p>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  Confidentiality:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    Your personal details and assignment information are kept strictly confidential to ensure privacy.
  </motion.p>
</motion.div>

  <motion.h2
    className="text-3xl font-bold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Answers to Your Questions
  </motion.h2>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Q: Can I pay someone to help with my statistics assignment?
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    A: Yes, you can! Our professional team is ready to provide expert assistance to help you succeed in your statistics coursework.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Q: How can I receive help with my statistics assignment online?
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    A: Contact us with your assignment details, and our experts will promptly offer online statistics assignment help tailored to your needs.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Q: What types of statistics assignment help do you provide?
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    A: We cover a wide range of services, including:
    <ul className="list-disc pl-5">
      <li>Data Analysis and Interpretation</li>
      <li>Hypothesis Testing</li>
      <li>Regression Analysis</li>
      <li>Correlation Analysis</li>
      <li>Probability and Statistics</li>
      <li>Statistical Software (SPSS, R, Python, etc.)</li>
    </ul>
    <div className="grid sm:grid-cols-2 mt-6 lg:grid-cols-4 gap-8 mb-8 ">
      {["Probability and Statistics", "Regression Analysis", "Data Analysis", "Hypothesis Testing"].map((title, index) => (
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
  </motion.p>

  <motion.h3
    className="text-3xl font-semibold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    How Our Statistics Assignment Help Process Works
  </motion.h3>
  
  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Place Your Order
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    Share the assignment details, deadlines, and specific requirements.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Expert Assignment
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    We assign the most suitable expert to your task to ensure high-quality work.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  In-Depth Analysis
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    Our team will carefully analyze your assignment and highlight key focus areas.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Customized Solutions
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    We provide solutions tailored to your unique needs and requirements.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Quality Assurance
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    Every assignment is thoroughly checked for accuracy, quality, and academic standards.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
  ●  Timely Delivery
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-4">
    We ensure that your completed assignment is delivered before the deadline.
  </motion.p>

  <motion.h3
    className="text-3xl font-semibold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Why Choose Us for Your Statistics Assignment Help?
  </motion.h3>

  <motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  Experienced Tutors:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    Our team includes highly qualified statisticians with extensive expertise in the field.
  </motion.p>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  Plagiarism-Free Content:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    We guarantee 100% original and unique content.
  </motion.p>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  Affordable Rates:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    Our pricing is designed to be affordable while offering top-notch services.
  </motion.p>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  24/7 Support:
  </motion.h4>
  <motion.p className="text-lg leading-7">
    We’re here to assist you at any time.
  </motion.p>
</motion.div>

<motion.div
  className="flex items-center mb-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <motion.h4 className="text-2xl font-semibold text-[#303030] mr-4">
  ●  Confidentiality:
  </motion.h4>
  <motion.p className="text-lg leading-7">
  We prioritize the security and privacy of your personal and academic
  information.
  </motion.p>
</motion.div>

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

  <motion.p className="text-lg leading-7 mb-2">
    Don’t let statistics overwhelm you! Let our experts provide the assistance you need to excel in your assignments.
  </motion.p>
  <motion.p className="text-lg leading-7 mb-4">
  <b>Contact Contently Writers</b> today and experience the difference with our professional
  statistics assignment help.
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

export default LawPage;
