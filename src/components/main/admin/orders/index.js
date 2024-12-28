"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableCaption,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { axiosInstance } from "@/lib/axios";
import AdminOrderDetailScreen from "./orderDetails";
import logo from "@/assets/image/contently-logo.png";
import Image from "next/image";
import { useUserContext } from "@/context/auth";

// Function to fetch orders
async function fetchOrders(status = "") {
  try {
    const response = await axiosInstance.get("order/getAll", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
      params: { status },
    });
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export default function AdminOrderScreen() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filter, setFilter] = useState("InProgress");
  const { user, isAuthenticated, loading } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    // if (!loading) {
      if (!loading && !isAuthenticated) {
        router.push("/login");
      }
      console.log("user role is " + user);
  }, [isAuthenticated, loading, router, user]);

  

  // Fetch orders on filter change
  useEffect(() => {
    const getOrders = async () => {
      const data = await fetchOrders(filter);
      setOrders(data);
    };
    getOrders();
  }, [filter]);

  const handleFilterChange = (status) => setFilter(status);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };


  // Show loading indicator during auth check
  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  // Prevent rendering if not authenticated
  if (!isAuthenticated) {
    return null;
  }


  return (
    <div className="min-h-screen bg-[#ffffff] py-10 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 mb-8">
        <Image src={logo} alt="Website Logo" className="h-[80px] w-[180px]" />
        <Link href="/">
        <Button className="bg-[#fff] text-black border-[1px] hover:bg-[#f7f7f7] border-gray-700">
  Home
</Button>

        </Link>
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col items-center space-y-6">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4">
          {["InProgress", "Completed", "Cancelled"].map((status) => (
            <Button
              key={status}
              onClick={() => handleFilterChange(status)}
              className={`px-4 py-2 text-md rounded-md shadow-md transition-all duration-300 ${
                filter === status
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="w-full max-w-6xl bg-[#ffffff] rounded-lg shadow-lg border border-gray-700">
          <div className="p-6">
            <Table>
              {/* Table Caption */}
              <TableCaption className="text-gray-700 font-medium mb-4">
                A list of your recent invoices.
              </TableCaption>

              {/* Table Header */}
              <TableHeader>
                <TableRow className="text-black">
                  <TableHead className="w-[100px] px-4 py-3 uppercase font-semibold">
                    Invoice
                  </TableHead>
                  <TableHead className="px-4 py-3 uppercase font-semibold">
                    Status
                  </TableHead>
                  <TableHead className="px-4 py-3 uppercase font-semibold">
                    Email
                  </TableHead>
                  <TableHead className="px-4 py-3 uppercase font-semibold text-right">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-[#f5f5f5] transition-all duration-300 cursor-pointer"
                    onClick={() => handleRowClick(order)}
                  >
                    <TableCell className="px-4 py-3 text-black">
                      {order.orderId}
                    </TableCell>
                    <TableCell className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          order.status === "Completed"
                            ? "bg-green-600 text-green-100"
                            : order.status === "Cancelled"
                            ? "bg-red-600 text-red-100"
                            : "bg-yellow-600 text-yellow-100"
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-black">
                      {order.email}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-right text-black">
                      {order.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Order Details Dialog */}
      {isDialogOpen && (
        <AdminOrderDetailScreen
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          orderDetail={selectedOrder}
        />
      )}
    </div>
  );
}
