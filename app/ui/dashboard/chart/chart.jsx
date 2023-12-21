"use client";
import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mond", visit: 2000, click: 1998 },
  { name: "Tue", visit: 2000, click: 1998 },
  { name: "Wed", visit: 2100, click: 2050 },
  { name: "Thu", visit: 1800, click: 1750 },
  { name: "Fri", visit: 2200, click: 2150 },
  { name: "Sat", visit: 2500, click: 2450 },
  { name: "Sun", visit: 2300, click: 2250 },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly recap</h2>
      {/* mettre height=90% pour éviter l'overflow */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
