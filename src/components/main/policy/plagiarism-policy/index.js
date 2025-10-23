import React from "react";

export default function PlagiarismPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8">
        <div className="text-center font-semibold text-5xl my-5 sm:my-10">
         <h1> Plagiarism Policy </h1>
        </div>
        <h3 className="font-semibold text-xl">{data.heading}</h3>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">
                {index + 1}
                {"."} {item.title}
              </h3>
              <p className="opacity-70">{item.description}</p>
              {item.other && (
                <div className="grid gap-4 pl-4">
                  {item.other.map((other, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <ul className="list-disc list-inside pl-4 grid gap-2 opacity-70">
                        {other.value.map((value, index) => (
                          <li key={index}>
                            <span
                              dangerouslySetInnerHTML={{ __html: value }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="font-bold opacity-80">
           Version 2.0. Last modified: November, 2025
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "At ContentlyWriters.com, we are dedicated to providing our users with original, high-quality academic assignments. We take plagiarism seriously and enforce strict standards to maintain the originality and integrity of our content. Our plagiarism policy, outlining our approach and methods, includes the following:",
  item: [
    {
      title: "Original Content",
      description:
        "We provide content crafted by our experts from scratch. These content are meant to be used as guides for developing your own content or as sources of information when appropriately cited.",
    },
    {
      title: "Anti-Plagiarism Measures",
      description:
        "To ensure the authenticity of our content, we employ advanced anti-plagiarism software. This software is regularly updated to identify similarities with online content or existing papers. Our tools are designed to detect various forms of plagiarism, including:",
      other: [
        {
          value: [
            "<strong>Direct Copying:</strong> Instances of exact copying without proper attribution are identified and addressed.",
            "<strong>Paraphrasing and Synonym Substitution:</strong> We ensure that paraphrased content does not merely substitute words with synonyms without proper acknowledgment.",
            "<strong>Reordered Text:</strong> Our software detects when the order of words is altered to mimic original content found online.",
          ],
        },
      ],
    },
    {
      title: "User Responsibility",
      description:
        "While we take extensive measures to guarantee the uniqueness of our content, it is vital that users utilize our resources ethically. We encourage using our samples as references and sources of inspiration, with proper citation and referencing when integrating them into your own work.",
    },
    {
      title: "Consequences of Plagiarism",
      description:
        "Any plagiarism identified in our content is addressed promptly. Depending on the severity, consequences may include the suspension of access to our services or legal action if warranted.",
    },
    {
      title: "Reporting Plagiarism",
      description:
        "We encourage users to report any suspected instances of plagiarism in our content. All reports are thoroughly investigated, and appropriate actions are taken to maintain the integrity of our work.",
    },
  ],
};
