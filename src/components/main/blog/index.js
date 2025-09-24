"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import img1 from "@/assets/image/blogImg1.jpg";
import img2 from "@/assets/image/blogImg2.jpg";
import img5 from "@/assets/image/blogImg5.jpg";
import img6 from "@/assets/image/blogImg6.jpg";
import img7 from "@/assets/image/blogImg7.jpg";
import img8 from "@/assets/image/blogImg8.jpg";
import img9 from "@/assets/image/blogImg9.jpg";
import img10 from "@/assets/image/blogImg10.jpg";
import img11 from "@/assets/image/blogImg11.jpg";
import img12 from "@/assets/image/blogImg12.jpg";
import img13 from "@/assets/image/blogImg13.jpg";
import img14 from "@/assets/image/blogimg14.jpg";
import img15 from "@/assets/image/blogImg15.jpg";
import img16 from "@/assets/image/blogImg16.jpg";
import img17 from "@/assets/image/blogImg17.jpg";
import img18 from "@/assets/image/blogImg18.png";
import img19 from "@/assets/image/blogImg19.jpg";
import img20 from "@/assets/image/blogImg20.jpg";
import img21 from "@/assets/image/blogImg21.jpg";
import img22 from "@/assets/image/blogImg22.jpg";
import img23 from "@/assets/image/blogImg23.jpg";
import img24 from "@/assets/image/blogImg24.jpg";
import img25 from "@/assets/image/blogImg25.jpg";
import img26 from "@/assets/image/blogImg26.jpg";
import img27 from "@/assets/image/blogImg27.jpg";
import img28 from "@/assets/image/blogImg28.jpg";
import img29 from "@/assets/image/blogImg29.jpg";
import img30 from "@/assets/image/blogImg30.jpg";
import img31 from "@/assets/image/blogImg31.jpg";
import img32 from "@/assets/image/blogImg32.jpg";
import img33 from "@/assets/image/blogImg33.jpg";
import img34 from "@/assets/image/blogImg34.jpg";
import img35 from "@/assets/image/blogImg35.jpg";
import img36 from "@/assets/image/blogImg36.jpg";
import img37 from "@/assets/image/blogImg37.jpg";
import img38 from "@/assets/image/blogImg38.jpg";
import img39 from "@/assets/image/blogImg39.jpg";
import img40 from "@/assets/image/blogImg40.jpg";
import img41 from "@/assets/image/blogImg41.jpg";
import img42 from "@/assets/image/blogImg42.jpg";
import img43 from "@/assets/image/blogImg43.jpg";
import img44 from "@/assets/image/blogImg44.jpg";
import img45 from "@/assets/image/blogImg45.jpg";
import img46 from "@/assets/image/blogImg46.jpg";
import img47 from "@/assets/image/blogImg47.jpg";
import img48 from "@/assets/image/blogImg48.jpg";
import img49 from "@/assets/image/blogImg49.jpg";
import img50 from "@/assets/image/blogImg50.jpg";
import img51 from "@/assets/image/blogImg51.jpg";
import img52 from "@/assets/image/blogImg52.jpg";
import img53 from "@/assets/image/blogImg53.jpg";
import img54 from "@/assets/image/blogImg54.jpg";
import img55 from "@/assets/image/blogImg55.jpg";
import img56 from "@/assets/image/blogImg56.jpg";
import img57 from "@/assets/image/blogImg57.jpg";
import img58 from "@/assets/image/blogImg58.jpg";
import img59 from "@/assets/image/blogImg59.jpg";
import img60 from "@/assets/image/blogImg60.jpg";
import img61 from "@/assets/image/blogImg61.jpg";


