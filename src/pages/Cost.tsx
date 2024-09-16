import { FaRupeeSign, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import "@/app/globals.css"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SavingsPage() {
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
                            <h2 className="text-3xl font-bold text-primary">₹1,491.94</h2>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-between mt-6">
                    <Card className="w-1/2 mx-2">
                        <CardHeader className="flex items-center justify-center gap-2">
                            <CardTitle>Conventional Vehicle</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p>Cost per km: <span className="font-bold text-lg">₹5.69</span></p>
                            <p className="mt-2">Annual Fuel Cost: <span className="font-bold text-lg text-yellow-500">₹2,075.94</span></p>
                        </CardContent>
                    </Card>
                    <Card className="w-1/2 mx-2">
                        <CardHeader className="flex items-center justify-center gap-2">
                            <CardTitle>Electric Vehicle</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p>Cost per km: <span className="font-bold text-lg">₹1.60</span></p>
                            <p className="mt-2">Annual Charging Cost: <span className="font-bold text-lg text-green-500">₹584.00</span></p>
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
