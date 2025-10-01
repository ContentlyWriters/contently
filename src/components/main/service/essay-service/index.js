"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";
import { FaStar, FaArrowRight, FaBook } from "react-icons/fa";

const EssaywritingPage = () => {
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
    Your Academic Success, Our Priority{" "}
    <span className="text-[#fff]">&#34;Best Essay Writing Services Online&#34;</span>
  </motion.h1>

  <motion.p
   className="text-[#f5f5f5] text-sm sm:text-sm lg:text-xl max-w-2xl mx-auto leading-normal lg:leading-relaxed sm:leading-snug"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 1 }}
  >
    Polished, persuasive, and impactful essays tailored to perfection.
  </motion.p>

  <motion.div
    className="mt-6"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.5, duration: 1 }}
  >
    <a href="https://www.contentlywriters.com/">
      <Button className="px-6 py-3 bg-[#000] text-white font-medium rounded-full hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-black transition duration-300">
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
            className=" mb-2 leading-relaxed font-semibold"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
           &#34;Who’s the fairest essay writer of all? Contently Writers – where excellence speaks
           for itself!&#34;
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Contently Writers is more than just a boast; our reputation and a growing list of
delighted clients speak for themselves. We are committed to providing excellent
client service while preserving the highest levels of confidentiality. Hire the <b>top
essay writing service</b> available and experience unmatched quality and support.
          </motion.p>
          <motion.p
            className="text-gray-700  leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
           If you’re looking for the <b>best essay writing service</b>, Contently Writers stands ready
to deliver excellence wherever you are. With 24/7 availability, our <b>essay and
content writing services</b> are accessible worldwide, so you can rely on us to stay
ahead of the competition.
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
      Professional Essay Writer Service – Help with Essay
      Writing Online for Every Level
    </motion.h2>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
    Several years ago, we founded a network of experienced <b>essay writers</b> to assist
students across all academic levels and disciplines. Our team is well-known for its
diversity and expertise, consistently providing high-quality college and university
<b>essay writing services</b>. Contently Writers is your one-stop shop for <b>essay help</b>,
dedicated to meeting the needs of students at every level.
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      Achieving the top status in the essay writing industry takes experience, patience, and
dedication. We take pride in embodying these qualities and serving an ever-growing
number of satisfied clients. Regardless of the subject or difficulty, our goal is to make
academic success your hallmark. You can always count on us, even for the toughest
assignments. Contently Writers offers the <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">Best assignment services</a> to help you
reach your academic goals!
    </motion.p>
    <motion.p
      className="text-gray-700 mb-2 leading-relaxed"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      With every piece of content being 100% unique, our strict anti-plagiarism policies
ensure that each paper is original. Even with last-minute <b>essay</b> requests, we
guarantee that you receive authentic work tailored specifically for you. You’ll
experience a level of service that’s hard to match, with dedicated support from our
<b>assignment experts</b>.
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
            transition={{ duration: 0.4 }}
          >
          Unlock Exclusive Benefits with the Best Essay
          Writing Service for Students
          </motion.h2>
         
          <motion.ul
            className="list-disc pl-6 space-y-4 text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <li><strong>Top-Tier Writers - </strong> Every online <b>essay writer</b> at Contently Writers undergoes a
rigorous selection process. Before hiring, our team thoroughly assesses their writing
skills, research abilities, and professionalism. Only the most skilled and capable
writers are entrusted with projects.</li>
            <li><strong>Efficient and Quality-Driven Writing - </strong> We place equal emphasis on quality and
speed. Whether you need an essay written quickly or require in-depth analysis, our
expert team is ready to deliver. We offer the practical option to “write my essay,”
ensuring a smooth and efficient experience for every client.</li>
            <li><strong>Request Any Paper - </strong> No matter the assignment or subject, our specialists are
committed to delivering top-notch work with expertise in various academic fields.
With Contently Writers, you’re assured high-quality content on any topic.</li>
<li><strong>Anonymity Guaranteed - </strong> We prioritize your privacy. Our commitment to
confidentiality means that you can use our services with total peace of mind,
knowing that all personal and academic data is fully protected.</li>
<li><strong>Strict Anti-Plagiarism Policy - </strong> o maintain originality, we adhere to rigorous
anti-plagiarism standards. We use advanced detection tools and encourage clients
to request a plagiarism report for added assurance. Our writing service enables
students to achieve academic success by delivering unique, high-quality essays
every time.</li>
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
    "Top-Tier Writers",
    "Request Any Paper",
    "Strict Anti-Plagiarism Policy"
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
          <motion.h3
            className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Choosing the Best Essay Writing Service for
            Students in Oxford, London, and California
          </motion.h3>
         
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
           Selecting the right <b>essay writing service</b> requires considering the quality of writers,
the guarantees offered, and client feedback. Contently Writers has established itself
as a trusted name due to our commitment to high standards, confidentiality, and
support. Our team of expert writers understands the academic demands in <a href="https://www.contentlywriters.com/service/assignment-in-uk/oxford" className="text-[#5b6cf2]">Oxford</a>,
<a href="https://www.contentlywriters.com/service/assignment-in-uk/london" className="text-[#5b6cf2]">London </a>, and <a href="https://www.contentlywriters.com/service/assignment-in-usa/california" className="text-[#5b6cf2]">California </a>, helping students achieve their goals with ease.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-2 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
          With Contently Writers, you can safely hire professional <b>essay writers online</b>. We
guarantee complete confidentiality, secure payment options, and adherence to
originality, ensuring that you receive reliable, plagiarism-free work every time. Our
skilled writers are well-versed in academic standards, delivering carefully crafted
content tailored to individual needs.
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
            transition={{ duration: 0.4 }}
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
            transition={{ delay: 0.1, duration: 0.3 }}
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
            transition={{ duration: 0.4 }}
          >
            Ready to Craft Your Essay?
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
            for your essay.
          </motion.p>
          <motion.div
            className="mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
          <a href="/contact">   <Button className="px-6 py-3 bg-[#210404] text-white rounded-full hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-black transition duration-300">
              Start Now <FaArrowRight className="inline-block ml-2" />
            </Button> </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EssaywritingPage;