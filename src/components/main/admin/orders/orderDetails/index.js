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
import { AiOutlineCloudUpload, AiOutlineFileText } from "react-icons/ai";
import { FiDownload, FiCheckCircle } from "react-icons/fi";
import axios from "axios";
import { axiosInstance } from "@/lib/axios";

export default function AdminOrderDetailScreen({
  isOpen,
  onClose,
  orderDetail,
}) {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    orderFile: "",
  });
  const [formValues, setFormValues] = useState({
    orderFile: "",
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(Array.from(event.target.files));
      const fileNames = Array.from(event.target.files)
      .map((file) => file.name)
      .join(', ');
      console.log("fileNames " + fileNames)
      setSelectedFileName(fileNames);
    } else {
      setSelectedFileName("");
    }
    handleChange(event);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "orderFile") {
      const maxSizeInBytes = 10 * 1024 * 1024;  // 10MB
      const files = Array.from(e.target.files);  // Convert to array
      console.log("Number of files selected: " + files.length);
    
      // Check for max 4 files
      if (files.length > 5) {
        setError({ ...error, [name]: "You can select up to 5 files only." });
        return;
      }
    
      // Check for file size limit
      const oversizedFile = files.find(file => file.size > maxSizeInBytes);
      if (oversizedFile) {
        setError({ ...error, [name]: "One or more files exceed the 10MB size limit." });
        return;
      }
    
      // Clear errors if all checks pass
      setError({ ...error, [name]: "" });
      
      // Store files in form state
      setFormValues({ ...formValues, [name]: files });
    } else {
      setFormValues({ ...formValues, [name]: value });
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
      if (!formValues.orderFile) error.orderFile = "Select a file to upload";
      setError(error);
      if (Object.keys(error).length > 0) {
        setLoading(false);
        return;
      }

      let formData = new FormData();
      file.forEach(file1 => {
        formData.append("orderResponseFiles", file1);
      });
      formData.append("orderResponseFiles", file);
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
      setUploadSuccess(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[800px] h-[90%] overflow-auto bg-white rounded-lg shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Order Details</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-4">
          <div className="text-gray-700">
            <strong>Order ID:</strong> {orderDetail.orderId}
          </div>
          <div className="text-gray-700">
            <strong>Email:</strong> {orderDetail.email}
          </div>
          <div className="text-gray-700">
            <strong>Subject:</strong> {orderDetail.subject}
          </div>
          <div className="text-gray-700">
            <strong>Topic:</strong> {orderDetail.topic}
          </div>
          <div className="text-gray-700">
            <strong>Comment:</strong> {orderDetail.comment}
          </div>
          <div className="text-gray-700">
            <strong>Deadline:</strong> {orderDetail.deadline} days
          </div>
          <div className="text-gray-700">
            <strong>Pages:</strong> {orderDetail.pages}
          </div>
          <div className="text-gray-700">
            <strong>Amount:</strong> ${orderDetail.amount}
          </div>
          <div className="text-gray-700">
            <strong>Status:</strong> {orderDetail.status}
          </div>
          <div className="text-gray-700">
            <strong>Rating:</strong> {orderDetail.rating}
          </div>
          <div className="text-gray-700">
            <strong>Review:</strong> {orderDetail.review}
          </div>
          <div className="text-gray-700">
            <strong>Order Placed Timestamp:</strong>{" "}
            {orderDetail.orderPlacedTimestamp}
          </div>
          <div className="text-gray-700">
            <strong>Order File Links:</strong>
            {orderDetail.orderFilesLink && orderDetail.orderFilesLink.length > 0 ? (
              orderDetail.orderFilesLink.map((fileLink, index) => (
                <div key={index} className="my-2">
                  <a
                    href={fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center space-x-2"
                  >
                    <FiDownload className="text-lg" />
                    <span>Download File {index + 1}</span>
                  </a>
                </div>
              ))
            ) : (
              <span>No files available</span>
            )}
          </div>
          {orderDetail.paymentOrder && (
            <>
              <div className="text-gray-700">
                <strong>Payment Status:</strong> {orderDetail.paymentOrder.status}
              </div>
              <div className="text-gray-700">
                <strong>Order Receipt:</strong>{" "}
                {orderDetail.paymentOrder.orderReceipt}
              </div>
              <div className="text-gray-700">
                <strong>Response File Link:</strong>{" "}
                {orderDetail.orderResponseFileLink ? (
                  <a
                    href={orderDetail.orderResponseFileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center space-x-2"
                  >
                    <FiDownload className="text-lg" />
                    <span>Download Response</span>
                  </a>
                ) : (
                  "File not Uploaded"
                )}
              </div>
            </>
          )}

          <div className="flex justify-between items-center">
            <div className="relative w-auto">
              <label
                htmlFor="orderFile"
                className="cursor-pointer inline-block"
              >
                <Button
                  type="button"
                  className="px-4 h-10 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-lg shadow-md flex items-center space-x-2"
                >
                  <AiOutlineCloudUpload className="text-xl" />
                  <span>Choose File</span>
                </Button>
              </label>
              <Input
                type="file"
                id="orderFile"
                name="orderFile"
                className="absolute inset-0 opacity-0 w-full cursor-pointer"
                accept=".pdf, .docx, .png, .jpeg, .jpg, .txt"
                multiple
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
              className="bg-green-500 hover:bg-green-600 text-white font-medium text-sm rounded-lg px-6 py-3 flex items-center space-x-2"
              onClick={handleUpdateOrder}
              disabled={loading}
            >
              {loading ? (
                <AiOutlineCloudUpload className="h-4 w-4 animate-spin" />
              ) : (
                <span>Upload File</span>
              )}
            </Button>
          </div>

          {uploadSuccess && (
            <div className="mt-4 flex items-center text-green-600">
              <FiCheckCircle className="mr-2" />
              File uploaded successfully!
            </div>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
