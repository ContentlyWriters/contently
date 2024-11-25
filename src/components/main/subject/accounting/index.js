"use client";
import { FaCheckCircle } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { motion } from "framer-motion"; 
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
    <div className="bg-[#1F2A44] py-8 text-center relative overflow-hidden">
      <motion.h1
        className="text-white sm:text-[40px] lg:text-[50px] text-[30px] pt-20 mx-auto font-semibold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Best Accounting Assignment Help online
      </motion.h1>
      <motion.p
        className="text-[#A0A0A0] text-[25px] pt-2 mb-8 mx-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Get expert assistance in Accounting assignments globally.
      </motion.p>
      <motion.div
        className="h-[5px] w-[120px] bg-[#000] mx-auto rounded"
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
            Best Accounting Assignment Help Online
          </motion.p> */}
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
Struggling with complex accounting assignments? You’re in the right place! Accounting is a challenging subject that requires precision, analytical thinking, and a thorough understanding of various financial processes. But you don’t have to tackle it alone. Our <b>best accounting assignment help online</b> is crafted to make your academic journey smoother by providing top-quality, accurate solutions when you need them the most.</motion.p>
       
<motion.p
            className="text-lg leading-7 mb-6"
            
          >
Whether it’s deciphering financial statements, mastering management accounting techniques, or navigating advanced topics like auditing and corporate accounting, our team of <b>expert accounting assignment doers</b> is ready to assist. With years of experience and expertise in multiple branches of accounting, we provide the guidance and support you need to confidently complete your assignments and enhance your understanding of the subject.
</motion.p>
        </section>

        {/* Highlight Section */}
        <section className="mb-12">
          <motion.h2
            className="text-3xl font-bold mb-6 text-[#303030]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Why Choose Us for Accounting Assignment Help?
          </motion.h2>
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
Choosing the right service can be challenging, but here&#39;s why we&#39;re the best in the business:          </motion.p>
      
