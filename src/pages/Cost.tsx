import { useRouter } from 'next/router';
import { FaRupeeSign, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SavingsPage() {
    const router = useRouter();
    const {
        vehicleType,
        fuelPrice,
        mileage,
        range,
        batteryCapacity,
        chargingCost,
        journeyDistance,
        journeyFreq,
        state // Retrieve selected state
    } = router.query;

    const fuelCostPerKm = parseFloat(fuelPrice as string) / parseFloat(mileage as string);
    const annualFuelCost = fuelCostPerKm * parseFloat(journeyDistance as string) * (journeyFreq === "daily" ? 365 : journeyFreq === "weekly" ? 52 : 12);

    const evCostPerKm = (parseFloat(chargingCost as string) * parseFloat(batteryCapacity as string)) / parseFloat(range as string);
    const annualChargingCost = evCostPerKm * parseFloat(journeyDistance as string) * (journeyFreq === "daily" ? 365 : journeyFreq === "weekly" ? 52 : 12);

    const savings = annualFuelCost - annualChargingCost;

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary flex justify-center items-center gap-2">
                        <GiElectric /> EV Charging Cost Calculator
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Estimate how much you can save by switching to an Electric Vehicle. <br />
                        Calculate your savings against a conventional (ICE) vehicle by entering a few details.
                    </p>
                </div>
                <div className="flex justify-center items-center mb-8">
                    <div className="bg-primary text-white py-2 px-8 rounded-l-lg">Basic details</div>
                    <FaArrowRight className="mx-4 text-primary" />
                    <div className="bg-muted py-2 px-8 rounded-r-lg">Total Savings</div>
                </div>
                <Card className="bg-muted p-6">
                    <CardHeader className="text-center">
                        <CardTitle className="flex items-center justify-center gap-2">
                            <FaRupeeSign className="text-2xl" />
                            Your Annual Savings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-around mt-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-primary">₹{savings.toFixed(2)}</h2>
                            <p className="mt-4">State: {state}</p> {/* Display selected state */}
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-between mt-6">
                    <Card className="w-1/2 mx-2">
                        <CardHeader className="flex items-center justify-center gap-2">
                            <CardTitle>Conventional Vehicle</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p>Cost per km: <span className="font-bold text-lg">₹{fuelCostPerKm.toFixed(2)}</span></p>
                            <p className="mt-2">Annual Fuel Cost: <span className="font-bold text-lg text-yellow-500">₹{annualFuelCost.toFixed(2)}</span></p>
                        </CardContent>
                    </Card>
                    <Card className="w-1/2 mx-2">
                        <CardHeader className="flex items-center justify-center gap-2">
                            <CardTitle>Electric Vehicle</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p>Cost per km: <span className="font-bold text-lg">₹{evCostPerKm.toFixed(2)}</span></p>
                            <p className="mt-2">Annual Charging Cost: <span className="font-bold text-lg text-green-500">₹{annualChargingCost.toFixed(2)}</span></p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-center mt-8">
                    <Link href="/Calci">
                        <Button className="w-64">Start New Calculation
                            <FaArrowRightLong className="ml-2" style={{ fontSize: "1.25em", strokeWidth: "2px" }} />
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