const blogData = [

  
  {
    tag: "blog-59",
    slug: "triple-threat-of-web-2025",
    heading: "Triple Threat of Web 2025: Sustainability, Security & Accessibility",
    date: "September 02, 2025",
    image: img61,
    about:"In 2025, a site will require more than just appealing images and fast loading speeds to be noticed. The three foundations of sustainability, security, and accessibility are what I refer to as the 'Triple Threat.' They are gaining increasing significance. In this blog entry, we will discuss why this group holds greater importance now than before, how they collaborate, and some actions you can take to ensure your online presence is prepared for the future.",
  },

  {
    tag: "blog-58",
    slug: "top-5-academic-writing-trends",
    heading: "Top 5 Academic Writing Trends 2025: AI, Integrity & More",
    date: "August 27, 2025",
    image: img60,
    about:"In 2025, academic writing isn't just a task; it’s evolving into something more dynamic, tech-savvy, and student-centered. Here are the five biggest trends shaping how students, researchers, and writers communicate scholarly ideas today.",
  },


  {
    tag: "blog-57",
    slug: "are-degree-losing-value",
    heading: "Are Degrees Losing Value? Alternative Career Paths in the AI Era",
    date: "August 20, 2025",
    image: img59,
    about:"For decades, a college degree was the golden ticket. You studied, graduated, and stepped into a career path that promised stability. But in 2025, the ground under that promise is shifting. Between rapid AI adoption, employers focusing more on skills than credentials, and the rise of micro-learning, the “degree first” rulebook is being rewritten.",
  },
 
  {
    tag: "blog-56",
    slug: "seo-checklist-for-small-business",
    heading: "SEO Checklist for Small Businesses in the USA",
    date: "July 15, 2025",
    image: img58,
    about:"SEO is one of those things that small business owners hear about all the time but rarely have the time to figure out. I’ve seen it happen over and over again. You’re trying to keep things moving, making sure customers are happy, dealing with day-to-day stuff… and someone says, “Hey, have you tried SEO?”",
  },
 
  {
    tag: "blog-55",
    slug: "how-much-tech-has-taken-over-our-daily-life",
    heading: "Have You Noticed How Much Tech Has Taken Over Our Daily Life?",
    date: "July 08, 2025",
    image: img57,
    about:"Have you ever stopped and realized how much tech we use without even thinking about it? It’s kind of wild. One minute you’re unlocking your phone with your face, the next you’re ordering dinner, checking in on work emails, and tracking your steps, all without even leaving the couch. It’s not just about convenience anymore. Over time, technology has quietly made itself a part of almost everything we do. It’s not screaming for our attention, it just blends into the background, making life feel easier, faster, and more connected.",
  },


  {
    tag: "blog-54",
    slug: "how-ai-is-transforming-content-in-american-ecommerce",
    heading: "How AI Is Transforming Content in American eCommerce",
    date: "June 26, 2025",
    image: img56,
    about:"Something big is happening in American eCommerce, and most people don’t even realize it. AI is changing the game. It’s not just about faster tools or automated systems anymore. From how product descriptions are written to the way those “you might also like” suggestions appear in your cart, AI is quietly transforming how online stores communicate with their customers. But this shift isn’t just technical, it’s personal. It’s about creating content that connects with people. So, let’s take a closer look at how AI is shaping the way brands tell their stories online.",
  },
  
  
  {
    tag: "blog-53",
    slug: "top-10-seo-mistake-startups-must-avoid",
    heading: "Top 10 SEO Mistakes Startups Must Avoid for Growth",
    date: "June 17, 2025",
    image: img55,
    about:"SEO is one of the most powerful tools for growing your business online. Yet, many US startups overlook or mishandle critical SEO practices, unintentionally sabotaging their growth potential. Your website is fine, but you could be missing out on valuable traffic and opportunities without the right SEO strategies.",
  },
  
  
  {
    tag: "blog-52",
    slug: "geo-vs-seo",
    heading: "GEO vs SEO: How AI Is Changing Search in 2025",
    date: "June 13, 2025",
    image: img54,
    about:"SEO just doesn’t work the way it used to. If your SEO strategy still revolves around keywords and backlinks, you might’ve felt it’s not getting you as far as it once did. Search isn’t about finding words anymore; it’s about understanding context and intent. AI has completely changed how content is read, understood, and shown to people, and here’s the thing: being at the top of Google doesn’t always mean what it used to. More and more, people are getting their answers straight from AI, before they even click on anything. So if your content isn’t built in a way that makes sense to those systems, it might not appear.",
  },
  
  {
    tag: "blog-51",
    slug: "ai-literacy-prompt-engineering",
    heading: "AI Literacy & Prompt Engineering: Must-Have Skill for 2025",
    date: "June 09, 2025",
    image: img53,
    about:"If you’ve ever asked ChatGPT to “write my assignment” or “summarise this article,” you’ve already had a small taste of what AI-assisted learning is. But here’s the truth: most studnts don’t realise you’re only scratching the surface..",
  },
 
  {
    tag: "blog-50",
    slug: "what-assignments-do-law-student-struggle",
    heading: "What Assignments Do Law Students Struggle With the Most?",
    date: "June 06, 2025",
    image: img52,
    about:"Being a student is never easy. We all want to do everything at this age.. We want to focus on our dream job, have fun with friends, family, hobbies, and a lot more. But for law students, the pressure is on another level — law school isn’t just about knowing the law — it’s about learning how to think critically, argue clearly, and write persuasively. That’s why many students turn to law assignment help when the workload piles up and clarity is missing.",
  },
  
  {
    tag: "blog-49",
    slug: "seo-writing-vs-content-writing",
    heading: "SEO Writing vs Content Writing: Which Truly Drives Results",
    date: "June 03, 2025",
    image: img51,
    about:"Is your well-written content going unnoticed by your target audience? Or perhaps your articles rank well on Google but fail to retain visitors? This is the classic conundrum between SEO writing and content writing. Understanding and balancing both is the key to creating content that not only ranks but also resonates.",
  },
  
  {
    tag: "blog-48",
    slug: "harvard-application-essay-tips",
    heading: "Harvard Application Essay Tips: What They Want to See",
    date: "May 30, 2025",
    image: img50,
    about:"If you aim for a seat at Harvard, it's a worldwide dream of thousands of students. While grades and test scores play a role, one of the most powerful components of your application is the personal essay. It's your chance to speak directly to the admissions team and show them who you are beyond numbers and transcripts.",
  },
 
  {
    tag: "blog-47",
    slug: "google-ai-overview-are-changing",
    heading: "Google AI Overviews Are Changing SEO – How to Remain at the Top",
    date: "May 26, 2025",
    image: img49,
    about:"Understand SGE, Its Impact, and How to Optimize for AI-Generated Search Results - Google started revolutionizing the search experience in 2024 and 2025 with a feature dubbed SGE (Search Generative Experience), which is today known as AI Overviews. It's no longer merely a test; it's being implemented all around the world and is already changing the way consumers engage with online material.",
  },
 
  {
    tag: "blog-46",
    slug: "2025-stident-financial-aid",
    heading: "2025 Student Financial Aid Guide for US College Students",
    date: "May 23, 2025",
    image: img48,
    about:"Starting college is an exciting new chapter, but money worries can quickly take over. With updates to student financial aid coming in 2025, knowing the latest changes and how to handle your budget is more important than ever.",
  },
 
  {
    tag: "blog-45",
    slug: "google-seo-2025-update",
    heading: "Google’s 2025 SEO Update Cracked: What’s Changing and Why It Matters",
    date: "May 15, 2025",
    image: img47,
    about:"If you’ve been keeping up with Google’s updates like I have, you might’ve felt that this latest SEO update of 2025 is a bit different. It’s not just the usual shuffle of rankings or keyword tweaks. It feels like Google is trying to send us a message, a pretty clear one about what it truly wants from the web these days. Gone are the days when you could just play the system or stuff your pages with keywords. Now, it’s all about creating content that genuinely helps real people. No more tricks, no shortcuts, just useful, meaningful stuff that makes a difference. So, let’s get into what’s changed, why it matters, and how you can keep your SEO strong without feeling overwhelmed or stressed out.",
  },
  
  {
    tag: "blog-44",
    slug: "mastering-assignment-writing",
    heading: "Mastering Assignment Writing: Tips for International Students with Language Barriers",
    date: "May 12, 2025",
    image: img46,
    about:"Studying abroad is one of those things you’ve probably imagined for years: new adventures, a different culture, meeting people from all over. But then, Reality hits the moment your professor hands you that first assignment. You look at the paper, and suddenly, it feels like the dream is harder to reach than you thought. You glance at the brief, and it feels like it was written in academic English from another century. Suddenly, all that excitement about being in a new place starts to fade, and you’re left thinking, “Okay, now I’m in trouble!”",
  },

  {
    tag: "blog-43",
    slug: "topical-authority",
    heading: "Topical Authority: Build a Winning Content Hub in 2025",
    date: "May 05, 2025",
    image: img45,
    about:"StudyiIf you’ve been creating content and wondering why it’s not showing up in Google searches, here's the truth: ticking off keywords isn’t enough anymore.",
  },
  
  {
    tag: "blog-42",
    slug: "study-in-usa-vs-uk",
    heading: "Study in the US vs UK: Pros, Cons & Academic Support Tips",
    date: "April 21, 2025",
    image: img44,
    about:"Studying abroad is one of the most exciting decisions a student can make, but it also comes with a fair share of confusion. Two of the most popular destinations, the United States and the United Kingdom, offer world-class education, but in very different ways.",
  },
  
  {
    tag: "blog-41",
    slug: "why-we-procrastinate",
    heading: "Why We Procrastinate and How to Overcome It: Psychology Explained",
    date: "April 14, 2025",
    image: img43,
    about:"Procrastination is something we're accidentally experts at, even though it's something that tends to hurt us academically. You sit down, all ready to tackle that one assignment, and somehow you end up deep-cleaning your room, checking the weather in three different cities, or doom-scrolling TikTok for “just five minutes.” Next thing you know? It’s midnight, the deadline’s creeping up, and the panic kicks in hard.",
  },
  
  {
    tag: "blog-40",
    slug: "free-tools-to-make-study-easy",
    heading: "Top 10 Free Tools to Make Studying Easier for Students in 2025",
    date: "April 10, 2025",
    image: img42,
    about:"Let’s be honest: student life can feel like a juggling act most days. It's a lot to do time management between classes, assignments, part-time jobs, and trying to keep some form of social life. Sometimes it feels like you’re running a marathon with your shoelaces tied together.",
  },
  
  {
    tag: "blog-39",
    slug: "how-to-use-google-scholar",
    heading: "How to Use Google Scholar: A Student’s Research Guide",
    date: "April 04, 2025",
    image: img41,
    about:"Let’s be honest—doing research for assignments can feel like a wild goose chase. You Google something, only to sift through random blogs, outdated articles, or—worst of all—paywalled journals. It’s frustrating! But don’t worry, because Google Scholar is here to save the day. Think of it as your academic search engine, helping you find credible, peer-reviewed research without the headache.",
  },
  
  {
    tag: "blog-38",
    slug: "time-management-tips",
    heading: "Time Management Tips for Students: Balance Studies & Writing",
    date: "April 01, 2025",
    image: img40,
    about:"Time management is crucial for students who need to juggle their coursework, assignments, and exams. With multiple deadlines to meet, many students struggle to allocate their time effectively, leading to stress and decreased productivity. A well-structured schedule and efficient time management strategies can help students stay on top of their workload while maintaining academic excellence.",
  },
  
  {
    tag: "blog-37",
    slug: "right-dissertation-topic",
    heading: "Tips to Choose the Right Dissertation Topic Easily",
    date: "March 25, 2025",
    image: img39,
    about:"Choosing the right dissertation topic is a crucial decision that affects your Academic and professional journey. A dissertation is a long-term project requiring in-depth research, Critical thinking, and strong commitment. Therefore, selecting a topic that aligns with your interests, scholarly qualities, and career yearnings is basic. In this guide, we will explore the key components to consider when choosing a dissertation subject and how best dissertation services can Support students in this challenging process.",
  },
  
  {
    tag: "blog-36",
    slug: "time-management-tips-for-thesis",
    heading: "Time Management Tips for Thesis Writing – Stay Organized",
    date: "March 21, 2025",
    image: img38,
    about:"Writing a thesis is a challenging task. It’s a long and detailed process that requires careful planning, strong investigation, and much persistence. If you’re juggling coursework, part-time work, or individual commitments, It’s easy to feel overwhelmed.",
  },
  
  {
    tag: "blog-35",
    slug: "benefit-drawback-assignments-help",
    heading: "Benefits & Drawbacks of Using Online Assignment Help",
    date: "March 17, 2025",
    image: img37,
    about:"Finding the best assignment help service can make a significant difference in managing workloads effectively. Between juggling deadlines, assignments, part-time jobs, and personal commitments, it’s no shock that numerous undergraduates feel overpowered. Hiring an online assignment helper can seem like a lifesaver when due dates heap up and stress levels rise. But is it truly the best solution? Like most things in life, there are both advantages and drawbacks to consider. Let’s break it down.",
  },
  
  {
    tag: "blog-34",
    slug: "cost-accounting-assignments-help",
    heading: "Cost Accounting Assignments Got You Stressed? Get Help Now",
    date: "March 07, 2025",
    image: img36,
    about:"Let’s be honest—cost accounting assignment help isn’t exactly a walk in the park. If you've ever found yourself staring at a problem for hours, wondering where you went wrong, you're not alone. There are ways to make sense of this subject and even get a little expert help along the way.",
  },
  
  {
    tag: "blog-33",
    slug: "financial-accounting-assignments-help",
    heading: "Financial Accounting Assignment Help: Your Ultimate Guide",
    date: "March 03, 2025",
    image: img35,
    about:"Financial accounting is a crucial aspect of business education, helping students develop the skills required to analyze financial statements and make informed economic decisions. However, financial accounting assignments can often be challenging, requiring a deep understanding of concepts, formulas, and real-world applications. Many students struggle with these tasks due to time constraints, lack of understanding, or complex problems. This is where professional financial accounting assignment help comes in handy, providing the necessary support to excel academically.",
  },
  {
    tag: "blog-32",
    slug: "aerospace-engineering-assignments-help",
    heading: "Need Aerospace Engineering Assignment Help? Ultimate Guide",
    date: "February 28, 2025",
    image: img34,
    about:"Aerospace engineering is one of the most challenging fields of study. It modulates elements of mechanical, electrical, and computer engineering to design, build, and preserve aircraft and spacecraft. Students often struggle with assignments that require advanced knowledge, precise calculations, and critical thinking because of the complexity of the subject. This is where expert Aerospace Engineering Assignment Help steps in, offering students expert help to achieve success.",
  },
  {
    tag: "blog-31",
    slug: "biomedical-engineering-assignments-help",
    heading: "How to Ace Your Biomedical Engineering Assignments",
    date: "February 17, 2025",
    image: img33,
    about:"Biomedical engineering is a dynamic field combining engineering principles with medical and biological sciences to develop healthcare solutions. As a biomedical engineering student, you will often encounter help with biomedical engineering assignments that require technical knowledge, problem-solving skills, and creativity. These assignments help bridge the gap between theoretical concepts and real-world applications, making them essential for academic and professional growth.",
  },
  {
    tag: "blog-30",
    slug: "electrical-engineering-assignments-help",
    heading: "Electrical Engineering Assignment Help: Experts Help & Guide",
    date: "February 13, 2025",
    image: img32,
    about:"Electrical engineering is a vast and complex field that covers circuits, power systems, electromagnetism, and digital electronics. Many students find it challenging to understand intricate theories, apply formulas correctly, and complete assignments on time. If you're facing difficulties, don’t worry, you’re not alone. There are engineering assignment help experts who are willing to take your stress away. Reach out to the assignment experts to get your assignment done",
  },
  {
    tag: "blog-29",
    slug: "guide-to-civil-engineering-assignments-help",
    heading: "Guide to Civil Engineering Assignment Help & Success",
    date: "February 10, 2025",
    image: img31,
    about:"Are you struggling with your civil engineering coursework? Civil engineering is a complex field that requires a deep understanding of mathematical concepts, physics, and design principles. Whether dealing with structural analysis, transportation engineering, or geotechnical studies, getting professional guidance can make a difference.",
  },
  {
    tag: "blog-28",
    slug: "software-engineering-assignments-help",
    heading: "Software Engineering Assignment Help – Expert Assistance",
    date: "February 7, 2025",
    image: img30,
    about:"Software engineering is an essential discipline in today’s tech landscape. From designing robust systems to developing complex applications, software engineers are at the heart of technological advancements. However, due to its complexity and diverse range of topics, many students often find themselves struggling with software engineering assignments. Whether it’s understanding intricate algorithms or solving programming challenges, seeking professional help can make a significant difference. This blog post will explore how getting software engineering assignment help can enhance your learning experience and contribute to your academic success.",
  },
  {
    tag: "blog-27",
    slug: "javascript-assignments-help",
    heading: "JavaScript Assignment Help – Fast & Reliable Coding Aid",
    date: "February 3, 2025",
    image: img29,
    about:"JavaScript is one of the most powerful and widely used programming languages in the world. JavaScript plays a crucial role in modern web development, from creating dynamic web pages to building full-fledged web applications. However, learning JavaScript can be challenging, especially for students juggling multiple assignments, exams, and coursework. If you find yourself struggling with JavaScript assignments, seeking professional JavaScript assignment help can be a game-changing decision. Whether you need help with a JavaScript assignment online or guidance with JavaScript project help for students, expert assistance can save time and improve your understanding.",
  },
  {
    tag: "blog-26",
    slug: "c-programming-assignments-help",
    heading: "C Programming Assignment Help: Expert Solutions for You",
    date: "January 30, 2025",
    image: img28,
    about:"C programming is one of the most essential and widely used languages in the field of computer science. Whether you’re a beginner stepping into coding or an experienced programmer aiming to refine your skills, mastering C is crucial. However, many students struggle with C programming assignments due to their complex syntax, memory management, and logical problem-solving demands. That’s where C programming assignment helps services prove valuable, offering expert guidance to simplify learning.",
  },
  {
    tag: "blog-25",
    slug: "it-security-assignments-help",
    heading: "IT Security Assignments Help: Challenges & Best Practices",
    date: "January 27, 2025",
    image: img27,
    about:"In today’s digital era, IT security is critical, playing a pivotal role in safeguarding sensitive information from threats like hacking, phishing, and malware. For students pursuing degrees in information technology, tackling IT security assignments is both necessary and challenging. These assignments not only test their theoretical understanding but also their practical skills in real-world problem-solving.",
  },
  {
    tag: "blog-24",
    slug: "expert-python-programming-assignment-help",
    heading: "Expert Python Programming Assignment Help for Students",
    date: "January 23, 2025",
    image: img26,
    about:"In the rapidly advancing world of technology, Python programming has become a cornerstone skill for developers, data scientists, and software engineers. Renowned for its simplicity and versatility, Python is a reliable language for everything from web development to artificial intelligence. However, excelling in Python requires effort, and tackling intricate assignments can often feel overwhelming. That’s where professional Python programming experts can become a game-changer.",
  },
  {
    tag: "blog-23",
    slug: "master-business-management-assignments",
    heading: "Master Business Management Assignments with Ease",
    date: "January 20, 2025",
    image: img25,
    about:"Business management assignments are common among students seeking degrees in business or similar professions. These critical assignments assess your ability to analyze business situations, make educated judgments, and provide realistic solutions. Excelling in these assignments not only improves your academic achievement but also prepares you for real-world issues. This blog delves into tips, techniques, and insights to help you ace your business management tasks with expert business management assignment help.",
  },
  {
    tag: "blog-22",
    slug: "constitutional-law-assignment-help-expert-legal-guidance",
    heading: "Constitutional Law Assignment Help | Expert Legal Guidance",
    date: "January 17, 2025",
    image: img24,
    about:"Constitutional law is a crucial branch of law. Its main purpose is to focus on the foundational principles that govern a country’s legal framework. This area of law addresses the allocation of powers between various branches of government, ensuring the protection of individual freedoms and rights. Students often seek constitutional law assignment help to understand complex legal principles, as constitutional law forms the backbone of the legal system.",
  },
  {
    tag: "blog-21",
    slug: "commercial-law-assignment-help",
    heading: "Commercial Law Assignment Help: Simplify Your Legal Studies",
    date: "January 15, 2025",
    image: img23,
    about:"Commercial law, often called business law, governs the conduct, rights, and relations ofbusinesses and individuals engaged in trade, sales, and commerce. This area of law dealswith rights. Its complex and dynamic field of law is essential for ensuring fair trade practicesand protecting the interests or rights of all parties involved in the business world.Commercial law assignments are often tough for students studying law at the universitylevel. To tackle complex case studies, legal frameworks, and real-life cases, studentsstudying commercial law often seek help with their assignments.",
  },
  {
    tag: "blog-20",
    slug: "criminal-law-guide-principles-crimes-defenses-explained",
    heading: "Criminal Law Guide: Principles, Crimes, and Defenses Explained",
    date: "January 9, 2025",
    image: img22,
    about:"Criminal law is the foundation of any legal system, it governs the rules and penalties associated with crimes. It seeks to maintain safety and public order by defining offenses, prosecuting defenders, and establishing punishments. This blog provides a detailed summary of criminal law, breaking down its crucial elements, principles, and procedures.",
  },
  {
    tag: "blog-19",
    slug: "what-are-the-14-principles-of-management",
    heading: "What Are the 14 Principles of Management by Fayol?",
    date: "January 6, 2025",
    image: img21,
    about:"The role of management in any organization is crucial to ensure that resources are usedefficiently to achieve goals. To succeed in any type of business, be it team or projectmanagement, you must know the management principles. In this blog, we’ll explore whatmanagement is, discuss its fundamental principles, highlight its importance, and answerfrequently asked questions about this essential topic. For those seeking assistance inunderstanding these principles, especially for academic tasks, the best assignment helpcan provide valuable guidance.",
  },
  {
    tag: "blog-18",
    slug: "enhance-your-accounting-skills",
    heading: "Enhance Your Accounting Skills: Learn, Practice, and Excel",
    date: "January 3, 2025",
    image: img20,
    about:"Accounting might appear complicated, but anyone can learn it effectively with the right strategies. Whether you're a university student looking to boost your grades or aspiring to build a career in accounting, improving your skills is crucial. This blog will offer practical tips to enhance your accounting knowledge and highlight how professional assistance can aid your learning journey. Embracing these steps can lead to greater understanding and success in the field.",
  },
  {
    tag: "blog-17",
    slug: "top-10-benefits-of-hiring-online-essay-writers",
    heading: "Top 10 Benefits of Hiring Online Essay Writers for Academic Success",
    date: "December 30, 2024",
    image: img19,
    about:"Online essay writers have become an important resource for professionals, students, and even amateur writers in the fast-paced digital society we live in today. These services are becoming increasingly well-liked since they meet a variety of purposes, including professional writing projects and some of the best assignment services",
  },
  {
    tag: "blog-16",
    slug: "ucas-personal-statement-changes-2025-guide",
    heading: "UCAS Personal Statement Changes 2025: Complete Guide",
    date: "December 26, 2024",
    image: img18,
    about:"The UCAS personal statement process is evolving for students applying to university in 2026 and beyond. These changes will transform how students present their motivations, qualifications, and extra-curricular activities, aiming to address disparities in the university admissions process.",
  },
  {
    tag: "blog-3",
    heading: "How to Choose the Best Assignment Help for Academic Success",
    image: img2,
    about: "In today’s busy academic world, students face numerous challenges including managing classes, extracurricular activities, personal commitments, and part-time jobs. With this busy schedule, assignments are like a burden for them, requiring a lot of time and focus. To reduce the burden on the students, some of the best assignment services are available for completing your assignment, providing personal assistance and 100% plagiarised free content with timely submission. However, choosing the right one is a challenge. In this blog, you will learn how you can choose the right assignment help.",
    slug: "how-to-choose-the-best-assignment-help-for-academic-success",
    date: "December 23, 2024",
  },
  {
    tag: "blog-15",
    slug: "how-to-write-and-structure-a-2000-word-essay-effectively",
    heading: "How to Write and Structure a 2000-Word Essay Effectively",
    date: "December 19, 2024",
    image: img17,
    about:"Writing a 2000-word essay is daunting unless you know how to structure it properly. You can either take the help of ChatGPT, or any other AI tools to complete your assignment but ask yourself, is it worth doing that? I am a student as well and managing assignments along with extra studies is very complex for me still, if I were in your place I would rather look for the best assignment services to complete my assignment because they provide personal assistance, unlike any other AI tools.",
  },
  {
    tag: "blog-14",
    slug: "effective-ways-to-avoid-plagiarism-in-academic-assignments",
    heading: "Effective Ways To Avoid Plagiarism In Academic Assignments",
    date: "December 16, 2024",
    image: img16,
    about:"Plagiarism is a serious problem that affects students across fields including engineering, management, law, IT, and statistics. Plagiarized work might have serious consequences such as expulsion or a grade reduction. For students, who need help, or assistance, there are some best assignment services available for the time management of struggling students. This blog will give you tips on how to avoid plagiarism and create original, high-quality assignments that stand out.",
  },
  {
    tag: "blog-13",
    slug: "why-ai-cannot-replace-professional-writers-academic-success",
    heading: "Why AI Cannot Replace Professional Writers: Academic Success",
    date: "December 12, 2024",
    image: img15,
    about:"Undoubtedly , AI is one of the best technologies for helping people in many ways. But giving it a thought, it is also not good for students who are young and need to work on their academics. Using AI tools for work and projects puts a barrier on students’ thinking skills and makes them dependent on technology which is not good for their academic journey.",
  },
  {
    tag: "blog-12",
    slug: "easy-steps-to-nail-your-dissertation-topic-selection",
    heading: "7 Easy Steps to Nail Your Dissertation Topic Selection",
    date: "December 9, 2024",
    image: img14,
    about:"Choosing a dissertation topic is one of your most important and fascinating aspects of your academic journey. It’s your opportunity to show your enthusiasm, creativity, and knowledge. But finding the perfect topic can be difficult. We will give you comprehensive guidance in this blog to assist you in selecting a topic that is both important and manageable",
  },
  {
    tag: "blog-11",
    slug: "easy-steps-to-write-a-perfect-coursework",
    heading: "7 Easy Steps to Write a Perfect Coursework",
    date: "December 5, 2024",
    image: img13,
    about:"Coursework is the easiest task to do if you understand the pattern and format of it. It includes some steps to follow and in this blog, we will tell you how you can easily do your coursework in 7 steps.",
  },
  {
    tag: "blog-10",
    slug: "common-mistakes-students-make-assignments",
    heading: "6 Common Mistakes Students Make with Their Assignment",
    date: "December 2, 2024",
    image: img12,
    about:"In a student’s academic journey, assignment plays an important role in developing essential skills like thinking, researching, and time management. In this blog, we will tell you which mistakes students make while writing an assignment and how they can avoid it.",
  },
  {
    tag: "blog-9",
    slug: "how-to-structure-research-paper",
    heading: "How to Structure Your Research Paper: A Step-by-Step Guide for Students",
    date: "November 28, 2024",
    image: img11,
    about:"Writing a research paper can seem daunting, particularly when you are unsure how to structure it effectively. A well-structured research paper ensures clarity and influences your research findings. In this detailed guide, we will demonstrate the process of organizing an effective research paper.",
  },
  {
    tag: "blog-8",
    slug: "assignment-preparation-steps",
    heading: "Key Steps to Remember for Preparing Your Assignment",
    date: "November 25, 2024",
    image: img10,
    about:"Composing an assignment may seem simple but crafting top-notch content poses a more demanding challenge. In this blog, we will discuss effective strategies for creating high-quality content and emphasize the key steps needed to finish an assignment quickly. Understanding the assignment requirement and the format of the assignment is involved. If needed, seek the best assignment services to ensure support and professional guidance in meeting academic standards.",
  },
  {
    tag: "blog-7",
    slug: "economic-impact-studies",
    heading: "Understanding Economic Impact Studies: A Deep Dive",
    date: "November 11, 2024",
    image: img9,
    about:"Economic impact studies are essential tools that enable governments, businesses, and organizations to assess the financial and economic consequences of specific events, programs, or policies. By analyzing factors like job creation, GDP growth, tax revenue, and sector development, these studies help determine how particular activities affect the economy overall.",
  },
  {
    tag: "blog-6",
    heading: "Exploring Different Types of Assignment Help: Which One is Right for You",
    image: img8,
    about: " In the wider world of education, students often face a variety of challenges that make homework difficult. Fortunately, there are many resources to help you overcome these obstacles, including an assignment helper who can assist with written assignments. Knowing the different types of assignment help will empower you to choose the option that best suits your needs. In this blog, we will explore different types of aids and advise how to choose the right one for you.",
    slug: "exploring-assignment-help",
    date: "September 26, 2024",
  },
  {
    tag: "blog-5",
    heading: "IT Corporation: Shaping the Future of Technology and Business",
    image: img7,
    about: "In today's interconnected world, information technology (IT) plays an important role in shaping the landscape of business, communication, and everyday life. These global organisations drive technological progress, spark innovation, and deliver solutions that transform industries. But what is an IT company and why is it important? Explore the structure, impact, and future of IT companies as well as their relationship with various sectors, including assignment writing services.",
    slug: "it-corporation",
    date: "September 19, 2024",
  },
  {
    tag: "blog-4",
    heading: "The Future of Marketing: Emerging Trends and Technologies",
    image: img6,
    about: "Marketing is always changing, and it's important for businesses to keep up with the latest trends and technologies. As we look to the future, several new trends and technologies are set to change how marketing is done. Here’s a look at what to expect.",
    slug: "the-future-of-marketing",
    date: "September 16, 2024",
  },
  {
    tag: "blog-1",
    heading: "Embracing Tomorrow's Innovations: What's Next in Technology",
    image: img5,
    about: "Innovation drives progress, always pushing us towards a better tomorrow. As we look ahead, it's important to explore the new trends and technologies that will shape our future. Join us as we uncover the potential of tomorrow's innovations.",
    slug: "embracing-tomorrow's-innovations",
    date: "September 9, 2024",
  },
  
  {
    tag: "blog-2",
    heading: "A Beginner's Guide to Writing Essays in Proper Format",
    image: img1,
    about: "Are you feeling overwhelmed by the task of writing an essay? Don't worry, you're not alone. Many students find essay writing challenging, but with the right approach, it can become much more manageable. In this guide, we'll walk through the steps to writing an essay in proper format at an intermediate English level.",
    slug: "a-beginner's-guide-to-writing-essays-in-proper-format",
    date: "July 15, 2024",
  },
 
 
];

