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
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { IoMdNotificationsOutline } from "react-icons/io";

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
                  <p className="text-[12px] text-gray-500">Administrator</p>
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

        <section className="mt-5 gap-y-8 flex flex-row gap-[100px]">
          <div>
            <h4 className="text-3xl font-medium text-main">
              Development Activity
            </h4>

            {/* Graph Placeholder */}
            <div className="mt-4 bg-gray-50 rounded-lg p-4 h-48">
              {/* Replace this div with an actual graph component later */}
              <div className="w-full h-full bg-blue-100/50 rounded flex items-center justify-center text-gray-400">
                Activity Graph Placeholder
              </div>
            </div>

            {/* Activity Table */}
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      user: "Ronald Bradley",
                      commit: "Initial commit",
                      date: "May 6, 2018",
                    },
                    {
                      user: "Russell Gibson",
                      commit: "Main structure",
                      date: "April 22, 2018",
                    },
                    {
                      user: "Beverly Armstrong",
                      commit: "Left sidebar adjustments",
                      date: "April 15, 2018",
                    },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.user}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.commit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          aria-label="Copy commit hash"
                        >
                          <DeleteIcon fontSize="small" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-medium text-main">
              Read our documentation with code sample
            </h4>
          </div>
        </section>
      </main>
    </>
  );
}
