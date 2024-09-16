import { useState } from "react";
import "@/app/globals.css"
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Link from 'next/link';


export default function Calci() {
    const [vehicleType, setVehicleType] = useState<"car" | "bike">("car");

    const [fuelPrice, setFuelPrice] = useState(50);
    const [mileage, setMileage] = useState(15);
    const [range, setRange] = useState(250);
    const [batteryCapacity, setBatteryCapacity] = useState(40);
    const [chargingCost, setChargingCost] = useState(10);

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-4">EV Charging Cost Calculator</h1>
                <p className="text-center text-muted-foreground mb-6">
                    Estimate how much you can save by switching to an Electric Vehicle. Calculate your savings against a conventional (ICE) vehicle by entering a few details.
                </p>

                <div className="text-center mb-6">
                    <h2 className="font-semibold mb-4">Choose Vehicle Type</h2>
                    <div className="flex justify-center space-x-4">
                        <Card onClick={() => setVehicleType("car")} className={`p-4 cursor-pointer ${vehicleType === "car" ? "border border-primary" : ""}`}>
                            <FaCar size={32} className="mx-auto" />
                        </Card>
                        <Card onClick={() => setVehicleType("bike")} className={`p-4 cursor-pointer ${vehicleType === "bike" ? "border border-primary" : ""}`}>
                            <FaMotorcycle size={32} className="mx-auto" />
                        </Card>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Conventional Vehicle</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="fuelType">Fuel Type</Label>
                                    <Select id="fuelType">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Fuel Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="petrol">Petrol</SelectItem>
                                                <SelectItem value="diesel">Diesel</SelectItem>
                                                <SelectItem value="cng">CNG</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="state">State</Label>
                                    <Select id="state">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="state1">State 1</SelectItem>
                                                <SelectItem value="state2">State 2</SelectItem>
                                                <SelectItem value="state3">State 3</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="fuelPrice">Fuel Price: ₹{fuelPrice}</Label>
                                    <Slider id="fuelPrice" defaultValue={[fuelPrice]} max={200} onValueChange={(value) => setFuelPrice(value[0])} />
                                </div>
                                <div>
                                    <Label htmlFor="mileage">Conventional Vehicle Average Mileage: {mileage} Km</Label>
                                    <Slider id="mileage" defaultValue={[mileage]} max={30} onValueChange={(value) => setMileage(value[0])} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Electric Vehicle</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="range">Electric Vehicle Range (Km): {range}</Label>
                                    <Slider id="range" defaultValue={[range]} max={500} onValueChange={(value) => setRange(value[0])} />
                                </div>
                                <div>
                                    <Label htmlFor="batteryCapacity">Battery Capacity (Kwh): {batteryCapacity}</Label>
                                    <Slider id="batteryCapacity" defaultValue={[batteryCapacity]} max={100} onValueChange={(value) => setBatteryCapacity(value[0])} />
                                </div>
                                <div>
                                    <Label htmlFor="journeyFreq">Journey Frequency</Label>
                                    <Select id="journeyFreq">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Daily" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="daily">Daily</SelectItem>
                                                <SelectItem value="weekly">Weekly</SelectItem>
                                                <SelectItem value="monthly">Monthly</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="journeyDistance">Journey Distance (Km)</Label>
                                    <Input id="journeyDistance" type="number" defaultValue={1} />
                                </div>
                                <div>
                                    <Label htmlFor="chargingCost">Charging Cost: ₹{chargingCost}</Label>
                                    <Slider id="chargingCost" defaultValue={[chargingCost]} max={20} onValueChange={(value) => setChargingCost(value[0])} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="className=text-center mt-6">
                    <Link href="/Cost">
                        <div className="flex justify-center">
                            <Button className="w-full md:w-1/3">Calculate Total Cost</Button>
                        </div>

                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