const itemsPerPage = 9;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const currentBlogs = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
<div className="px-4 sm:!px-10 lg:!px-[50px]">
  <div className="max-w-[1280px] mx-auto">
    {/* Blog Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {currentBlogs.map((item, index) => (
       <Link href={`/blog/${item.slug}`} key={index} passHref>
  <div
    id={item.tag}
    className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col min-h-[500px]"
  >
    {/* Blog Image */}
    <div className="relative w-full h-[220px] flex items-center justify-center bg-gray-50">
      <Image
        src={item.image}
        alt="blog image"
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      <h1 className="text-lg font-bold text-gray-900 group-hover:text-[#5b6cf2] transition-colors duration-300 text-left">
        {item.heading}
      </h1>
      <p className="mt-4 text-sm text-gray-600 line-clamp-3">
        {item.about}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-100">
        <span className="text-sm text-gray-400">{item.date}</span>
        <Button className="bg-transparent hover:bg-transparent text-[#5b6cf2] hover:text-black font-semibold text-sm transition-colors duration-300">
          Read More »
        </Button>
      </div>
    </div>
  </div>
</Link>

      ))}
    </div>

   {/* Pagination */}
<div className="flex justify-center sm:justify-end mt-10 mb-12">
  <div className="flex flex-wrap items-center gap-2">
    {/* Previous */}
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-200 ${
        currentPage === 1
          ? "cursor-not-allowed bg-gray-200 text-gray-500"
          : "bg-white hover:bg-[#5b6cf2] hover:text-white text-gray-700"
      }`}
      disabled={currentPage === 1}
    >
      <span className="hidden sm:inline">« Previous</span>
      <span className="sm:hidden">«</span>
    </button>

    {/* Page Numbers */}
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: totalPages }, (_, index) => index + 1)
        .filter((page) => {
          return (
            page === 1 || // First
            page === 2 || // Second
            page === totalPages || // Last
            page === totalPages - 1 || // Second Last
            (page >= currentPage - 1 && page <= currentPage + 1) // Current ±1
          );
        })
        .reduce((acc, page, idx, arr) => {
          if (idx > 0 && page - arr[idx - 1] > 1) {
            acc.push("ellipsis");
          }
          acc.push(page);
          return acc;
        }, [])
        .map((page, index) =>
          page === "ellipsis" ? (
            <span key={index} className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-200 ${
                currentPage === page
                  ? "bg-[#5b6cf2] text-white font-bold"
                  : "bg-white hover:bg-[#5b6cf2] hover:text-white text-gray-700"
              }`}
            >
              {page}
            </button>
          )
        )}
    </div>

    {/* Next */}
    <button
      onClick={() => handlePageChange(currentPage + 1)}
      className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-200 ${
        currentPage === totalPages
          ? "cursor-not-allowed bg-gray-200 text-gray-500"
          : "bg-white hover:bg-[#5b6cf2] hover:text-white text-gray-700"
      }`}
      disabled={currentPage === totalPages}
    >
      <span className="hidden sm:inline">Next »</span>
      <span className="sm:hidden">»</span>
    </button>
  </div>
</div>

  </div>
</div>

  );
}