"use client";

import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: "AI Automation",
    color: "hsl(210, 70%, 50%)",
    data: [
      { x: "Jan", y: 20 },
      { x: "Feb", y: 40 },
      { x: "Mar", y: 80 },
      { x: "Apr", y: 120 },
      { x: "May", y: 200 },
    ],
  },
];

export default function NivoChart() {
  return (
    <div className="w-full h-64 bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-4">
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Processes Automated",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "nivo" }}
        lineWidth={3}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enableGridX={false}
        enableGridY={true}
        useMesh={true}
        theme={{
          axis: { ticks: { text: { fill: "#fff" } } },
          grid: { line: { stroke: "#555", strokeDasharray: "3 3" } },
        }}
      />
    </div>
  );
}
