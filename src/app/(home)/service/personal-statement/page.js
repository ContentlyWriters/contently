"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const PersonalStatementPage = () => {
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
          Need Help with Personal Statement?{" "}
          <span className="text-[#4a90e2]">Get Expert Assistance!</span>
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 1 }}
        >
          Create a powerful personal statement that makes you stand out
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
            Need Help with Personal Statement Online? Get Expert
            Assistance!
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Creating an outstanding personal statement is vital to securing a place at your dream
university. This concise document (typically 250–500 words) should highlight your
personality, experiences, and future aspirations in a way that resonates with the admissions
committee. However, many students, especially those studying abroad, often struggle to
express their true potential due to language barriers or lack of writing experience. That’s
where our Assignment Helper service comes in. With our team of highly skilled native
English writers, we offer the best personal statement writing help that captures your unique
story and meets all admission requirements.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           Our best personal statement writing service online is crafted to meet high academic
standards and pass plagiarism detection software, such as SafeAssign. Universities will gain
valuable insight into your passion and dedication to your chosen field through our expert
writing assistance.
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
            Why Choose Our Personal Statement Help?
          </motion.h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <strong>High-Quality Content</strong> – We produce personal statements that
              capture your strengths and goals to impress admissions committees.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <strong>Experienced Writers</strong> – Our team has years of experience crafting
              personal statements that highlight the best qualities of each applicant.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <strong>Secure and Confidential</strong> – Your privacy is our priority. All personal
              information is securely stored and never shared.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <strong>Affordable Pricing</strong> – Quality assistance at budget-friendly rates
              with discounts available for students.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <strong>Unlimited Revisions</strong> – We offer free revisions to ensure your
              statement meets your expectations.
            </motion.li>
          </ul>
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
            What Is Personal Statement Writing?
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
           A personal statement is a concise, yet powerful essay that gives admissions officers insight
into who you are as an applicant. It highlights your experiences, accomplishments, and
motivation to pursue a particular course or career. For students aiming to make a lasting
impression, the personal statement is a unique chance to communicate qualities that aren’t
reflected in grades or test scores.
          </motion.p>
          
        </div>
      </section>

      <section >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Do Students Seek the Best Personal Statement Writing
            Help from Us?
          </motion.h1>
          </div>
      </section>

      <section >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            High-Quality Content
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
          We take pride in producing personal statements that stand out to admissions committees.
With our experienced writers, we ensure that each statement is memorable, authentic, and
tailored to the applicant’s strengths and goals.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Expert Writers
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
         Our best personal statement writers are professionals with years of experience in personal
statement crafting. They know exactly how to bring out your strengths and present you as an
ideal candidate for your chosen program.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Around-the-clock Availability
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
          With our help with personal statement online services available 24/7, students can reach out
for assistance whenever they need it. This flexibility makes it easy for students across
different time zones to access expert support.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Protected and Secure Assistance
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
         Our best personal statement help online services respect and protect client confidentiality.
Your personal information is secure and never shared with third parties, allowing you to
focus solely on crafting an exceptional personal statement with complete peace of mind.
          </motion.p>
          
        </div>
      </section>


      <section className="relative py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Budget-Friendly Rates
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
          Our personal statement services are priced affordably, making it accessible for students from
all backgrounds. We offer excellent savings and a range of discounts to help you get
premium content without straining your budget.
          </motion.p>
          
        </div>
      </section>

      <section className="relative py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Unlimited Revisions
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
         We prioritize customer satisfaction. If you feel your statement needs any adjustments, we
offer free and unlimited revisions. Simply reach out, and we’ll ensure it meets your
expectations.
          </motion.p>
          
        </div>
      </section>

       {/* How to Get Help Section */}
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
            How Can I Get Help Writing a Personal Statement?
          </motion.h3>
          <motion.p
            className="text-gray-700 leading-relaxed mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Getting help with your personal statement is simple with Contently Writers:
          </motion.p>
          <motion.ol
            className="list-decimal pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <li><strong>Place an Order:</strong> Fill in your requirements, including your goals and background details, so our assignment experts can tailor the content to your needs.</li>
            <li><strong>Work with an Expert Writer:</strong> Our writer will craft your personal statement with attention to detail, clarity, and originality.</li>
            <li><strong>24/7 Assistance:</strong> If you need any help with the order process or want to make adjustments, our team is available around the clock.</li>
          </motion.ol>
        </div>
      </section>

      <section className="relative py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           Top-Quality Personal Statement Support for Every Subject:
          </motion.h1>
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           Experience the Best Personal Statement Writing Service Online
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
        Writing a personal statement can be daunting. It requires the perfect balance of clarity,
relevance, and brevity. Our best personal statement writing service online understands the
challenges students face, from articulating specific career goals to crafting clear, meaningful
sentences within a limited word count. Our content writing services give you access to
professional writers who ensure your statement is unique and reflects your academic
aspirations.
          </motion.p>
          
        </div>
      </section>

      {/* Courses Section */}
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
            Courses Included in Our Personal Statement Writing Service
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
       We provide personal statement assistance for a wide range of subjects, including:
          </motion.p>

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
            {["Education", "Economics", "Literature", "Computer Science", "Business Administration", "Law", "Engineering","Communication Studies", "Philosophy", "Accounting","English", "Finance","History","Marketing","MBA","Nursing","Sociology"].map(
              (course, index) => (
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
                  <h4 className="text-xl font-semibold mb-2">{course}</h4>
                </motion.div>
              )
            )}
          </div>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
       If you’re unsure how to write a personal statement for university or need help with another
assignment, such as essays, homework, or dissertations, our assignment experts are
ready to help. Let us know your needs, and we’ll manage every detail to create an impactful
statement. If you encounter any issues while placing an order, our team is available 24/7 to
assist.
          </motion.p>
        </div>
      </section>

      <section className="relative py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-3xl font-bold mb-6 text-[#0e1c3d]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           Why Choose Us for personal statement writing help?
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
         As a trusted provider of best assignment services, we are committed to delivering results
that exceed expectations. Our team of expert writers understands the nuances of personal
statements, ensuring that each document is tailored to capture the essence of the student
and the specific requirements of their desired program.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
         With our seamless ordering process, dedication to quality, and unwavering support, we’re
confident that we provide the best personal statement help online. Trust our team to make
your academic journey simpler and more successful.
          </motion.p>
          
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

export default PersonalStatementPage;
