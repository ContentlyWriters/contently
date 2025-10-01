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
      <div className="bg-[#020035] py-8 min-h-[64vh] text-center relative overflow-hidden">
        <motion.h1
          className="text-white sm:text-[40px] lg:text-[50px] text-[30px] pt-20 mx-auto font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Law Assignment Writing Services for Top Grades
        </motion.h1>
        <motion.p
          className="text-[#A0A0A0] text-[25px] pt-2 mb-8 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Achieve Excellence with Our Law Assignment Assistance!
        </motion.p>
        <motion.div
          className="h-[5px] w-[120px] bg-[#A0A0A0] mx-auto rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        ></motion.div>
      </div>

      <div className="px-4 sm:px-10 lg:px-[50px]">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Introduction */}
          <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mb-4">
      <section className="relative py-12 bg-white">
              {/* <motion.h1
                className="text-3xl font-bold mb-6 text-[#303030]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Information Technology Assignment Help to Boost Your Grades Effortlessly
              </motion.h1> */}
              <motion.p className="text-lg leading-7 mb-6">
              Since law is an interesting field with the potential for a rewarding career, many students
decide to specialize in it. A legal career gives people the skills they need to defend their
rights, deal with obstacles skillfully, and make wise choices. However, obtaining a law
degree can be a challenging process, even if legal employment is frequently fulfilling. For
this reason, a lot of students seek expert assistance when writing their law essays.             </motion.p>
              <motion.p className="text-lg leading-7 mb-6">
              Being a top supplier of law assignment writing services is something we at Contently Writers
take great pride in. We understand that even the most committed students struggle to
consistently perform at their best on all assignments. Our knowledgeable staff is available to
help you achieve, regardless of the reason—time restraints or other challenges          </motion.p>
            </section>

            <section className="mb-12">
  <motion.h2
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    All-Encompassing Law Assignment Help for Every Area of Law
  </motion.h2>
  <motion.p className="text-lg leading-7 mb-6">
  Every piece of work we produce is composed of original articles authored by experts in
particular legal disciplines. Our services include customized legal essays and assignments
that cover a variety of topics, such as business law, which thoroughly examines business
transactions and associated procedures. Additionally, we provide Civil Rights law
assignment assistance, in which our professionals examine the legal complexities and
potential conflicts between people and government authorities.
  </motion.p>
  <motion.p className="text-lg leading-7 mb-6">
  Criminal law experts, who concentrate on the complexities of illegal activity and legal
infractions, are part of our team. Our writers proficiently describe the rights and
responsibilities of employers and employees in labor law assignments. Experts in family law
offer their perspectives on case studies concerning family conflicts.
  </motion.p>
  <motion.p className="text-lg leading-7 mb-6">
  We also provide thorough support in a variety of areas, including intellectual property law,
corporate law, international law, and environmental law. Our <a href="https://www.contentlywriters.com/" className="text-[#5b6cf2]">
Assignment helper</a> will match
you with a professional who possesses the exact talents to suit your requirements if you
share the specifications of your task.
  </motion.p>
</section>

<section className="mb-12">
  <motion.h3
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Simplified Ordering Process: 5 Steps with Contently Writers
  </motion.h3>
  <motion.ul className="list-disc pl-6 text-lg leading-7 mb-6">
    <li>To keep track of your order and get all the critical notifications, log in to your current account or establish a new one.</li>
    <li>Start by completing the form found on the Contently Writers homepage in the upper-right corner.</li>
    <li>After that, fill out the order form with all the pertinent information on your task. Giving precise and unambiguous instructions can help guarantee that your assignment is completed flawlessly.</li>
    <li>To finish the payment procedure securely and effectively, you will be taken to our secure payment channel.</li>
    <li>That&#39;s it! Your order will show up on your dashboard as soon as your payment has been approved. You can download the file straight from the location once your task is finished. The method is easy and convenient!</li>
  </motion.ul>
</section>


<section className="mb-12">
  <motion.h2
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    The Advantages of Using Law Assignment Help for Students
  </motion.h2>
  <motion.p className="text-lg leading-7 mb-6">
    Law students are aware that writing assignments is one of the most difficult things they will encounter during their academic career. Many students use online resources like <b>Commercial Law Assignment Help, Criminal Law Assignment Help, and Best Constitutional Law Assignment Help</b> to lessen this strain because they provide some important advantages. The following are some benefits that students experience when they use expert assignment assistance services:
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    High-quality Work
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-6">
    One of the main advantages of these services is that assignments are composed by professionals with the skills needed to produce believable, thoroughly researched projects. These specialists, who have years of experience in their disciplines, provide exceptional work that guarantees pupils obtain top grades.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Excellent Grades
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-6">
    Skilled writers ensure that there is no opportunity for error and produce legal assignments that precisely match examiner specifications. It is easier for students to receive A grades because the work generated is of the best caliber, regardless of whether it is Commercial Law Assignment Help, Criminal Law Assignment Help, or Best Constitutional Law Assignment Help.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Timely Service
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-6">
    On-time delivery is a top priority for the top assignment writing services. Even with tight constraints, students rely on these services since they know they will always receive high-quality work on time.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Work Management
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-6">
    Law students have a busy schedule that includes attending lectures, court proceedings, reading law texts, and completing homework. By getting professional legal assignment help, students may maintain their academic schedules and get well-written papers without any worry.
  </motion.p>

  <motion.h4
    className="text-2xl font-semibold mb-4 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    No Time Consumption
  </motion.h4>
  <motion.p className="text-lg leading-7 mb-6">
    By relieving students of the pressure of tasks, online legal assignment services enable them to manage their time better. With these services, students don&#39;t have to worry about deadlines or spend hours looking through textbooks because everything is done for them.
  </motion.p>

  <motion.h3
    className="text-3xl font-bold mb-6 text-[#303030]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Choose Contently Writers for the Best Law Assignment Writing Services
  </motion.h3>
  <motion.p className="text-lg leading-7 mb-6">
    At Contently Writers, we strive to make your academic journey smoother by providing exceptional <b>law assignment help</b> tailored to meet your unique needs. Whether it’s <b>Commercial Law Assignment Help, Criminal Law Assignment Help</b>, or the <b>best Constitutional Law Assignment Help</b>, our goal is to ensure you achieve outstanding results with high-quality, on-time submissions.
  </motion.p>
  <motion.p className="text-lg leading-7 mb-6">
    In addition to our renowned <b>law assignment writing services</b>, we also extend our expertise to other fields such as <a
href="https://www.contentlywriters.com/subject/management" className="text-[#5b6cf2]"> Management Assignment </a>, <a
href="https://www.contentlywriters.com/subject/accounting" className="text-[#5b6cf2]"> Accounting Assignment</a>, and more. No matter the subject or complexity, our team is here to assist you every step of the way.
  </motion.p>
  <motion.p className="text-lg leading-7 mb-6">
    With Contently Writers, you&#39;re not just purchasing a service; you&#39;re investing in academic excellence and peace of mind. Let us help you succeed in law and beyond!
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

export default LawPage;
