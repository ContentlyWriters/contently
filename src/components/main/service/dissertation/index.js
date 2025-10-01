"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const DissertationWritingPage = () => {
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
    Dissertation Writing Help Online{" "}
    <span className="text-[#fff]">&#34;for Exceptional Support&#34;</span>
  </motion.h1>

  <motion.p
   className="text-[#f5f5f5] text-sm sm:text-sm lg:text-xl max-w-2xl mx-auto leading-normal lg:leading-relaxed sm:leading-snug"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
    Transform your ideas into a winning dissertation with our expert guidance.
  </motion.p>

  <motion.div
    className="mt-6"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.5, duration: 1 }}
  >
    <a href="https://www.contentlywriters.com/">
      <Button className="px-6 py-3 bg-[#000] text-white rounded-full font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">
        Get Started <FaArrowRight className="inline-block ml-2" />
      </Button>
    </a>
  </motion.div>

</section>


      {/* Introduction Section */}
      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
           Completing a degree often involves a significant milestone: writing a dissertation. This demanding task requires extensive research, organization, and analytical skills. At <b>Contently Writers</b>, we understand the challenges students face and are here to provide expert <b>dissertation writing help online</b>. Our skilled writers and comprehensive support ensure you can submit a well-crafted dissertation that reflects your hard work and dedication. Here’s why students worldwide rely on us for their academic success. With our <a href="https://www.contentlywriters.com" className="text-[#5b6cf2]">content writing services</a>, we provide exceptional support that meets the highest academic standards, ensuring your dissertation stands out.

          </motion.p>
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
           Why We’re the Best Choice for Dissertation Writing Services
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Our reputation for excellence and reliability is built on a few core principles that drive everything we do. We believe that each student deserves personalized assistance, top-quality work, and confidentiality. With a focus on client satisfaction and academic integrity, our dissertation writing services are designed to support students at every stage of their journey.

          </motion.p>
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
          1. High-Quality Content Crafted by Expert Writers
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
At Contently Writers, we have assembled a team of highly qualified professionals, each with advanced degrees in their respective fields. Our writers are not only skilled in academic writing but also have extensive experience in their areas of expertise, allowing them to bring valuable insights to your dissertation. They have been carefully selected for their academic backgrounds, attention to detail, and commitment to excellence. When you choose us, you’re guaranteed to receive <b>top-quality dissertation help</b> from experts who understand the rigorous demands of academic research.

          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Our writers are dedicated to creating original, well-researched, and articulate dissertations that meet even the strictest academic requirements. We ensure every dissertation is tailored to each student&#39;s unique needs, giving you the advantage of personalized, focused assistance.
          </motion.p>
        </div>
      </section>

      <section className="relative py-2 bg-white">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h4
      className="text-2xl font-bold mb-6 pb-2"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
     2. Comprehensive Dissertation Services
    </motion.h4>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      Unlike many other services, we don’t just offer writing help. Our <b>dissertation writing
      services online</b> include a full range of support options designed to meet every need, whether
      you’re in the early stages of research or finalizing your work. Our services include:
    </motion.p>

    <motion.ul
      className="text-gray-700 mb-6 leading-relaxed list-disc pl-6"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <li>
        <strong>Topic Selection and Proposal Development:</strong> Finding the right topic is critical,
        and our experts can guide you in selecting a research question that is both manageable and
        academically valuable.
      </li>
      <li>
        <strong>Research and Data Analysis:</strong> Our team can assist in collecting and analyzing data,
        ensuring that your research is robust and aligns with your dissertation’s objectives.
      </li>
      <li>
        <strong>Writing and Structuring:</strong> Our writers are adept at organizing complex ideas into a
        coherent structure, presenting information in a logical flow that strengthens your argument.
      </li>
      <li>
        <strong>Editing and Proofreading:</strong> A well-polished dissertation is essential for academic
        success. Our meticulous editing process includes grammar, style, and format checks, ensuring that
        your work is flawless.
      </li>
    </motion.ul>

    <motion.p
      className="text-gray-700 mb-6 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      With us, you receive not just writing help but a comprehensive service that supports you from
      start to finish. We’re here to make the dissertation process less daunting and more achievable.
    </motion.p>
  </div>



      {/* Services We Offer Section */}
      
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            {[
              "Topic Selection and Proposal",
              "Research and Data Analysis",
              "Writing and Structuring"
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
                <p className="text-gray-600">Expert assistance for {service.toLowerCase()}.</p>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

        <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h4
            className="text-2xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
          3. Customized Assistance Tailored to Your Needs
          </motion.h4>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Every dissertation is unique, and so are the needs of each student. At Contently Writers, we offer <b>custom dissertation writing services online</b>, meaning we tailor our support to align with your specific requirements. Whether you need assistance with only one chapter, full dissertation writing, or even help with data analysis, we can adapt our services to fit your needs.

          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
We know that some students require more support with particular aspects, such as literature reviews or methodology sections. That’s why we make our services fully customizable, allowing you to select only the help you need without paying for services you don’t. This flexibility makes us a preferred choice for students who need tailored support.

          </motion.p>
        </div>
      </section>

       {/* Commitment to Quality Section */}
       <section className="relative py-12 bg-[#f5f7fa]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
           Our Commitment to Quality and Client Satisfaction
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
At Contently Writers, we have a single mission: to exceed our clients’ expectations. Our quality assurance process includes:
          </motion.p>
          <motion.ul
            className="list-disc pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><strong>In-Depth Research:</strong> Our writers conduct thorough research from reputable sources to provide accurate and up-to-date information.
            </li>
            <li><strong>Multiple Draft Reviews:</strong> Each draft is reviewed multiple times by our editing team to ensure it meets the highest standards.</li>
            <li><strong>Originality Checks:</strong> To uphold academic integrity, we use tools like SafeAssign to verify the originality of each paper. This prevents any risk of plagiarism and ensures that your dissertation is unique.</li>
          </motion.ul>
          <motion.p
            className="text-gray-700 mb-2 mt-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Our commitment to quality has established us as a trusted and reliable provider known for excellence.. Students who work with us can trust that their dissertations will be well-researched, well-written, and tailored to their academic level.

          </motion.p>
        </div>
      </section>

      <section className="relative py-6 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
          Confidentiality and Secure Transactions
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
We understand the importance of privacy when using dissertation writing services. Contently Writers has implemented strict policies to protect our clients’ personal and academic information. All client details and project specifics remain confidential, and our secure payment system includes options like PayPal, debit/credit cards, and Paynote, ensuring safe and reliable transactions.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Our commitment to confidentiality and security is unwavering. We value the trust our clients place in us and go to great lengths to safeguard their information. With Contently Writers, you can rest assured that your privacy is protected.

          </motion.p>
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
            transition={{ duration: 0.4 }}
          >
            The Additional Benefits of Choosing Contently Writers
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Our goal is to support students throughout their academic journey. In addition to dissertation help, we offer a range of other academic writing services, including:

          </motion.p>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <strong>Personal Statements:</strong> We help students create compelling <a href="https://www.contentlywriters.com/service/personal-statement" className="text-[#5b6cf2]"> personal statement</a> that highlight their strengths and aspirations.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <strong>Essays and Assignments:</strong> Our experts provide assistance for various assignments, ensuring high-quality content for any academic task.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <strong>Homework Help:</strong> For students needing extra support with <a href="https://www.contentlywriters.com/service/homework" className="text-[#5b6cf2]">homework</a>, our service is here to make academic life easier.

            </motion.li>
          </ul>
          <motion.p
            className="text-gray-700 mb-2 mt-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
By offering this range of services, we serve as a one-stop solution for students, providing assistance across multiple areas of their academic life.
          </motion.p>
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
        Why Choose Contently Writers for Dissertation Writing?
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Contently Writers stands out in the academic support industry because of our unwavering commitment to <b>best dissertation writing help for students</b>. We are known for our meticulous approach to every project, helping students from various academic backgrounds achieve their goals with dissertations that reflect rigorous research and critical thinking.          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Our focus on <b>client satisfaction and academic integrity</b> means that we don&#39;t just meet expectations—we strive to exceed them. Students who choose us can be confident that they&#39;ll receive a dissertation that is crafted with care, reflects their unique voice, and meets their academic institution&#39;s standards. This dedication to excellence is what makes us the best choice for dissertation support.

          </motion.p>
        </div>
      </section>

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
          How to Get Started with Contently Writers
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
If you’re ready to receive top-notch dissertation help, getting started is easy. Simply reach out to us with your requirements, and our team will promptly assist you in developing a customized plan. From there, our writers will work closely with you, ensuring that every aspect of your dissertation is handled professionally and efficiently.
</motion.p>
        
        </div>
      </section>

    

      <section className="relative py-2 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h3
            className="text-3xl font-bold mb-6 text-[#0e1c3d] border-b-2 border-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
       Final Thoughts: Choose Contently Writers for Success

          </motion.h3>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Choosing Contently Writers means choosing a team that values quality, originality, and client satisfaction. With our expert <b>dissertation writing help online</b>, you’re not only securing high-quality academic support but also investing in your academic future. Our dedication to providing the best possible service has made us a trusted partner for students worldwide.        
  </motion.p>
<motion.p
           className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
Let Contently Writers be your partner in achieving your academic goals. Our team is here to support your success, whether you need assistance with research, writing, or editing. Contact us today to experience the best in dissertation writing services and take the next step toward completing your degree with confidence.

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
            transition={{ duration: 0.4 }}
          >
            Ready to Craft Your Dissertation?
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
            for your dissertation.
          </motion.p>
          <motion.div
            className="mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
           <a href="/contact"> <Button  className="px-6 py-3 bg-[#210404] text-white rounded-full hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-black transition duration-300">
              Start Now <FaArrowRight className="inline-block ml-2" />
            </Button></a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DissertationWritingPage;
