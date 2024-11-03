import * as React from "react";
import { Card, SEO } from "../components";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Forum as ForumIcon,
  Pages as PagesIcon,
  Image as ImageIcon,
  Settings as SettingsIcon,
  Construction as ConstructionIcon,
} from "@mui/icons-material";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LineChart, Line, PieChart, Pie, Cell } from "recharts";

const lineData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 40 },
  { name: "May", value: 70 },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <SEO title="Home" />
      <main className="container mx-auto py-5 px-4">
        <header className="space-y-6">
          <nav className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <Link to="/">
              <h4 className="text-[23px] font-medium text-main hover:text-main/80">
                tabler
              </h4>
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <Link
                to="https://github.com/tabler/tabler"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-xl cursor-pointer font-medium text-blue-500 border-[1.4px] border-solid border-blue-500 rounded-md hover:bg-blue-50"
              >
                Source Code
              </Link>
              <button
                aria-label="Notifications"
                className="hover:text-gray-600"
              >
                <IoMdNotificationsOutline className="text-3xl" />
              </button>
              <div
                className="flex items-center gap-3"
                role="navigation"
                aria-label="User menu"
              >
                <div
                  className="w-12 h-12 rounded-full bg-gray-200"
                  aria-hidden="true"
                ></div>
                <div>
                  <h5 className="text-black text-base">Jane Pearson</h5>
                  <p className="text-[12px] text-gray-500">useristrator</p>
                </div>
              </div>
            </div>
          </nav>

          <nav aria-label="Main navigation">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Navigation tabs"
              className="border-b  text-blue-500 border-gray-200"
            >
              <Tab icon={<HomeIcon />} iconPosition="start" label="Home" />
              <Tab
                icon={<SettingsIcon />}
                iconPosition="start"
                label="Interface"
              />
              <Tab
                icon={<ConstructionIcon />}
                iconPosition="start"
                label="Components"
              />
              <Tab icon={<PagesIcon />} iconPosition="start" label="Pages" />
              <Tab icon={<ImageIcon />} iconPosition="start" label="Gallery" />
              <Tab
                icon={<ForumIcon />}
                iconPosition="start"
                label="Documentation"
              />
            </Tabs>
          </nav>
        </header>
        <section className="mt-5">
          <h4 className="text-3xl font-medium text-main">Dashboard</h4>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <Card title="43" subtitle="New Tickets" />
            <Card title="17" subtitle="Closed Today" />
            <Card title="7" subtitle="New Replies" />
            <Card title="23.4k" subtitle="New followers" />
            <Card title="$95" subtitle="Daily Earnings" />
            <Card title="621" subtitle="Products" />
          </div>
        </section>

        <section className="mt-5 flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <h4 className="text-3xl font-medium text-main">
              Development Activity
            </h4>
            <LineChart width={500} height={300} data={lineData}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
            <div className="mt-5">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500">
                    <th className="py-2">U ser</th>
                    <th className="py-2">Commit</th>
                    <th className="py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                      Ronald Bradley
                    </td>
                    <td className="py-2">Initial commit</td>
                    <td className="py-2">May 6, 2018</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                      Russell Gibson
                    </td>
                    <td className="py-2">Main structure</td>
                    <td className="py-2">April 22, 2018</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                      Beverly Armstrong
                    </td>
                    <td className="py-2">Left sidebar adjustments</td>
                    <td className="py-2">April 15, 2018</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-3xl font-medium text-main">
              Read our documentation with code samples
            </h4>
            <div className="flex mt-5 gap-5">
              <div className="w-full md:w-1/2 border border-gray-200 h-[250px] shadow-md">
                <div className="flex flex-col items-center justify-center h-full">
                  <h5 className="text-xl font-medium mb-3">
                    User Distribution
                  </h5>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={pieData}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </div>
              </div>
              <div className="w-full md:w-1/2 border border-gray-200 h-[250px] shadow-md">
                <div className="flex flex-col items-center justify-center h-full">
                  <h5 className="text-xl font-medium mb-3">Sales Breakdown</h5>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={pieData}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </div>
              </div>
            </div>
            <div className="flex mt-5 gap-5">
              <div className="text-center flex-1 bg-gray-100 p-4 rounded-md">
                <h5 className="text-lg font-medium">New Feedback</h5>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="text-center flex-1 bg-gray-100 p-4 rounded-md">
                <h5 className="text-lg font-medium">Today Profit</h5>
                <p className="text-2xl font-bold">$1,200</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
