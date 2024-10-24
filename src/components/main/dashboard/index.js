"use client";
import React, { useEffect, useState } from "react";
import img from "@/assets/image/No data-cuate.svg";
import Link from "next/link";
import Image from "next/image";
import PendingOrder from "./pending-order";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import axios from "axios";
export default function DashBoard() {
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState("Pending");
  const getOrders = async () => {
    try {
      const response = await axios.get(
        `https://contentlywriters.com:8088/order/getAll?status=${"Pending"}`,
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
  }, [currentTab]);
  return (
    <>
      <div className="px-5 py-5 min-h-screen pt-28">
        <Tabs defaultValue="recent">
          <TabsList className="bg-transparent ">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="finished">Finished</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <PendingOrder orders={orders} />
          </TabsContent>
          <TabsContent value="finished">
            <div className="flex flex-col justify-center items-center gap-2 py-4 mt-24">
              <Image
                src={img}
                alt="loading"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p className="text-center text-lg">
                No orders have been completed yet
              </p>
              <Link href={"/"} className="flex justify-center items-center">
                <Button className="bg-[#5b6cf2] hover:bg-gray-800 px-6 py-2 text-white">
                  New Order
                </Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="cancelled">
            <div className="flex flex-col justify-center items-center gap-2 py-4 mt-24">
              <Image
                src={img}
                alt="loading"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p className="text-center text-lg">
                No orders have been cancelled yet
              </p>
              <Link href={"/"} className="flex justify-center items-center">
                <Button className="bg-[#5b6cf2] hover:bg-gray-800 px-6 py-2 text-white">
                  New Order
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
