import { useState } from "react";
import { useRouter } from 'next/router';
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Calci() {
    const [vehicleType, setVehicleType] = useState<"car" | "bike">("car");
    const [fuelPrice, setFuelPrice] = useState(50);
    const [mileage, setMileage] = useState(15);
    const [range, setRange] = useState(250);
    const [batteryCapacity, setBatteryCapacity] = useState(40);
    const [chargingCost, setChargingCost] = useState(10);
    const [journeyDistance, setJourneyDistance] = useState(1);
    const [journeyFreq, setJourneyFreq] = useState("daily");
    const [selectedState, setSelectedState] = useState("");

    const router = useRouter();

    const stateArr = ["Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

    const handleCalculate = () => {
        const queryParams = new URLSearchParams({
            vehicleType,
            fuelPrice: fuelPrice.toString(),
            mileage: mileage.toString(),
            range: range.toString(),
            batteryCapacity: batteryCapacity.toString(),
            chargingCost: chargingCost.toString(),
            journeyDistance: journeyDistance.toString(),
            journeyFreq,
            state: selectedState
        }).toString();

        router.push(`/Cost?${queryParams}`);
    };

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
                                    <Select id="state" onValueChange={(value) => setSelectedState(value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {stateArr.map((state, index) => (
                                                    <SelectItem key={index} value={state}>{state}</SelectItem>
                                                ))}
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
                                    <Select id="journeyFreq" onValueChange={(value) => setJourneyFreq(value)}>
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
                                    <Input id="journeyDistance" type="number" defaultValue={1} onChange={(e) => setJourneyDistance(Number(e.target.value))} />
                                </div>
                                <div>
                                    <Label htmlFor="chargingCost">Charging Cost: ₹{chargingCost}</Label>
                                    <Slider id="chargingCost" defaultValue={[chargingCost]} max={20} onValueChange={(value) => setChargingCost(value[0])} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-center mt-6">
                    <Button onClick={handleCalculate} className="w-full md:w-1/3">Calculate Total Cost</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}
