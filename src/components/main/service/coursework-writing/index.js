"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const CourseworkWritingPage = () => {
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
    Get Expert Online Coursework Writing Services{" "}
    <span className="text-[#fff]">&#34;Anytime, Anywhere&#34;</span>
  </motion.h1>

  <motion.p
    className="text-[#f5f5f5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
    Simplify your coursework with our precision-driven writing services.
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
            Get Expert Online Coursework Writing Services Anytime, Anywhere
          </motion.h1> */}
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Are you feeling overwhelmed by the assignments in your latest class? Contently Writers is
here with a solution! Our <b>online coursework writing services</b> provide exceptional
assistance to both domestic and international students, ensuring top-quality support for a
wide variety of coursework assignments. Our team of skilled writers is equipped to help you
handle your academic workload, enabling you to achieve high grades while managing your
time effectively.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            When you&#39;re asking yourself, &#34;Who can <b>do my coursework</b>?&#34;, rest assured that our expert
writers have the answers. Our comprehensive <b>coursework writing help online</b> covers a
range of subjects, including math, lab reports, case studies, and dissertations. We’re
committed to providing high-quality assignments with original research, meticulous analysis,
and thorough editing to ensure your academic success. Unlike unreliable services that may
compromise quality, we take pride in being a trusted, dependable partner for students
worldwide.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            With a solid decade of experience, we’ve supported thousands of students across the <b>UK,
USA, Canada, and Australia</b> in their academic journeys. Our focus on quality and
authenticity has made us one of the most reliable coursework writing services available.
Take the first step towards a successful academic path by partnering with our skilled
coursework writers and alleviate your study stress today!
          </motion.p>
        </div>
      </section>

      <section className="relative py-2 bg-white">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
    <motion.h2
      className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Take the Stress Out of Studies with the Best Coursework Writing Help
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      Contently Writers offers <b>coursework writing help online</b> for various types of assignments,
      ensuring that you receive targeted assistance. Each assignment is matched with a
      specialized <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">Assignment Helper</a> who has expertise in your specific subject area. Here are
      some of the key types of coursework we handle:
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
        <strong>Essays:</strong> Whether you need an <a href="https://www.contentlywriters.com/service/essay-service" className="text-[#5b6cf2]">Essay</a> for an English class or an advanced
        research essay in science, social science, or the arts, our expert writers are equipped to
        deliver. Our team comprises researchers and writers from diverse academic fields who can
        ensure that every assignment is completed with a high level of accuracy and quality.
      </li>
      <li>
        <strong>Papers:</strong> From history to biology, research papers require significant time
        and effort. Our coursework writers can manage projects of any complexity, ensuring you
        receive a well-researched, polished paper. Placing your order in advance helps you secure
        a lower rate, allowing you to enjoy high-quality work at an affordable price.
      </li>
      <li>
        <strong>Math Assignments:</strong> Math assignments can be challenging, especially for
        students with limited math backgrounds. Our online assignment helpers specialize in
        providing detailed, accurate solutions while explaining problem-solving methods. This
        approach not only gives you the answers but also enhances your understanding of key
        concepts for future assignments.
      </li>
      <li>
        <strong>Lab Reports:</strong> College-level lab reports require in-depth analysis and
        precise presentation. Our <b>assignment experts</b> in physics, chemistry, and biology work
        closely with you to produce lab reports that are well-organized, accurate, and insightful.
        They will also guide you on structuring these reports to highlight your findings effectively.
      </li>
      <li>
        <strong>Presentations:</strong> From PowerPoint slides to oral presentations, our services
        include creating compelling and organized presentations. With our help, you can confidently
        deliver content that meets the highest standards, ensuring a lasting impression on both
        professors and classmates.
      </li>
      <li>
        <strong>Abstracts:</strong> Condensing lengthy research into a concise, one-page summary
        can be challenging. Our Safeassign Helpers are skilled at creating impactful abstracts,
        distilling complex research findings into easy-to-understand summaries.
      </li>
      <li>
        <strong>Case Studies:</strong> A strong case study requires a thorough examination and
        precise writing. Our writers specialize in business and social science case studies, bringing
        years of experience and research expertise. By entrusting us with your case study, you can
        ensure it is completed accurately and professionally.
      </li>
      <li>
        <strong>Research Proposals:</strong> For those pursuing thesis or dissertation projects, a
        well-crafted research proposal is essential. Our PhD-level scholars offer guidance on
        creating persuasive proposals with clearly defined research questions, enhancing your
        chances of approval.
      </li>
      <li>
        <strong>Thesis and Dissertations:</strong> Theses and dissertations mark key academic
        milestones. These capstone projects demand extensive research, in-depth analysis, and careful
        writing. Our dedicated team of PhD researchers provides step-by-step assistance, ensuring
        you have expert guidance at every stage of these critical projects.
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
      At Contently Writers, we cover a wide range of subjects, including math, literature, science,
      business, and more. Each type of assignment is approached with the highest standards of
      academic integrity, helping you submit coursework that is accurate, insightful, and impactful.
    </motion.p>
  </div>
</section>


      {/* Types of Coursework Section */}
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
            Types of Coursework We Handle
          </motion.h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            {[
              "Essays",
              "Papers",
              "Maths",
              "Lab Reports",
              "Presentations",
              "Abstracts",
              "Case Studies",
              "Research Proposals",
              "Theses and Dissertations"
            ].map((type, index) => (
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
                <h4 className="text-xl font-semibold mb-2">{type}</h4>
                <p className="text-gray-600">Expert support for {type.toLowerCase()} assignments.</p>
              </motion.div>
            ))}
          </div>
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
            transition={{ duration: 0.4 }}
          >
            Order Your Coursework Writing Help Online in Simple Steps
          </motion.h2>
          <motion.ol
            className="list-decimal pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><strong>Fill in Your Information:</strong> Start by completing a simple form with the necessary
details such as word count, topic, subject, and deadline. Providing accurate details
helps us match you with the most suitable writer for your specific requirements.</li>
            <li><strong>Process Your Payment Securely:</strong> Complete your transaction through our secure
payment methods, including online bank transfers, debit cards, and credit cards. If
you have any questions, our support team is available to guide you through the
process and ensure a smooth experience.</li>
            <li><strong>Receive Your Completed Document:</strong> Once your coursework is ready, it will be
uploaded to your user dashboard for secure access. Each document is thoroughly
proofread to meet the highest quality standards. We guarantee timely delivery, giving
you ample time for review before submission.</li>
            <li><strong>Experience Outstanding Success:</strong> Submit your completed coursework with
confidence, knowing it has been crafted by professionals. Confidentiality is our top
priority, and we guarantee that every assignment we complete is 100% secure and
tailored to your needs.</li>
          </motion.ol>
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
            Why Choose Contently Writers for Your Coursework?
          </motion.h3>
          <motion.p
      className="text-gray-700 mb-6 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      Contently Writers stands out as a trusted provider of <b>online coursework writing services</b>.
Our commitment to excellence and our focus on student satisfaction have made us the go-to
choice for academic support worldwide. With our <b>best online coursework help</b>, students
can navigate their academic challenges with ease and achieve outstanding success.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-6 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      By offering reliable, <b>affordable coursework writing help</b>, we cater to a variety of student
needs, from routine essays and challenging math problems to complex theses and
dissertations. Our writers are available around the clock, ready to answer any questions and
provide continuous support. Contact us today and see how we can help make your
academic goals a reality!
    </motion.p>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <strong>Experienced Writers</strong> – Specialized experts to handle any coursework requirements.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <strong>Affordable Pricing</strong> – Quality assistance at prices that suit a student budget.
            </motion.li>
            <motion.li
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <strong>24/7 Support</strong> – Assistance available any time you need it.
            </motion.li>
          </ul>
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
            Ready to Craft Your Coursework Writing?
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
            for your coursework writing.
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
              Start Now <FaArrowRight className="inline-block ml-2" />
            </Button></a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CourseworkWritingPage;
