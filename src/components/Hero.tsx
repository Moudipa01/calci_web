"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "./ui/button";
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaThLarge, FaCalendarAlt } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import axios from 'axios';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Card, CardContent } from "@/components/ui/card"
import { Linechart } from './lineChart';
import { Barchart } from './barChart';
import { Piechart } from './pieChart';

const stateArr = ["Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
const catArr = ["E-2 Wheelers", "E-3 Wheelers", "E-Bus", "E-4 Wheelers (Personal)", "E-4 Wheelers (Commercial)", "LDV/MDV/HDV", "E-Rickshaw"];
const yearArr = ["FY 2024-23","FY 2023-22","FY 2022-21","FY 2021-20","FY 2020-19","FY 2018-17","FY 2017-16","FY 2016-15"];

export const Hero = () => {
  const [selectedState, setSelectedState] = useState<string>(stateArr[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>(catArr[0]);
  const [selectedYear, setSelectedYear] = useState<string>(yearArr[0]);
  const [currentData, setCurrentData] = useState<{ currentFY: string; previousMonth: string; evVolumes: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data with:', { selectedState, selectedCategory, selectedYear });
        const response = await axios.get('http://localhost:3001/api/data', {
          params: {
            state: selectedState,
            category: selectedCategory,
            year: selectedYear,
          },
        });
        console.log('Received data:', response.data); 
        setCurrentData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedState, selectedCategory, selectedYear]);

  return (
    <section className="container grid place-items-center py-20 md:py-32 gap-10">
      <div className="shadow"></div>
      <div className="text-center space-y-6">
        <main className="text-3xl md:text-5xl font-bold">
          <h1 className="inline">EV National Volume Monitor</h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto">
          The EV National Volume Monitor in its default mode provides annual EV volume performance from FY 2014 onwards.
          It features a dynamic interface with a dual filter capability allowing users to modify the default mode. These modifications
          include vehicle categories and selection of financial year to further break down yearly performance into months.
        </p>

        <div className="flex justify-center space-x-4">
          <Select onValueChange={setSelectedState}>
            <SelectTrigger className="w-[220px] bg-black text-white flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              <SelectValue placeholder="States" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select State</SelectLabel>
                {stateArr.map((state, index) => (
                  <SelectItem key={index} value={state}>{state}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[220px] bg-black text-white flex items-center justify-center">
              <FaThLarge className="mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {catArr.map((category, index) => (
                  <SelectItem key={index} value={category}>{category}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[220px] bg-black text-white flex items-center justify-center">
              <FaCalendarAlt className="mr-2" />
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                {yearArr.map((year, index) => (
                  <SelectItem key={index} value={year}>{year}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center space-x-4 mx-auto">
          <Card className="rounded-lg bg-gray-200" style={{ width: '277px', height: '219px' }}>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Total EV Volumes (Current FY)</div>
              <div className="text-4xl font-bold mt-2">{currentData?.currentFY || "Loading..."}</div>
            </CardContent>
          </Card>

          <Card className="rounded-lg bg-gray-200" style={{ width: '277px', height: '219px' }}>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Total Volumes (Previous Month)</div>
              <div className="text-4xl font-bold mt-2">{currentData?.previousMonth || "Loading..."}</div>
            </CardContent>
          </Card>

          <Card className="rounded-lg bg-gray-200" style={{ width: '597px', height: '219px' }}>
            <CardContent className="p-0">
              <div className="p-6 text-base font-semibold">Total EV Volumes (Current FY)</div>
              <div className="flex justify-center">
                <div className="bg-black text-white flex justify-between w-[85%] rounded-md">
                  <div className="flex-1 text-center p-4">
                    <div className="flex justify-center mb-1">
                      <RiMotorbikeFill />
                    </div>
                    <div className="text-sm font-medium">E-2W</div>
                    <div className="text-lg font-semibold">{currentData?.evVolumes || "Loading..."}</div>
                  </div>
                  <div className="border-l border-gray-700"></div>
                  <div className="flex-1 text-center p-4">
                    <div className="flex justify-center mb-1">
                      <AirportShuttleIcon />
                    </div>
                    <div className="text-sm font-medium">E-4W</div>
                    <div className="text-lg font-semibold">0.03M</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Linechart />
        <div className="flex justify-center items-center min-h-screen space-x-9">
          <Barchart />
          <Piechart />
        </div>
        <div>
          <Link href="/Calci">
            <div>
              <Button className="w-full md:w-1/3">EV Charging Cost Calculator
                <FaArrowRightLong className="ml-2" style={{ fontSize: "1.25em", strokeWidth: "2px" }} />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
