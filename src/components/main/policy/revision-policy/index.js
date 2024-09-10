import React from "react";

export default function RevisionPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8 ">
        <div className="text-center font-semibold text-5xl my-5 sm:my-10">
         <h1> Revision Policy </h1>
        </div>
        <h3 className="font-semibold text-xl">{data.heading}</h3>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">
                {index + 1}{'.'} {item.title}
              </h3>
              <p className="opacity-70" >{item.description}</p>
            </div>
          ))}
          <div className="font-bold opacity-80 ">
          Contentlywriters.com Revision Policy, Last Updated: April 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "At ContentlyWriters.com, we are committed to delivering high-quality academic support to our clients. We recognize how important it is to satisfy your expectations and aim to ensure your complete satisfaction with our services. To facilitate this, we have established a comprehensive revision process to address any concerns you may have regarding the quality of your paper. Please review the following guidelines to understand the terms and conditions of our revision process:",
  item: [
    {
      title: "Revision Instructions",
      description:
        "Your revision request must align with the original instructions of your order. We offer free revisions as long as the requested changes are consistent with the original requirements. Any requests that deviate from the initial instructions may incur an additional fee.",
    },
    {
      title: "Submission Procedure",
      description:
        "To request a revision, please contact our support team directly. This ensures clear communication and enables us to respond promptly to your revision needs.",
    },
    {
      title: "Deadline for Revision Requests",
      description:
        "You are allowed to request a revision at any time before you approve your order. However, once the order is approved, you have a 7-day window to request a free revision. If you fail to request a revision within this period, additional charges may apply. For orders with Progressive Delivery, such as complete Thesis or Dissertation orders, the deadline for revision requests is extended to 14 days following the initial approval.",
    },
    {
      title: "Additional Fees for Late or Extensive Revisions",
      description:
        "If your revision request involves substantial changes to the original order or is submitted after the 7-day period post-approval, an extra fee may be charged. Similarly, for Progressive Delivery orders, late requests that exceed the specified timeframe may result in additional costs. Please reach out to our support team to obtain an estimate for any fees associated with your specific revision request.",
    },
    {
      title: "Writer Assignment for Revisions",
      description:
        "If you wish to have your paper revised by a different writer, please be aware that additional time may be needed to find a suitable alternative. We recommend extending the revision deadline by 12 hours to accommodate this process effectively. Your cooperation in adjusting the revision deadline is greatly appreciated.",
    },
  ],
};
