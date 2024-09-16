"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
    { month: "FY2015", E2W: 186, fill: "var(--color-FY2015)" },
    { month: "FY2016", E2W: 305, fill: "var(--color-FY2016)" },
    { month: "FY2017", E2W: 237, fill: "var(--color-FY2017)" },
    { month: "FY2018", E2W: 73, fill: "var(--color-FY2018)"},
    { month: "FY2019", E2W: 209, fill: "var(--color-FY2019)" },
    { month: "FY2020", E2W: 214, fill: "var(--color-FY2020)"},
    { month: "FY2021", E2W: 230, fill: "var(--color-FY2021)" },
    { month: "FY2022", E2W: 255, fill: "var(--color-FY2022)" },
    { month: "FY2023", E2W: 270, fill: "var(--color-FY2023)" },
    { month: "FY2024", E2W: 210, fill: "var(--color-FY2024)" },
    { month: "FY2025", E2W: 210, fill: "var(--color-FY2025)"},
]

const chartConfig = {
    EW2: {
        label: "EW2",
    },
    FY2015: {
        label: "FY2015",
        color: "hsl(var(--chart-1))",
    },
    FY2016: {
        label: "FY2016",
        color: "hsl(var(--chart-2))",
    },
    FY2017: {
        label: "FY2017",
        color: "hsl(var(--chart-3))",
    },
    FY2018: {
        label: "FY2018",
        color: "hsl(var(--chart-4))",
    },
    FY2019: {
        label: "FY2019",
        color: "hsl(var(--chart-5))",
    },
    FY2020: {
        label: "FY2020",
        color: "hsl(var(--chart-5))",
    },
    FY2021: {
        label: "FY2021",
        color: "hsl(var(--chart-5))",
    },
    FY2022: {
        label: "FY2022",
        color: "hsl(var(--chart-5))",
    },
    FY2023: {
        label: "FY2023",
        color: "hsl(var(--chart-5))",
    },
    FY2024: {
        label: "FY2024",
        color: "hsl(var(--chart-5))",
    },
    FY2025: {
        label: "FY2025",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function Piechart() {
    return (
        <Card className="w-[554px] h-[414px] flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Share of categories in registrations</CardTitle>
                <CardDescription>(FY2014 to FY2024)</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="E2W"
                            nameKey="E2W"
                            innerRadius={50}
                        />
                    </PieChart>
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