<ul className="list-disc list-inside text-lg leading-7 space-y-3">
    <li>
      <strong>Experienced Tutors:</strong> Our tutors hold advanced degrees such as PhDs, MBAs, and are graduates of prestigious institutions like IIIT. This ensures you receive top-notch guidance.
    </li>
    <li>
      <strong>Wide Range of Subjects:</strong> We cover all major areas of accounting including:
    </li>
    </ul>
    <ul className="custom-bullet-list list-inside text-lg leading-7 space-y-3 ml-2 mt-4">
    <li>
      <strong>Auditing:</strong> Auditing involves reviewing a company’s financial statements to ensure accuracy and compliance with standards. We offer expert help with both external and internal audits to guarantee reliable financial reporting.
    </li>
    <li>
      <strong>Financial Audit:</strong> A financial audit assesses whether a company’s financial statements reflect a true picture of its financial position. Our writers are experts in ensuring these reports meet all regulatory requirements.
    </li>
    <li>
      <strong>Tax Accounting:</strong> This branch focuses on calculating taxable income and minimizing liabilities. Our specialists make sure your tax-related assignments are accurate and compliant with laws.
    </li>
    <li>
      <strong>MYOB:</strong> MYOB is accounting software used to manage financial transactions and records. Our writers provide guidance on using this tool to simplify financial processes.
    </li>
    <li>
      <strong>Corporate Accounting:</strong> This involves managing a company’s internal financial transactions. We deliver expert support in creating reports that assess profitability, cash flow, and overall financial health.
    </li>
    <li>
      <strong>Management Accounting:</strong> This type of accounting helps in planning and decision-making by analyzing internal financial data. Our experts assist in crafting reports that aid strategic business decisions.
    </li>
    <li>
      <strong>Cost Accounting:</strong> Cost accounting focuses on identifying ways to minimize spending within a company. We help students master the techniques used to analyze costs effectively.
    </li>
    <li>
      <strong>Accounting Information Systems (AIS):</strong> AIS involves managing and processing a business&#39;s financial data. Our writers excel in assignments that cover the technology behind accounting processes.
    </li>
    <li>
      <strong>International Accounting:</strong> This field ensures financial reporting is consistent across different countries. Our experts explain global accounting principles and how they apply to multinational businesses.
    </li>
    <li>
      <strong>Accounting Society:</strong> This area promotes professional growth in accounting through events and networking. We guide students in understanding the broader impact of accounting in organizations and society.
    </li>
  </ul>
        </section>

         {/* Services Section */}
         <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#303030]">
          What We Offer in Accounting Assignment Help
          </h2>
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
Whether you need <b>help with financial accounting assignments</b> or are looking for <b>top managerial accounting assignment help</b>, we provide custom solutions tailored to your needs. Our team of professionals is equipped to handle assignments of any complexity, ensuring you get well-researched, error-free content.          </motion.p>
          </section>



        {/* Services Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-[#303030]">
          How Do I Choose a Reliable Accounting Assignment Help Service?
          </h3>
          <motion.p
            className="text-lg leading-7 mb-6"
            
          >
    When selecting an assignment help service, look for key factors:</motion.p>
    <ul className="list-disc list-inside text-lg leading-7 space-y-3">
    <li>
      <strong>Qualified Experts:</strong> Ensure that the service has highly experienced professionals with deep knowledge in accounting and real-world expertise. These experts are well-versed in solving complex accounting problems and delivering high-quality, accurate solutions tailored to your needs.

    </li>
    <li>
      <strong>Free Revisions:</strong>  We offer unlimited free revisions if you’re not satisfied with the outcome.

    </li>
    <li>
      <strong>Urgent Help:</strong> Yes, we also assist with urgent accounting assignments, delivering on time without compromising on quality.
    </li>
    <li>
      <strong>Confidentiality:</strong> Your data is safe with us. We follow strict confidentiality protocols to ensure your details are never disclosed.
    </li>
    </ul>

          {/* Cards Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 mt-6 ">
      {["Qualified Experts", "Free Revisions", "Urgent Help", "Confidentiality"].map((title, index) => (
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
          <h3 className="text-3xl font-bold mb-6 text-[#303030]">
          Why We Stand Out
          </h3>
    <ul className="list-disc list-inside text-lg leading-7 space-y-3">
    <li>
      <strong>Affordable Prices:</strong> Our pricing model is student-friendly while offering premium services.


    </li>
    <li>
      <strong>Expert Assistance:</strong> With our <b>expert accounting assignment doers</b>, you get insights and answers from professionals with years of experience.

    </li>
    <li>
      <strong>On-Time Delivery:</strong> We ensure that your assignments are completed within the deadline, every time.
    </li>
    <li>
      <strong>24/7 Support:</strong> Need assistance? We&#39;re here to help you around the clock with any issues or questions.
    </li>
    </ul>
    </section>
    <section className="mb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Affordable Prices",
          "Expert Assistance",
          "On-Time Delivery",
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
  <h3 className="text-3xl font-bold mb-6 text-[#303030]">Frequently Asked Questions?</h3>
  <ol className="list-decimal list-inside text-lg leading-7 space-y-3">
    <li>
      <strong>Can I get help with urgent assignments?</strong> Yes, we specialize in urgent assignment help without compromising quality.
    </li>
    <li>
      <strong>Are the services confidential and secure?</strong> Absolutely. We prioritize your privacy and ensure all transactions are safe and secure.
    </li>
    <li>
      <strong>What if I am not satisfied with the completed assignment?</strong> We offer unlimited free revisions until you are completely satisfied with the final result.
    </li>
   
  </ol>
  <p className="text-lg leading-7 mt-2">
  In addition to accounting assignment help, we provide comprehensive assistance across various subjects. You can explore our <a
href="https://www.contentlywriters.com/service/homework" className=" text-[#5b6cf2]">Homework</
a> services for additional support, or take advantage of our <a
href="https://www.contentlywriters.com/service/do-my-assignment" className=" text-[#5b6cf2]">Do my assignment</a> options for personalized solutions. Whether you&#39;re looking for <b>content writing services</b>, the <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">Best assignment services</a>, or need an experienced <b>assignment helper</b>, we are committed to ensuring you receive top-notch academic assistance tailored to your specific needs. Our dedicated team is here to help you succeed in all your academic endeavors.  </p>
</section>

 

<section className="mb-10">
  <h3 className="text-3xl font-bold mb-6 text-[#303030]">Get the Best Accounting Assignment Help Today!</h3>
  <p className="text-lg leading-7 ">
  When you choose us, you’re opting for reliability, expertise, and a commitment to academic excellence. Let us handle your accounting assignments so that you can focus on other important academic and personal pursuits. Whether you need help with <b>financial accounting</b>, <b>cost accounting</b>, or any other specialized area, we’ve got you covered. Contact us today for the <b>best accounting assignment help online!</b>  </p>
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
