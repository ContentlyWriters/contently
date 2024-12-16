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

const blogData = [
  {
    tag: "blog-14",
    slug: "effective-ways-to-avoid-plagiarism-in-academic-assignments",
    heading: " Effective Ways To Avoid Plagiarism In Academic Assignments",
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
  {
    tag: "blog-3",
    heading: "Decoding Academic Success: The Crucial Role of Choosing the Perfect Assignment Assistance Partner",
    image: img2,
    about: "In today's academic world, students juggle multiple assignments and deadlines, often feeling overwhelmed. This is where assignment help services come to the rescue. However, not all services are created equal, and choosing the right one is crucial for success.",
    slug: "decoding-academic-success",
    date: "July 1, 2024",
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
        {/* Adjust grid columns based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {currentBlogs.map((item, index) => (
            <Link href={`/blog/${item.slug}`} key={index} passHref>
              <div
                id={item.tag}
                className="bg-[#fff] border-1 p-4 sm:p-6 shadow-xl rounded-xl h-[550px] flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              >
                <h1 className="text-lg font-bold pt-5 text-center">
                  {item.heading}
                </h1>
                <Image
                  className="my-4 rounded-lg w-full h-[200px] object-cover"
                  src={item.image}
                  alt="blog image"
                />
                <p className="pt-5 text-sm line-clamp-3">{item.about}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <Button className="bg-white hover:bg-[#fff] hover:text-[#5b6cf2] text-read-more-text underline text-sm font-bold">
                    Read More »
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-8 mb-8">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-4 py-2 rounded-l-lg border ${
                currentPage === 1
                  ? "cursor-not-allowed bg-gray-200 text-gray-500"
                  : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
              disabled={currentPage === 1}
            >
              « Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border ${
                  currentPage === index + 1
                    ? "bg-[#5b6cf2] text-white font-semibold"
                    : "bg-white hover:bg-gray-100 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-4 py-2 rounded-r-lg border ${
                currentPage === totalPages
                  ? "cursor-not-allowed bg-gray-200 text-gray-500"
                  : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
              disabled={currentPage === totalPages}
            >
              Next »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
