import React from "react";

export default function RefundPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8 ">
        <div className="text-center font-semibold text-5xl my-5 sm:my-10">
        <h1>  Refund Policy </h1>
        </div>
        <h3 className="font-semibold text-xl">{data.heading}</h3>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">
                {index + 1}
                {"."} {item.title}
              </h3>
              <p className="opacity-70 ">{item.description}</p>
              {item.other && (
                <div className="grid gap-4 pl-4">
                  {item.other.map((other, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h3 className="font-semibold text-lg">
                       {other.title}
                      </h3>
                      <p className="opacity-70 ">{item.description}</p>
                      <ul className="list-disc list-inside pl-4 grid gap-2 opacity-70 ">
                        {other.value.map((value, index) => (
                          <li key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="font-bold opacity-80 ">
            Version 2.0. Last modified: November, 2025
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "At ContentlyWriters.com, we strive to provide our customers with a seamless and satisfactory experience. We understand that there may be instances when a refund is necessary, so we have established the following refund policy to cover a range of scenarios. Please review this policy carefully to understand your rights and responsibilities regarding refunds.",
  item: [
    {
      title: "Cancellation of Orders",
      description:
        "If you need to cancel an order, please contact our support team immediately via WhatsApp or email. To confirm the cancellation, kindly send us a written request. We recommend initiating the cancellation process as soon as possible.",
      other: [
        {
          title: "Refund Eligibility:",
          description:
          "You are eligible for a full refund if you cancel your order before a writer is assigned. Once a writer has been assigned, cancellations may be restricted, and refunds may be partial or not possible, depending on the level of completion. The following timeframes determine eligibility for a refund:",
          value: [
           
            "Cancel within 3 days of placing the order for a refund.",

          
          ],
        },
      ],
    },
    {
      title: "Double Payment",
      description:
        "If a customer mistakenly makes a double payment for an order, we will promptly investigate and fully refund the duplicate payment. To expedite this process, please provide our support team with proof of the duplicate transaction, such as transaction IDs or payment receipts.",
    },
    {
      title: "Late Delivery",
      description:
        "We aim to deliver every order by the agreed-upon deadline. However, if your content is delivered late, you may be eligible for a refund based on the length of the delay and its impact on your needs. Please contact our support team to address the issue and begin the refund process, if applicable.",
    },
    {
      title: "Accidental Duplicate Orders",
      description:
        "If you accidentally place two orders for the same service, we will promptly identify and confirm the duplicate orders. In such cases, we will provide a full refund for the additional order. To expedite the refund process, please notify our support team as soon as you become aware of the mistake.",
    },
    {
      title: "Failure to Approve Completed Paper",
      description:
        "Once you receive your completed document, it is crucial to review and approve it within the designated timeframe. If you do not approve the document within two days of receiving it, we will assume that the order has been fulfilled to your satisfaction, and no refunds will be issued after this period.",
    },
    {
      title: "Work Not As Described",
      description:
        "If the completed work does not match the order’s specifications or description, please contact our support team with detailed information about the discrepancy. We will thoroughly review the issue and, if necessary, provide an appropriate resolution, which may include a partial or full refund, depending on the severity of the problem.",
    },
    {
      title: "Refund Processing",
      description:
        "Once your refund request is approved, we will initiate the refund process. The time it takes to receive the refund will depend on your financial institution and the method of payment used. We will strive to process refunds as quickly as possible, usually within 4-5 business days. Refunds related to quality issues may take up to two weeks to process.",
    },
    {
      title: "Contact Us",
      description:
        "If you have any questions or concerns regarding our refund policy or need assistance with a refund request, please do not hesitate to contact our support team. We are here to help and ensure you have a positive experience with ContentlyWriters.com.",
    },
    {
      title: " Disclaimer",
      description:
        "ContentlyWriters.com reserves the right to update or modify this refund policy at any time without prior notice. Any changes will take effect immediately upon posting on our website. It is your responsibility to review this policy periodically to stay informed of any updates. By using our services, you agree to the terms and conditions outlined in this refund policy.",
    },
    
  ],
};
