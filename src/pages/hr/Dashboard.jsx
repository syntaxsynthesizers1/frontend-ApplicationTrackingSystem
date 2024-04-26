import React from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryPie,
} from "victory";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

const Dashboard = () => {
  const chartData = [
    { x: 1, y: 30 },
    { x: 2, y: 40 },
    { x: 3, y: 25 },
    { x: 4, y: 45 },
    { x: 5, y: 35 },
    { x: 6, y: 50 },
    { x: 7, y: 40 },
  ];

  const locationData = [
    { x: "Location 1", y: 30 },
    { x: "Location 2", y: 20 },
    { x: "Location 3", y: 50 },
  ];

  const genderData = [
    { x: "Male", y: 60 },
    { x: "Female", y: 40 },
  ];
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <SideBar />

        <div className="flex flex-col flex-grow ml-64">
          <Header Title={"Dashboard"} />
          <main className="p-6 flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Total Applicants</h3>
                <div className="text-2xl font-bold text-gray-900">125</div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Active Open Positions
                </h3>
                <div className="text-2xl font-bold text-gray-900">10</div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Upcoming Interviews
                </h3>
                <div className="text-2xl font-bold text-gray-900">3</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white overflow-hidden shadow rounded-lg p-6 md:col-span-2">
                <h2 className="text-lg font-semibold mb-4">
                  Applications per Day (Last 7 Days)
                </h2>
                <VictoryChart
                  theme={VictoryTheme.material}
                  width={600}
                  height={400}
                >
                  <VictoryAxis />
                  <VictoryAxis dependentAxis />
                  <VictoryLine data={chartData} x="x" y="y" />
                </VictoryChart>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Today's Schedules
                </h2>
                <ul>
                  <li>
                    <div className="text-lg font-semibold">
                      Interview with John Doe
                    </div>
                    <div className="text-sm text-gray-500">
                      09:00 AM - 10:00 AM
                    </div>
                    <div className="text-sm text-gray-500">Room 101</div>
                    <div className="text-sm text-gray-500">
                      Note: Prepare for technical questions
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Recent Job Postings
                </h2>

                <ul>
                  <li>
                    <div className="text-lg font-semibold">
                      Frontend Developer
                    </div>
                    <div className="text-sm text-gray-500">
                      Posted on: April 20, 2024
                    </div>
                    <div className="text-sm text-gray-500">
                      Location: Remote
                    </div>
                    <div className="text-sm text-gray-500">
                      Experience: 2+ years
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">
                  Application by Location
                </h2>
                <VictoryPie
                  data={locationData}
                  colorScale="qualitative"
                  width={300}
                  height={200}
                  padding={50}
                  innerRadius={30}
                  labelRadius={75}
                />
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Application by Gender
                </h2>
                <VictoryPie
                  data={genderData}
                  colorScale="qualitative"
                  width={300}
                  height={200}
                  padding={50}
                  innerRadius={30}
                  labelRadius={75}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
