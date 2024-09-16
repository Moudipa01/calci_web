import Link from 'next/link';
import Image from 'next/image';
import { Button } from "./ui/button";
import bg from '../assets/bg_img.png';
import * as React from "react"
import { FaMapMarkerAlt, FaThLarge, FaCalendarAlt } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

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
import {
  ChartConfig,
} from "@/components/ui/chart"
import { Linechart } from './lineChart';
import { Barchart } from './barChart';
import { Piechart } from './pieChart';

export const Hero = () => {
  return (
    <section className="container grid place-items-center py-20 md:py-32 gap-10">
      <div className="shadow">
      </div>
      <div className="text-center space-y-6">
        <main className="text-3xl md:text-5xl font-bold">
          <h1 className="inline">
            EV National Volume Monitor
          </h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto">
          The EV National Volume Monitor in its default mode provides annual EV volume performance from FY 2014 onwards.
          It features a dynamic interface with a dual filter capability allowing users to modify the default mode. These modifications
          include vehicle categories and selection of financial year to further break down yearly performance into months.
        </p>

        <div className="flex justify-center space-x-4">
          <Select>
            <SelectTrigger className="w-[220px] bg-black text-white flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              <SelectValue placeholder="States" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>States</SelectLabel>
                <SelectItem value="california">California</SelectItem>
                <SelectItem value="texas">Texas</SelectItem>
                <SelectItem value="florida">Florida</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[220px] bg-black text-white flex items-center justify-center">
              <FaThLarge className="mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="ev">Electric Vehicle</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[220px] bg-black text-white flex items-center justify-center">
              <FaCalendarAlt className="mr-2" />
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center space-x-4 mx-auto">
          <Card className="rounded-lg bg-gray-200" style={{ width: '277px', height: '219px' }}>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Total EV Volumes (Current FY)</div>
              <div className="text-4xl font-bold mt-2">0.56M</div>
            </CardContent>
          </Card>

          <Card className="rounded-lg bg-gray-200" style={{ width: '277px', height: '219px' }}>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Total Volumes (previous Month)</div>
              <div className="text-4xl font-bold mt-2">80.88K</div>
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
                    <div className="text-lg font-semibold">0.28M</div>
                  </div>
                  <div className="border-l border-gray-700"></div>
                  <div className="flex-1 text-center p-4">
                    <div className="flex justify-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M20.4,9.6H19V8.1c0-0.2,0-0.3-0.1-0.4l-1.7-3.9c-0.2-0.4-0.6-0.7-1-0.7H7.7c-0.4,0-0.8,0.3-1,0.7L5,7.7 C5,7.8,5,7.9,5,8.1v1.4H3.6C2.7,9.6,2,10.3,2,11.2v7.2C2,19.3,2.7,20,3.6,20h0.3c0.2,1.2,1.3,2,2.6,2s2.3-0.9,2.6-2h4.8 c0.2,1.2,1.3,2,2.6,2s2.3-0.9,2.6-2h0.3c0.9,0,1.6-0.7,1.6-1.6v-7.2C22,10.3,21.3,9.6,20.4,9.6z M7.8,4h8.4l1.2,2.8h-4.5 c-0.6,0-1,0.4-1,1v2.8H7.6V7.8C7.6,6.8,7.7,5.3,7.8,4z M10,17.2c0,1.5-1.2,2.8-2.8,2.8s-2.8-1.2-2.8-2.8S5.7,14.4,7.2,14.4 C8.8,14.4,10,15.7,10,17.2z M19.8,17.2c0,1.5-1.2,2.8-2.8,2.8s-2.8-1.2-2.8-2.8s1.2-2.8,2.8-2.8S19.8,15.7,19.8,17.2z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">E-3W</div>
                    <div className="text-lg font-semibold">0.05M</div>
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
        </div >
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
