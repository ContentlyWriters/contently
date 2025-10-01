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

const StatisticsPage = () => {
 return (
     <div className=" text-[#333] font-sans">
     {/* Hero Section with Animation */}
     <div className="bg-[#020035] py-8 min-h-[64vh] text-center relative overflow-hidden">
       <motion.h1
         className="text-white sm:text-[40px] lg:text-[50px] text-[30px] pt-20 mx-auto font-semibold"
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
       >
        Statistics Assignment Help Online
       </motion.h1>
       <motion.p
         className="text-[#A0A0A0] text-[25px] pt-2 mb-8 mx-auto"
         initial={{ opacity: 0, x: -50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.5, duration: 1 }}
       >
         Professional Support for Guaranteed Success.
       </motion.p>
       <motion.div
           className="h-[5px] w-[120px] bg-[#A0A0A0] mx-auto rounded"
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ delay: 1, duration: 0.5 }}
         ></motion.div>
     </div>
     <div className="px-4 sm:px-10 lg:px-[50px]">
 <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
 
    
 
       {/* Introduction */}
       <div className="max-w-[1280px] mx-auto px-1 sm:px-2 mb-4">
       <section className="relative py-12 bg-white">
           {/* <motion.p
             className="text-3xl font-bold mb-6 text-[#303030]"
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
           >
             Best Management Assignment Help
           </motion.p> */}
           <motion.p
             className="text-lg leading-7 mb-6">
Are you struggling with overwhelming statistical data and complex calculations? Our statistics assignment help is here to provide the support you need! Our team of skilled statisticians is committed to delivering exceptional assistance for all your statistics assignments. Additionally, we offer a variety of other academic services, including <a href="https://www.contentlywriters.com/service/personal-statement" class="text-[#5b6cf2]">Personal Statement Help</a>, <a href="https://www.contentlywriters.com/service/buy-a-research-paper" class="text-[#5b6cf2]">Research Paper Assistance</a>, <a href="https://www.contentlywriters.com/service/coursework-writing" class="text-[#5b6cf2]">Coursework Writing</a>, and much more!  </motion.p>
         </section>
         

         {/* Highlight Section */}
         <section className="mb-12">
  <motion.h2
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    How Do Stats Professionals Work? Discover the Process Behind &#39;Do My Statistics Assignment&#39;
  </motion.h2>
  <motion.p
    className="text-lg leading-7 mb-6"
  >
    How to produce the ideal statistics assignment may be on your mind. The good news is that creating excellent statistics homework is not secret. Our team of expert academic writers has produced a thorough guide to assist you in completing your statistics projects with excellence and on schedule. Say <strong>&#34;pay for statistics assignment,&#34;</strong> and we&#39;ll precisely fulfill your requirements.
  </motion.p>

  <ol className="list-decimal list-inside mb-8">
    <li>
      <strong>Being aware of the requirements for the assignment:</strong> Our professionals begin by thoroughly comprehending the demands of your task. Before beginning the writing process, they make sure everything is in order by organizing the assignment after the specifics are known.
    </li>
    <li>
      <strong>Looking for Reputable Scholarly Sources:</strong> Without the right citations, an assignment is like a dish without seasoning. To ensure correct citation and in-text referencing, our statistics professionals meticulously find and gather pertinent academic references, lending your assignment academic respectability.

    </li>
    <li>
      <strong>Addressing Mathematical Issues:</strong> Our professionals handle the parts that require mathematical analysis and computations, guaranteeing that the answers satisfy the requirements of the task. Precise computations not only improve the caliber of your work but also play a major role in earning a high grade.
When you <strong>pay for statistics assignment help</strong> with us, we make sure you get a solution that impresses your professors and builds a strong academic reputation!

    </li>
  </ol>
</section>

 
          {/* Services Section */}
          <section className="mb-12">
  <motion.h2
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Stats Assignment Help: Your Path to Academic Success
  </motion.h2>
  <motion.p
    className="text-lg leading-7 mb-6"
  >
    We take great satisfaction in providing a broad selection of online statistics assignment assistance services that are meticulously tailored to your unique academic requirements. Our staff of passionate statistics tutors is committed to giving you outstanding assistance. By providing precise, perceptive answers that meet the greatest standards of quality, we hope to secure your academic achievement. We cordially encourage you to investigate our wide array of offerings and discover the profound influence of statistical superiority that our platform offers.
  </motion.p>

  <p className="text-lg ">
  We provide support for a range of statistics-related tasks, such as:

  </p>

  <ul className="list-disc list-inside mb-8">
    <li><strong>Research Papers:</strong> Our professionals can help you carry out thorough statistical analysis for your study, guaranteeing accurate and perceptive findings.</li>
    <li><strong>Case Studies:</strong> We are experts at evaluating and interpreting statistical data in case studies, assisting you in reaching significant conclusions and choosing wisely.</li>
    <li><strong>Thesis & Dissertations:</strong> We offer thorough assistance for your statistics thesis or dissertation, whether it involves data gathering, analysis, or statistical reporting.</li>
    <li><strong>Projects:</strong> Our team manages the statistical components of your projects, ensuring data is processed, analyzed, and presented effectively to achieve your objectives.</li>
    <li><strong>Tests & Quizzes:</strong> By giving practice questions and idea clarification, we help you prepare for and do well on statistics tests and quizzes.</li>
    <li><strong>Assignments and Homework:</strong> We offer solutions for assignments and homework on a range of statistical subjects, guaranteeing precision and prompt delivery.</li>
    <li><strong>Data Analysis:</strong> To help with data-driven decision-making, our professionals use statistical software to find patterns and trends in data.</li>
    <li><strong>Help with Statistical Tools:</strong> To help you complete your data analysis chores more quickly, we provide advice and support for statistical tools including R, SAS, SPSS, and Excel.</li>
    <li><strong>Statistical Reports:</strong> We help create thorough statistical reports that make sure your results are presented in an understandable and expert manner.</li>
    <li><strong>Online Courses:</strong> We help create thorough statistical reports that make sure your results are presented in an understandable and expert manner.
    Online Courses: We can help you succeed in your studies by supporting your coursework, assignments, and comprehension of the course material if you&#39;re enrolled in an online statistics course.</li>
  </ul>
</section>

<section className="mb-12">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Tests & Quizzes",
        description: "Practice questions and concept clarification."
      },
      {
        title: "Online Courses",
        description: "Support with coursework and assignments."
      },
      {
        title: "Data Analysis",
        description: "Identifying trends using statistical tools."
      },
      {
        title: "Projects",
        description: "Managing statistical analysis for projects."
      },
      {
        title: "Statistical Reports",
        description: "Creating professional and clear reports."
      },
      {
        title: "Case Studies",
        description: "Interpreting data for insightful conclusions."
      }
    ].map((item, index) => (
      <motion.div
        className="flex items-start p-6 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        whileHover={{ scale: 1.05 }}
        key={index}
      >
        <MdAssignment className="text-4xl text-[#5b6cf2] mr-4" />
        <div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>



 
 
 
         {/* Services Section */}
         <section className="mb-2">
  <motion.h3
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Answers to Your Questions
  </motion.h3>

  <motion.div className="text-lg mb-1">
    <h4 className="font-semibold mb-2">Q: Can I pay someone to help with my statistics assignment?</h4>
    <p>A: Yes, you can! Our professional team is ready to provide expert assistance to help you succeed in your statistics coursework.</p>
  </motion.div>

  <motion.div className="text-lg mb-1">
    <h4 className="font-semibold mb-2">Q: How can I receive help with my statistics assignment online?</h4>
    <p>A: Contact us with your assignment details, and our experts will promptly offer online statistics assignment help tailored to your needs.</p>
  </motion.div>

  <motion.div className="text-lg mb-1">
    <h4 className="font-semibold mb-2">Q: What types of statistics assignment help do you provide?</h4>
    <p>A: We cover a wide range of services, including:</p>
    <ul className="list-disc list-inside ml-6">
      <li>Data Analysis and Interpretation</li>
      <li>Hypothesis Testing</li>
      <li>Regression Analysis</li>
      <li>Correlation Analysis</li>
      <li>Probability and Statistics</li>
      <li>Statistical Software (SPSS, R, Python, etc.)</li>
    </ul>
  </motion.div>


           {/* Cards Section */}
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 mt-4">
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
           <h3 className="text-3xl font-bold mb-6 text-[#303030]">
           Conclusion

           </h3>
           <motion.p
             className="text-lg leading-7 mb-6"
             
           >
 Don’t let statistics overwhelm you! Let our experts provide the assistance you need to excel in your assignments. <strong>Contact Contently Writers</strong> today and experience the difference with our professional statistics assignment help. 
 
</motion.p>
           </section>
 
         {/* Call to Action */}
         <div id="faq" className="px-4 sm:!px-10 lg:!px-[50px] bg-[#000]">
         <div className="max-w-[1280px] mx-auto py-5 lg:py-24 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-4">
           <p className="text-white lg:text-3xl sm:2x1 text-center">
             Get your assignment done in just a few clicks
           </p>
 
           <Button
 
             type="button"
             className="lg:p-8 sm:p4 bg-[#5b6cf2] lg:text-xl sm:text-md hover:bg-white hover:text-black"
           >
           <a
     href="/contact"
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

export default StatisticsPage;
