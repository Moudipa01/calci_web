"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A multiple line chart"

const chartData = [
  { month: "FY2014-15", E2W: 186, E3W: 80 },
  { month: "FY2015-16", E2W: 305, E3W: 200 },
  { month: "FY2016-17", E2W: 237, E3W: 120 },
  { month: "FY2017-18", E2W: 73, E3W: 190 },
  { month: "FY2018-19", E2W: 209, E3W: 130 },
  { month: "FY2019-20", E2W: 214, E3W: 140 },
  { month: "FY2020-21", E2W: 230, E3W: 170 },
  { month: "FY2021-22", E2W: 255, E3W: 200 },
  { month: "FY2022-23", E2W: 270, E3W: 266 },
  { month: "FY2023-24", E2W: 210, E3W: 210 },
  { month: "FY2024-25", E2W: 210, E3W: 210 },
]

const chartConfig = {
  E2W: {
    label: "E2W",
    color: "hsl(var(--chart-1))",
  },
  E3W: {
    label: "E3W",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Linechart() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[900px] h-[532px]">
        <CardHeader>
          <CardTitle>EV Penetration</CardTitle>
          <CardDescription>(FY2014 to FY2024)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              width={850} 
              height={350}
              margin={{
                left: 20,   
                right: 20, 
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="E2W"
                type="monotone"
                stroke="var(--color-E2W)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="E3W"
                type="monotone"
                stroke="var(--color-E3W)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
              *Note - Last update on 27 August 2024 <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}