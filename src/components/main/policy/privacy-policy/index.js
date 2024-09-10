import React from "react";

export default function PrivacyPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8 ">
        <div>
          <div className="text-center font-semibold text-5xl my-5 sm:my-10">
           <h1> Privacy Policy </h1>
          </div>
          <h3 className="font-semibold text-xl">{data.heading}</h3>
          {data.other && (
            <div className="grid gap-4">
              {data.other.map((other, index) => (
                <ul
                  key={index}
                  className="list-disc list-inside font-semibold  text-xl"
                >
                  {other.value.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {item.heading && (
                <h3 className="font-semibold text-xl">{item.heading}</h3>
              )}
              <h3 className="font-semibold text-lg">
                {index + 1}
                {"."} {item.title}
              </h3>
              {item.value && (
                <ul key={index} className="grid gap-1  opacity-70 ">
                  {item.value.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              )}
            {item.subItems && (
                <div className="pl-6">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex flex-col gap-2">
                      <h3 className="font-semibold text-lg mt-3">{subItem.title}</h3>
                      {subItem.value && (
                        <ul key={subIndex} className="grid gap-1 opacity-70">
                          {subItem.value.map((value, valueIndex) => (
                            <li key={valueIndex}>{value}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
         
          <div className="font-bold opacity-80 ">
            Contentlywriters.com Privacy Policy, Last Updated: April 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "Your privacy is crucial to us. We follow a few essential principles:",
  other: [
    {
      value: [
        "We carefully manage the personal data you supply and the information we acquire through our services.",
        "Personal information is stored only when necessary or legally needed.",
        "Our website enables you to easily control which information is shared publicly or privately, indexed by search engines, or permanently removed.",
        "We are committed to transparency in how we collect, use, and disclose your personal information.",
      ],
    },
  ],
  item: [
    {
      title: "What This Privacy Policy Covers:",
      value: [
        "We are Facio Contently Writers Private Limited, a company registered in India, and we serve as the Data Controller of your personal data in accordance with this Privacy Policy.",
        "This Privacy Policy applies to the information we gather about you while you visit our website, contentlywriters.com.",
        "In this Privacy Policy, we will refer to our website, mobile applications, and other products and services as Services",
        "We are committed to protecting and respecting your privacy.This Privacy Policy outlines how we collect, use, process, and retain your personal information. Any information that can directly or indirectly identify you as a natural person is considered Personal Data, and we are committed to ensuring its strict security.",
      ],
    },
    {
      
      title: "Information We Collect",
     
      subItems: [
        {
          title: "Personal Information Provided by the User",
          value: [ "We collect personal information that you, as a user, provide when you register with us to use our services, inquire about our products or services, attend events related to our offerings, or otherwise get in touch with us. The personal information you provide may include the following:",
            "- First and last name.",
            "- User's email address.",
            "- Account Password.",
            "- Order details.",
            "- Additional files uploaded by you to our website.",
          ],
        },
        
        {

           title: "Files",
          value: [
            "We may collect and retain files that you submit, download, or access through the Website. Please do not share any files with us that you are not entitled to use. Please do not post or share with us files containing your personal information or the personal information of third parties without our authorization. We may not guarantee the security of such personal information.",
          ],
        },
        {
          title: "Social Network Login Data",
          value: [
            "We offer the option to register with us using your existing social network accounts, such as Google and other platforms. We will obtain your profile information from the social media provider, regardless of the platform you use. The information we obtain from social media providers differs depending on the site. Still, it often includes your name, email address, and any other information you have decided to share on the specific social networking platform. We will use the information you provide for the purposes mentioned in our privacy policy or for the applicable services you have requested. Please note that we have no control over, or responsibility for, any additional use of your personal information by third-party social media providers. We urge that all of our users study their social media providers' privacy policies to better understand how their information is collected, used, and shared online, as well as how to establish privacy choices on various sites and applications.",
            "Please ensure that all information provided during registration is true, complete, and accurate. You must notify us promptly of any changes or modifications to your personal information.",
          ],
        },
      ],
    },
    
    {
      title: "Ways of Giving Information",
      value: [
        "You may offer us information about yourself with your consent, for example:",
        "- Fill out a form or contact us via email.",
        "- Posting an order on the website.",
        "- Posting reviews and feedback on the website.",
        "- Contacting us via our phone numbers.",
        "This information could be personal, financial, educational, or about your order.",
        "",
        "When you purchase services from us, you may provide us with information for legal reasons, such as entering into a contract.",
        " We collect information for one or more of the following reasons:",
        "- To supply services after you order through our website.",
        "- If you are an existing customer, we will offer information regarding items or services you have expressed interest in within a reasonable timeframe.",
        "- We will supply you with information about our products and services, as well as relevant ones.",
        "- To supply contracted services to you.",
        "- Legal grounds, such as entering into a contract with us.",
        "- Provide information about our products and services if you consent to receive it.",
      ],
    },
    {
      title: "We may process your personal data because:",
      value: [
        "- We have a contract with you.",
        "- You have given us permission to do this.",
        "- We must deliver services based on your order.",
        "- You requested us to do so.",
        "- Comply with the law.",
        "All of these are legal reasons for processing the information we have about you.",
       
      ],
    },
    {
      title: "With Whom Do We Share Your Personal Information?",
      value: [
        "We may disclose your personal information with third parties for a variety of reasons, including your consent or legal requirements. For instance, we may provide your personal information to:",
        "- Our marketing team will send you promotional materials after you register on our website.",
        "- We use subcontractors and other parties to fulfill contracts with them or with you.",
        "- Shared with third parties with your approval.",
        "- We collaborate with third-party service providers based on your purchases.",
        "",
        "",
        "If Facio Contently Writers Private Limited, or substantially all of its assets, is acquired by a third party, the personal data we hold on our clients will be included in the transferred assets. ",
        "",
        "",
        "Additionally, we may share your personal information with other parties for the following reasons:",
        "- We may disclose personal data to public authorities as required by law, including for national security or law enforcement purposes.",
        "- Government agencies may legitimately seek it.",
        "- Enforce Website Terms of Use and other agreements.",
        "- We may disclose personal information to protect the rights, property, and safety of Facio Contently Writers Private Limited, our customers, and others.",
        "- Exchange information with third parties to avoid fraud and reduce credit risk.",
      ],
    },
    {
      title: "Aggregated data",
      value: [
        "We may occasionally share aggregated data with third parties.",
        "This indicates that your personally identifiable information has been removed from the data. Data transmitted to third parties in this manner is not personal data and is instead statistics or similar data; however, you retain the right to object.",
      ],
    },
    {
      title: "Where We Store Your Personal Data?",
      value: [
        "We mostly keep your personal information in Amazon Web Services.We assure you that all of your data is securely protected and that unauthorized parties will not have access to it.",
      ],
    
       subItems: [
      {
        title: "Access to your personal data via password",
        value: [
          "Where we have provided you (or you have chosen) a password that allows you to access particular portions of our website, you are responsible for keeping it confidential. We ask that you do not share your password with anyone.",
        ],
      },
      {
        title: "Transmission and storage of your personal data",
        value: [
          "Unfortunately, data transfer over the internet is not entirely secure. We cannot guarantee the security of your data while it is being transported and kept; nevertheless, we will use best practices to ensure that your data is encrypted to the GDPR standards to secure your personal information.",
        ],
      },
      {
        title: "How Long Will We Keep Your Personal Data?",
        value: [
          "We will not keep your Personal Information for longer than necessary. We will keep your personal information:",
          "• As long as necessary by law.",
          "• Until there is no good reason to maintain it.",
          "• Until you ask us to stop using or delete it.",
          "We may retain only enough of your Personal Data to ensure that we comply with your requests not to use your personal information or your right to erasure. For example, we must maintain your request to be erased, even if it contains your personal information, until you are no longer our customer, or for tax purposes, etc.",
        ],
      },
    ],
    subItems: [
      {
        title: "Access to your personal data via password",
        value: [
          "Where we have provided you (or you have chosen) a password that allows you to access particular portions of our website, you are responsible for keeping it confidential. We ask that you do not share your password with anyone.",
        ],
      },
      {
        title: "Transmission and storage of your personal data",
        value: [
          "Unfortunately, data transfer over the internet is not entirely secure. We cannot guarantee the security of your data while it is being transported and kept; nevertheless, we will use best practices to ensure that your data is encrypted to the GDPR standards to secure your personal information.",
        ],
      },
      {
        title: "How Long Will We Keep Your Personal Data?",
        value: [
          "We will not keep your Personal Information for longer than necessary. We will keep your personal information:",
          "• As long as necessary by law.",
          "• Until there is no good reason to maintain it.",
          "• Until you ask us to stop using or delete it.",
          "However, we may retain a minimal amount of your personal data to ensure we can honor your requests to stop using it or to fulfill your right to erasure. For example, we must maintain your request to be erased, even if it contains your personal information, until you are no longer our customer, or for tax purposes, etc.",
        ],
      },
    ],
    },
   
  
{
  title: "What Are Your Rights?",
  value: [
    "The following are your legal rights, and what we do to defend them:",
    "1. The right to be informed: We are releasing this Privacy Policy to keep you informed about what we do with your personal information. We strive to be transparent about how we use your information. We will also answer all of your queries about this Policy. Please submit them to info@contentlywriters.com.",
    "",
    "",
    "2. The Right to Access: You have the right to view the personal data we hold about you. To request access to your information, please contact our Support Team at info@contentlywriters.com.",
    "",
    "",
    "3. The Right to Rectification: If any of the information we have about you is incorrect or incomplete, you have the right to request its correction. If the data has been shared with third parties, either with your permission or for legal reasons, we will also request that they make the necessary corrections.",
    "",
    "",
    "4. The right to erasure: This is also known as 'the right to be forgotten'. If you wish us to erase all of your personal data and we have no legal justification to continue processing and holding it, please contact our Support Team at info@contentlywriters.com.",
    "",
    "",
    "5. The right to restrict processing: You have the right to ask us to limit how we use your information. This means that we can only store the data and not process it. We retain only the minimum amount of data necessary to ensure we can fulfill your request in the future. If you wish to restrict the processing of your data, please contact our Support Team at info@contentlywriters.com.",
    "",
    "",
    "6. The right to data portability: We must allow you to get and reuse your personal data for your own purposes across services in a safe and secure manner, without impacting the usability of your data. If you would like to know how to transfer your data to another entity, please contact our Data Protection Officer at info@contentlywriters.com. This right only applies to the personal information you have submitted to us as the Data Controller. We must keep the data with your consent or for the purpose of performing a contract.",
    "",
    "",
    "7. The Right to Object: You have the right to object to the processing of your data for legitimate interests, the exercise of official authority, or direct marketing purposes (including data aggregation), and purposeless statistics. If you want to object, please contact our support team at info@contentlywriters.com.",
    "",
    "",
    "8. The Right to Withdraw Consent: If you have previously consented to the processing of your data but later decide to withdraw your permission, you have the right to do so at any time. We will then cease processing your data. To withdraw your consent, please contact our support team at info@contentlywriters.com.",
  ],
},
{
  title: "The Laws and Regulations",
  value: [
    "The data protection framework is primarily based on the Information Technology Act, 2000 (IT Act) and the rules notified under it. This included the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (Privacy Rules).",
  ],
},
{
  title: "Disclaimer",
  value: [
    "We may update our Privacy Policy from time to time due to changes in laws, regulations, or industry standards, or if we make changes to our operations. We will update this page with the changes, and we invite you to examine them to stay updated. If we make changes that significantly affect your privacy rights, we will offer extra notification, such as via email or the Website. If you disagree with the modifications to this Privacy Policy, please deactivate your account by mailing us at info@contentlywriters.com.",
  ],
},
{
  title: "Contact Us:",
  value: [
    "This is our registered address, corporate identification number, and contact information:",
    "Facio Contently Writers Private Limited's address is Mansarovar, Jaipur, Rajasthan, 302020.",
    "Corporate Identification Number: U82990RJ2024PTC093289.",
    "Email address: info@contentlywriters.com.",
    "Phone: +91 7727857997.",
  ],
},
],
};
