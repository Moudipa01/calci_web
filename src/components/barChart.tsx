"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
    { month: "January", EW2: 186, EW3: 80 },
    { month: "February", EW2: 305, EW3: 200 },
    { month: "March", EW2: 237, EW3: 120 },
    { month: "April", EW2: 73, EW3: 190 },
    { month: "May", EW2: 209, EW3: 130 },
    { month: "June", EW2: 214, EW3: 140 },
]

const chartConfig = {
    EW2: {
        label: "EW2",
        color: "hsl(var(--chart-1))",
    },
    EW3: {
        label: "EW3",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function Barchart() {
    return (
        <Card className="w-[554px] h-[414px] flex flex-col">
            <CardHeader>
                <CardTitle>State EV Volumes</CardTitle>
                <CardDescription>(FY2014 to FY2024)</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[250px]">
                    <BarChart
                        width={500}
                        height={200}
                        data={chartData}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="EW2"
                            stackId="a"
                            fill="var(--color-EW2)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="EW3"
                            stackId="a"
                            fill="var(--color-EW3)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    *Note - Last update on 27 August 2024 <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
