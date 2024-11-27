"use client";
import React, { useEffect, useState } from "react";
import img from "@/assets/image/No data-cuate.svg";
import Link from "next/link";
import Image from "next/image";
import PendingOrder from "./pending-order";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { axiosInstance } from "@/lib/axios";

export default function DashBoard() {
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState("InProgress"); // Track the current tab manually

  const getOrders = async () => {
    try {
      const response = await axiosInstance.get(
        `order/getAll?status=${currentTab}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log({ response });
      if (response.data.data) {
        setOrders(response.data.data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [currentTab]); // Trigger API call when the tab changes

  return (
    <>
      <div className="px-5 py-5 min-h-screen pt-28">
        {/* Make Tabs a controlled component by syncing currentTab with the Tabs value */}
        <Tabs value={currentTab} onValueChange={setCurrentTab}> 
          <TabsList className="bg-transparent">
            <TabsTrigger value="InProgress">Pending</TabsTrigger>
            <TabsTrigger value="Completed">Finished</TabsTrigger>
          </TabsList>

          <TabsContent value="InProgress">
            <PendingOrder orders={orders} currentTab={currentTab} />
          </TabsContent>

          <TabsContent value="Completed">
            <PendingOrder orders={orders} currentTab={currentTab} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
