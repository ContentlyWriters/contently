import React, { useState } from "react";
import img from "@/assets/image/No data-cuate.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format, set } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputError from "@/components/ui/input-error";
import { axiosInstance } from "@/lib/axios";
export default function PendingOrder({ orders }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [formaValue, setFormValue] = useState({
    rating: "",
    review: "",
  });
  const [error, setError] = useState({
    rating: "",
    review: "",
  });
  const handleChange = (name, value) => {
    if (name === "rating") {
      if (value < 1 || value > 5 || isNaN(value)) {
        setError({
          ...error,
          rating: "Rating should be between 1 to 5",
        });
      } else {
        setError({
          ...error,
          rating: "",
        });
      }
    }
    setFormValue({
      ...formaValue,
      [name]: value,
    });
  };

  const handleSendFeedback = async () => {
    try {
      if (
        formaValue.rating < 1 ||
        formaValue.rating > 5 ||
        isNaN(formaValue.rating)
      ) {
        setError({
          ...error,
          rating: "Rating should be between 1 to 5",
        });
        return;
      }
      if (!formaValue.review) {
        setError({
          ...error,
          review: "Review is required",
        });
        return;
      }
      let formData = new FormData();
      formData.append("rating", formaValue.rating);
      formData.append("review", formaValue.review);
      const editOrder = await axiosInstance.put(
        `order/${selectedOrder}`,
        formData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log({ editOrder });
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      {orders.length == 0 && (
        <div className="flex flex-col justify-center items-center gap-2 py-4 mt-24">
          <Image
            src={img}
            alt="loading"
            width={300}
            height={300}
            className="mx-auto"
          />
          <p className="text-center text-lg">No orders have been placed yet</p>
          <Link href={"/"} className="flex justify-center items-center">
            <Button className="bg-[#5b6cf2] hover:bg-gray-800 px-6 py-2 text-white">
              New Order
            </Button>
          </Link>
        </div>
      )}
      {orders.length !== 0 && (
        <Table className="m-2">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="text-center">Topic</TableHead>
              <TableHead className="text-center">Comment</TableHead>
              <TableHead className="text-center">Deadline</TableHead>
              <TableHead className="text-center">Pages</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Order Date</TableHead>
              <TableHead className="text-center">Order File</TableHead>
              <TableHead className="text-center">Result File Link</TableHead>
              <TableHead className="text-center">Give Feedback</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={index}
                className="hover:bg-green-200"
                // onClick={() => handleIconClick(order)}
              >
                <TableCell className="font-medium">{order.orderId}</TableCell>
                <TableCell>{order.subject}</TableCell>
                <TableCell className="text-center">{order.topic}</TableCell>
                <TableCell className="text-center">{order.comment}</TableCell>
                <TableCell className="text-center">{order.deadline}</TableCell>
                <TableCell className="text-center">{order.pages}</TableCell>
                <TableCell className="text-center">{order.amount}</TableCell>
                <TableCell className="text-center">
                  {format(order.orderPlacedTimestamp, "dd-MM-yyyy")}
                </TableCell>
                <TableCell className="text-center">
                  <Link
                    href={order.orderFileLink || "#"}
                    target="_black"
                    className="hover:underline"
                  >
                    File
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  {order.orderResponseFileLink ? (
                    <Link
                      href={order.orderResponseFileLink || "#"}
                      target="_black"
                      className="hover:underline"
                    >
                      Result File
                    </Link>
                  ) : (
                    <></>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {order.orderResponseFileLink ? (
                    <Button
                      variant="link"
                      onClick={() => {
                        setIsOpen(true);
                        setSelectedOrder(order.orderId);
                      }}
                    >
                      Review
                    </Button>
                  ) : (
                    <></>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <DialogDemo
        isOpen={isOpen}
        formaValue={formaValue}
        error={error}
        handleChange={handleChange}
        handleSendFeedback={handleSendFeedback}
      />
    </div>
  );
}

function DialogDemo({
  isOpen,
  formaValue,
  error,
  handleChange,
  handleSendFeedback,
}) {
  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger isOpen={isOpen} asChild>
        <Button variant="link">Review</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Please Give Review</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <Label htmlFor="name" className="">
              Review
            </Label>
            <Input
              id="name"
              value={formaValue.review}
              onChange={(e) => handleChange("review", e.target.value)}
              className="col-span-3"
            />
            <InputError message={error.name} />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="rating" className="">
              Rating (1-5)
            </Label>
            <Input
              id="rating"
              value={formaValue.rating}
              onChange={(e) => handleChange("rating", e.target.value)}
              className="col-span-3"
            />
            <InputError message={error.rating} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSendFeedback}>Send Feedback</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
