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
import { AiOutlineLoading3Quarters, AiOutlineCloudUpload } from "react-icons/ai"; // Added upload icon
import { FiDownload } from "react-icons/fi"; // Added download icon
import { toast } from "react-toastify"; // Toast for success/failure messages
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

      if (file.size > maxSizeInBytes) {
        setError({ ...error, [name]: "File is too large. Max size is 10MB" });
        return;
      } else {
        setError({ ...error, [name]: "" });
        setFormValues({ ...formValues, [name]: file });
      }
    }
  };

  const handleUpdateOrder = async () => {
    try {
      setLoading(true);
      const error = {};
      if (localStorage.getItem("token") === null) {
        alert("Please login to continue");
        setLoading(false);
        return;
      }
      if (!formValues.orderFile) error.orderFile = "Please select a file.";

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

      // On success
      toast.success("File uploaded successfully!");
      setLoading(false);
      onClose(); // Close dialog on success
    } catch (err) {
      toast.error("Error uploading the file. Please try again.");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[800px] h-[90%] overflow-auto bg-[#121212] text-white">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col space-y-4">
            <div><strong>Order ID:</strong> {orderDetail.orderId}</div>
            <div><strong>Email:</strong> {orderDetail.email}</div>
            <div><strong>Subject:</strong> {orderDetail.subject}</div>
            <div><strong>Topic:</strong> {orderDetail.topic}</div>
            <div><strong>Comment:</strong> {orderDetail.comment}</div>
            <div><strong>Deadline:</strong> {orderDetail.deadline} days</div>
            <div><strong>Pages:</strong> {orderDetail.pages}</div>
            <div><strong>Amount:</strong> ${orderDetail.amount}</div>
            <div><strong>Status:</strong> {orderDetail.status}</div>
            <div><strong>Rating:</strong> {orderDetail.rating}</div>
            <div><strong>Review:</strong> {orderDetail.review}</div>
            <div><strong>Order Placed Timestamp:</strong> {orderDetail.orderPlacedTimestamp}</div>
            <div><strong>Order File Link:</strong> 
              {orderDetail.orderResponseFileLink ? (
                <a href={orderDetail.orderResponseFileLink} target="_blank" rel="noopener noreferrer">
                  <FiDownload className="inline-block text-xl" /> Download
                </a>
              ) : (
                "File not uploaded yet."
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="orderFile" className="cursor-pointer inline-block">
                <Button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-md">
                  <AiOutlineCloudUpload className="mr-2" /> Choose File
                </Button>
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
                <div className="mt-2 text-sm text-gray-400">{selectedFileName}</div>
              )}
              {error.orderFile && <InputError message={error.orderFile} />}
            </div>

            <Button
              type="button"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleUpdateOrder}
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
              ) : (
                "Upload File"
              )}
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
