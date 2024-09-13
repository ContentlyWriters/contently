"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/assets/image/blogImg1.jpg";
import img2 from "@/assets/image/blogImg2.jpg";
import img3 from "@/assets/image/blogImg3.jpg";
import img4 from "@/assets/image/blogImg4.jpg";
import img5 from "@/assets/image/blogImg5.jpg";

const blogData = [
  {
    tag: "blog-1",
    heading: "Embracing Tomorrow's Innovations: What's Next in Technology",
    image: img5,
    about: "Innovation drives progress, always pushing us towards a better tomorrow. As we look ahead, it's important to explore the new trends and technologies that will shape our future. Join us as we uncover the potential of tomorrow's innovations.",
    slug: "blog-1", // For linking
  },
  {
    tag: "blog-2",
    heading: "The Union Budget for 2024-25",
    image: img4,
    about: "The Lok Sabha has unanimously approved the Union Budget for the fiscal year 2024-25, which amounts to Rs 48.21 trillion. The budget presented by Finance Minister Nirmala Sitharaman is a significant milestone in India's economic development. Here is a summary of the key aspects and implications of this substantial financial plan. Additionally, for students and professionals seeking detailed analyses and reports on the budget, assignment writing services can provide comprehensive and insightful assistance.",
    slug: "blog-2", // For linking
  },
  {
    tag: "blog-3",
    heading: "A Beginner's Guide to Writing Essays in Proper Format",
    image: img1,
    about: "Are you feeling overwhelmed by the task of writing an essay? Don't worry, you're not alone. Many students find essay writing challenging, but with the right approach, it can become much more manageable. In this guide, we'll walk through the steps to writing an essay in proper format at an intermediate English level.",
    slug: "blog-3", // For linking
  },
  {
    tag: "blog-4",
    heading: "Decoding Academic Success: The Crucial Role of Choosing the Perfect Assignment Assistance Partner",
    image: img2,
    about: "In today's academic world, students juggle multiple assignments and deadlines, often feeling overwhelmed. This is where assignment help services come to the rescue. However, not all services are created equal, and choosing the right one is crucial for success. Here's why it matters.",
    slug: "blog-4", // For linking
  },
  {
    tag: "blog-5",
    heading: "Unleashing the Power of ROI: A guide to Maximizing Returns in Business",
    image: img3,
    about: "Return on Investment (ROI) is a critical metric in business that measures the profitability of an investment relative to its cost. It provides valuable insights into the efficiency and effectiveness of various business initiatives.",
    slug: "blog-5", // For linking
  },
  // Add blog 4 and blog 5 here...
];

export default function Blog() {
  return (
    <div className="px-4 sm:!px-10 lg:!px-[50px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="sm:px-20 grid sm:gap-20 gap-10 py-10">
          {blogData.map((item, index) => (
            <div
              key={index}
              id={item.tag}
              className="bg-[#fff] border-1 p-4 sm:p-8 shadow-xl rounded-xl"
            >
              <h1 className="text-3xl font-semibold pt-5 text-center">
                {item.heading}
              </h1>
              <Image className="my-4 rounded-lg max-h-[500px]" src={item.image} alt="blog image" />
              <p className="pt-5">{item.about}</p>
              <Link href={`/blog/${item.slug}`} passHref>
                <Button className="bg-read-more-bg text-read-more-text shadow-read-more">
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
