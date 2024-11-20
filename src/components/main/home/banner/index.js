"use client";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import InputError from "@/components/ui/input-error";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useUserContext } from "@/context/auth";
import { toast } from "react-toastify";
import { axiosInstance } from "@/lib/axios";
export default function Banner() {
  // const checkoutHandler = async({orderDetails}) => {
  //   const orderData  = await axios.post("https://contentlywriters.com:8088/order", {data: orderDetails})
  //   console.log({orderData})
  // }
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { user } = useUserContext();
  const [formValues, setFormValues] = useState({
    subject: "Accounting",
    topic: "",
    paragraph: "",
    comment: "",
    deadline: "14 days",
    orderFile: "",
    temp: "Passage",
    pages: 1,
  });

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [error, setError] = useState({
    subject: "",
    topic: "",
    paragraph: "",
    comment: "",
    deadline: "",
    orderFile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setError({
        ...error,
        [name]: `Please enter ${name
          .split(/(?=[A-Z])/)
          .map((data) => data.toLowerCase())
          .join(" ")}`,
      });
    } else {
      setError({ ...error, [name]: "" });
    }
    if (name === "orderFile") {
      const maxSizeInBytes = 10 * 1024 * 1024;

      const file = e.target.files[0];
      console.log({ file: file.size, maxSizeInBytes });
      if (file.size > maxSizeInBytes) {
        setError({ ...error, [name]: "File is too large. Max size is 10MB" });
        return;
      } else {
        setError({ ...error, [name]: "" });
        setFormValues({ ...formValues, [name]: file });
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  function scrollToSection() {
    setTimeout(() => {
      const section = document.getElementById("Testimonials"); // Replace 'sectionId' with the ID of the section you want to scroll to

      section.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }

  function updatePrice() {
    var subject = subjectOptions.find(
      (item) => item.name === formValues.subject
    )?.value;
    var deadline = deadlineOptions.find(
      (item) => item.name === formValues.deadline
    )?.value;
    var price = 0;

    if (deadline === "136502") {
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 14;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 15;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = 21;
      } else if (subject === "123" || subject === "132") {
        price = 16;
      }
    } else if (deadline === "136501") {
      // 7 days
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 16;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 17;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = 24;
      } else if (subject === "123" || subject === "132") {
        price = 18;
      }
    } else if (deadline === "136500") {
      // 3 days
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 20;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 21;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = 30;
      } else if (subject === "123" || subject === "132") {
        price = 22;
      }
    } else if (deadline === "136499") {
      // 1 day
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 25;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 26;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = "N/A";
      } else if (subject === "123" || subject === "132") {
        price = 27;
      }
    }

    price *= count;
    setPrice(floorToTwo(price * count));
  }
  function floorToTwo(num) {
    return Math.floor(num * 100) / 100;
  }

  const getUpdatedPrice = async (e) => {
    try {
      const response = await axiosInstance.post(
        "price",
        {
          subject: formValues.subject,
          days: formValues.deadline.split(" ")[0],
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const { price } = response.data;
      setPrice(floorToTwo(price * count));
    } catch (err) {
      console.log({ err });
    }
  };
  useEffect(() => {
    if (formValues.subject && count) {
      getUpdatedPrice();
    }
  }, [formValues.subject, formValues.deadline, count]);

  // useEffect(()=>{
  //   setPrice((prev)=>prev*count);
  // },[count])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      count,
      ...formValues,
      amount: price,
    };
    if (localStorage.getItem("token") === null) {
      sessionStorage.setItem("orderData", JSON.stringify(data));
      // reader.readAsDataURL(file);
      sessionStorage.setItem("redirectURL", JSON.stringify("/"));
      router.push("/login");
      return;
    }

    handleMakeOrder(data);
  };

  const handlePaymentStatus = async (orderId, status) => {
    try {
      let formData = new FormData();
      formData.append("status", status);
      const editOrder = await axiosInstance.put(
        `order/${orderId}`,
        formData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log({ editOrder });
    } catch (err) {
      console.log(err);
    }
  };
  const handleMakeOrder = async (data) => {
    try {
      setLoading(true);
      const error = {};
      if (localStorage.getItem("token") === null) {
        alert("Please login to continue");
        setLoading(false);
        return;
      }
      if (!formValues.topic) error.topic = "Please enter topic";
      if (!formValues.orderFile) error.orderFile = "Select  enter File";
      if (!formValues.comment) error.comment = "Please enter comment";
      if (!formValues.deadline) error.deadline = "Please enter deadline";
      if (!formValues.subject) error.subject = "Please enter subject";
      setError(error);
      console.log(error);
      if (Object.keys(error).length > 0) {
        setLoading(false);
        return;
      }

      let formData = new FormData();
      formData.append("subject", formValues.subject);
      formData.append("topic", formValues.topic);
      // formData.append("paragraph", formValues.paragraph);
      formData.append("comment", formValues.comment);
      let parts = data.deadline.split(" "); // Split the string by spaces
      let number = parseInt(parts[0]);
      formData.append("deadline", number);
      formData.append("pages", count);
      formData.append("amount", price);
      formData.append("orderFile", file);

      const response = await axiosInstance.post(
        "order",
        formData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { amount, paymentOrderId, currency } =
        response.data.data.paymentOrder;
      const { orderId } = response.data.data;
      var options = {
        key: "rzp_live_Akona2kaTAt7MG", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: currency,
        name: "Facio Contently Writers Private Limited", //your business name
        description: "Test Transaction",
        // "image": "https://example.com/your_logo",
        order_id: paymentOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          await handlePaymentStatus(orderId, "InProgress");

          toast.success("Order create Successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: user.firstName + user.lastName, //your customer's name
          email: user.email,
          contact: "", //Provide the customer's phone number for better conversion rates
        },
        theme: {
          color: "#3399cc",
        },
      };

      var rzp1 = await new Razorpay(options);
      rzp1.on("payment.failed", async function (response) {

        await handlePaymentStatus(orderId, "Cancelled");
        
        toast.error("Payment failed!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

      // document.getElementById("rzp-button1").onclick = async function (e) {
      //   e.preventDefault();
      //   await rzp1.open();
      //   console.log('306-------')
      // };

      rzp1.open();

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      const orderData = JSON.parse(sessionStorage.getItem("orderData"));

      if (orderData) {
        setTimeout(() => {
          setFormValues({
            comment: orderData.comment,
            deadline: orderData.deadline,
            orderFile: "",
            pages: orderData.pages,
            subject: orderData.subject,
            temp: orderData.temp,
            topic: orderData.topic,
          });
          setFile(null);
          setSelectedFileName("");

          setCount(orderData.count);

          setPrice(floorToTwo(orderData.amount));
          getUpdatedPrice();
        }, 0);
        // Optionally, uncomment these if needed
      } else {
        console.log("orderData or redirectURL is missing.");
      }
    } catch (error) {
      console.error("Error parsing JSON from sessionStorage", error);
    }
  }, []);

  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0].name);
      console.log({ selectedFileName: event.target.files[0] });
      setFile(event.target.files[0]);
    } else {
      setSelectedFileName("");
    }
    handleChange(event); // Call the passed-in handleChange function
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/contentlywriters/", "_blank"); // Replace with your Instagram URL
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/company/facio-contently-writers/",
      "_blank"
    ); // Replace with your LinkedIn URL
  };

  // const strings = [
  //   "Best Content Writing Services in UK & USA",
  //   "Contently Writers Devised with Merit",
  //   "Assignments done in few clicks",
  // ];

  // const SlideInText = () => {
  //   const [currentStringIndex, setCurrentStringIndex] = useState(0);
  //   const [isVisible, setIsVisible] = useState(true);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // Trigger slide-out animation
  //       setIsVisible(false);

  //       setTimeout(() => {
  //         // After the slide-out, update to the next string and trigger slide-in
  //         setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
  //         setIsVisible(true);
  //       }, 500);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   return (
  //     <span className={`block ${isVisible ? 'slide-in' : 'slide-out'}`}>
  //       {strings[currentStringIndex]}
  //     </span>
  //   );
  // };

  return (
    <div className="px-4 sm:px-4 md:px-6 lg:px-[50px] bg-gradient-to-b from-white to-[#f7f7f7] pb-10">
      <div className="max-w-[1280px] mx-auto flex lg:flex-row flex-col gap-10 sm:gap-10">
        <div className="w-full grid mt-10 sm:mt-24 sm:pr-10">
          <h2 className="md:text-8xl sm:text-7xl text-4xl sm:min-h-[300px] min-h-[200px] sm:leading-[100px] leading-tight text-left font-semibold text-[#1a1a1a] tracking-tight">
            {/* Slide in text with subtle fade animation */}
            {isClient && (
              <span className="block animate-fade-in ">
                Best Content Writing Services in UK & USA
              </span>
            )}
          </h2>

          {/* New Boxes Section */}
          <div className="flex flex-wrap justify-center gap-4  mb-8">
            <div className="bg-[#5b6cf2] hover:bg-white hover:text-black text-white p-4 w-[250px] h-[50px] rounded-lg shadow-md text-center flex flex-col justify-center items-center hidden lg:flex lg:w-[250px] lg:h-[50px] sm:w-[200px] sm:h-[40px]">
              <p className="text-lg">
                <span className="font-semibold">Assignment</span>
                <span className="text-sm font-normal"> helper</span>
              </p>
            </div>

            <div className="bg-[#5b6cf2] hover:bg-white hover:text-black text-white p-4 w-[250px] h-[50px] rounded-lg shadow-md text-center flex flex-col justify-center items-center hidden lg:flex lg:w-[250px] lg:h-[50px] sm:w-[200px] sm:h-[40px]">
              <p className="text-lg">
                <span className="font-semibold">Affordable</span>
                <span className="text-sm font-normal"> Pricing</span>
              </p>
            </div>

            <div className="bg-[#5b6cf2] hover:bg-white hover:text-black text-white p-4 w-[250px] h-[50px] rounded-lg shadow-md text-center flex flex-col justify-center items-center hidden lg:flex lg:w-[250px] lg:h-[50px] sm:w-[200px] sm:h-[40px]">
              <p className="text-lg">
                <span className="font-semibold">Timely</span>
                <span className="text-sm font-normal"> delivery</span>
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            {/* Testimonials Icon */}
            <Button
              type="button"
              variant="icon"
              onClick={scrollToSection}
              className="flex items-center space-x-1 sm:space-x-4 group"
            >
              <div className="rounded-full bg-black hover:bg-[#333333] text-white sm:p-4 p-3 flex items-center justify-center">
                <FaStar className="text-2xl sm:text-4xl" />{" "}
                {/* Adjust icon size */}
              </div>
              <span className="hidden lg:block text-base lg:text-lg relative overflow-hidden">
                Testimonials
                {/* Underline span */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#000] transition-all duration-500 ease-in-out group-hover:w-full"></span>{" "}
                {/* Left to right animation */}
              </span>
            </Button>

            {/* Instagram Icon */}
            <Button
              type="button"
              variant="icon"
              onClick={openInstagram}
              className="flex items-center space-x-1 sm:space-x-4 group"
            >
              <div className="rounded-full sm:p-4 p-3 flex items-center bg-black hover:bg-[#333333] text-white justify-center">
                <FaInstagram className="text-2xl sm:text-4xl text-white" />{" "}
                {/* Adjust icon size */}
              </div>
              <span className="hidden lg:block text-base lg:text-lg relative overflow-hidden">
                Instagram
                {/* Underline span */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#000] transition-all duration-500 ease-in-out group-hover:w-full"></span>{" "}
                {/* Left to right animation */}
              </span>
            </Button>

            {/* LinkedIn Icon */}
            <Button
              type="button"
              variant="icon"
              onClick={openLinkedIn}
              className="flex items-center space-x-1 sm:space-x-4 group"
            >
              <div className="rounded-full bg-black hover:bg-[#333333] text-white sm:p-4 p-3 flex items-center justify-center">
                <FaLinkedin className="text-2xl sm:text-4xl" />{" "}
                {/* Adjust icon size */}
              </div>
              <span className="hidden lg:block text-base lg:text-lg relative overflow-hidden">
                LinkedIn
                {/* Underline span */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#000] transition-all duration-500 ease-in-out group-hover:w-full"></span>{" "}
                {/* Left to right animation */}
              </span>
            </Button>
          </div>
        </div>

        <div className="z-30   lg:w-[550px] bg-[#5b6cf2] sm:p-10 lg:p-4 p-1 lg:mx-1 sm:mx-20 mx-4 mt-1 sm:mt-10 rounded-lg  ">
          <form className="w-full bg-white p-6 grid gap-3 rounded-md ">
            <h3 className="text-2xl font-semibold">Place new order</h3>
            <SelectTab
              title="Subject"
              name="subject"
              data={subjectOptions}
              value={formValues.subject}
              handleChange={handleChange}
            />
            <InputError message={error.subject} />
            <Input
              className="w-full"
              name="topic"
              value={formValues.topic}
              onChange={handleChange}
              placeholder="Topic"
            />
            <InputError message={error.topic} />

            <SelectTab
              title="Subject"
              name="temp"
              data={[
                { value: "Passage", name: "Passage" },
                { value: "Brief Points", name: "Brief Points" },
              ]}
              value={formValues.temp}
              handleChange={handleChange}
            />
            <InputError message={error.temp} />
            {/* <SelectTab
              title="Highlight"
              name="highlight"
              data={[
                { value: "Highlight", name: "Highlight" },
                { value: "Writer Choice", name: "Writer Choice" },
              ]}
              value={formValues.highlight}
              handleChange={handleChange}
            /> */}
            <div className="relative w-auto">
              <label
                htmlFor="orderFile"
                className="cursor-pointer inline-block"
              >
                <button className="px-4 h-10 py-2 bg-[#000] hover:bg-[#fff] text-white font-medium text-sm rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                  Choose file
                </button>
              </label>
              <Input
                type="file"
                id="orderFile"
                name="orderFile"
                className="absolute inset-0 opacity-0 w-full cursor-pointer"
                accept=".pdf, .docx, .png, .jpeg, .jpg, .txt"
                onChange={handleFileChange}
              />
              {selectedFileName && (
                <div className="mt-2 text-sm text-gray-600">
                  {selectedFileName}
                </div>
              )}
              {error.orderFile && <InputError message={error.orderFile} />}
            </div>

            <Textarea
              value={formValues.comment}
              onChange={handleChange}
              placeholder="Enter your comment here..."
              name="comment"
              id="comment"
            />
            <InputError message={error.comment} />
            <div className="grid gap-1.5">
              <Label className="font-normal ">Deadline</Label>
              <SelectTab
                title="Deadline"
                name="deadline"
                data={deadlineOptions}
                value={formValues.deadline}
                handleChange={handleChange}
              />
              <InputError message={error.deadline} />
            </div>
            <div className="flex justify-between items-center">
              {/* Words on the left */}
              <span className="text-md -mb-3">{250 * count} words</span>
              {/* Pages on the right */}
              <span className="text-md -mb-3">Pages</span>
            </div>

            <div className="flex justify-center items-center ">
              <Button
                size="icon"
                className="rounded-none text-xl font-normal w-16 h-12 bg-black text-white"
                type="button"
                disabled={count === 1}
                onClick={() => setCount(count - 1)}
              >
                <FiMinus />
              </Button>
              <h4 className="tex-2xl font-medium h-12 w-full border-2 border-black text-center leading-10">
                {count}
              </h4>
              <Button
                size="icon"
                className="rounded-none text-xl font-normal w-16 h-12 bg-black text-white"
                type="button"
                onClick={() => setCount(count + 1)}
              >
                <IoMdAdd />
              </Button>
            </div>

            <div className="text-center text-2xl">
              Estimated Price: {price}$
            </div>
            <Button
              type="button"
              className="w-full h-12  bg-[#000] "
              onClick={handleSubmit}
              disabled={loading}
              id="rzp-button1"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
              ) : (
                "Write my assignment"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

const SelectTab = ({ title, name, value, data, handleChange }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Select
        id={name}
        name=""
        value={value}
        onValueChange={(value) => handleChange({ target: { name, value } })}
      >
        <SelectTrigger className="h-9">
          <SelectValue placeholder={`Select ${title.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="max-h-[250px]">
            {data.map((value) => {
              return (
                <SelectItem key={value.name} value={value.name}>
                  {value.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

const subjectOptions = [
  { name: "Accounting", value: "132" },
  { name: "Dissertation", value: "131" },
  { name: "Engineering Department", value: "127" },
  { name: "Essay Writing", value: "122" },
  { name: "Finance Department", value: "125" },
  { name: "General Subject", value: "133" },
  { name: "IT Department", value: "123" },
  { name: "Law Department", value: "130" },
  { name: "Management Department", value: "124" },
  { name: "Power Point Presentation", value: "129" },
  { name: "Statistics Department", value: "126" },
  { name: "Thesis", value: "128" },
];

const deadlineOptions = [
  // { name: "1 day", value: "136499" },
  { name: "3 days", value: "136500" },
  { name: "7 days", value: "136501" },
  { name: "14 days", value: "136502" },
];
