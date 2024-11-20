"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputError from "@/components/ui/input-error";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { axiosInstance } from "@/lib/axios";
export default function AdminOrderDetailScreen({
  isOpen,
  onClose,
  orderDetail,
}) {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    orderFile: "",
  });
  const [formValues, setFormValues] = useState({
    orderFile: "",
  });
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
  const handleChange = (e) => {
    const { name, value } = e.target;
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
    }
  };

  const handleUpdateOrder = async (data) => {
    try {
      setLoading(true);
      const error = {};
      if (localStorage.getItem("token") === null) {
        alert("Please login to continue");
        setLoading(false);
        return;
      }
      if (!formValues.orderFile) error.orderFile = "Select  enter File";

      setError(error);
      if (Object.keys(error).length > 0) {
        setLoading(false);
        return;
      }

      let formData = new FormData();
      formData.append("orderResponseFile", file);
      formData.append("status", "Completed");
      const response = await axiosInstance.put(
        `order/${orderDetail.orderId}`,
        formData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

     
      

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[800px] h-[90%] overflow-auto">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col space-y-4">
            <div>
              <strong>Order ID:</strong> {orderDetail.orderId}
            </div>
            <div>
              <strong>Email:</strong> {orderDetail.email}
            </div>
            <div>
              <strong>Subject:</strong> {orderDetail.subject}
            </div>
            <div>
              <strong>Topic:</strong> {orderDetail.topic}
            </div>
            <div>
              <strong>Comment:</strong> {orderDetail.comment}
            </div>
            <div>
              <strong>Deadline:</strong> {orderDetail.deadline} days
            </div>
            <div>
              <strong>Pages:</strong> {orderDetail.pages}
            </div>
            <div>
              <strong>Amount:</strong> ${orderDetail.amount}
            </div>
            <div>
              <strong>Status:</strong> {orderDetail.status}
            </div>
            <div>
              <strong>Rating:</strong> {orderDetail.rating}
            </div>
            <div>
              <strong>Review:</strong> {orderDetail.review}
            </div>
            <div>
              <strong>Order Placed Timestamp:</strong>{" "}
              {orderDetail.orderPlacedTimestamp}
            </div>
            <div>
              <strong>Order File Link:</strong>{" "}
              <a
                href={orderDetail.orderFileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
            <div>
              <strong>Response File Link:</strong>{" "}
              <a
                href={orderDetail.orderResponseFileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
            {orderDetail.paymentOrder && (
              <>
                <div>
                  <strong>Payment Status:</strong>{" "}
                  {orderDetail.paymentOrder.status}
                </div>
                {/* <div>
                  <strong>Payment Amount:</strong>{" "}
                  {orderDetail.paymentOrder.amount}{" "}
                  {orderDetail.paymentOrder.currency}
                </div>
                <div>
                  <strong>Amount Paid:</strong>{" "}
                  {orderDetail.paymentOrder.amountPaid}
                </div>
                <div>
                  <strong>Amount Due:</strong>{" "}
                  {orderDetail.paymentOrder.amountDue}
                </div> */}
                <div>
                  <strong>Order Receipt:</strong>{" "}
                  {orderDetail.paymentOrder.orderReceipt}
                </div>
                <div className="flex justify-between ">
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
                    {error.orderFile && (
                      <InputError message={error.orderFile} />
                    )}
                  </div>

                  <Button
                    type="button"
                    className=" bg-[#000] "
                    onClick={handleUpdateOrder}
                    disabled={loading}
                    id="rzp-button1"
                  >
                    {loading ? (
                      <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
                    ) : (
                      "Upload File"
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
