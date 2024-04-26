import React from "react";
import SideBar from "../../../components/SideBar";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";

const Application = () => {

  const applications = [
    {
      id: 1,
      fullName: "John Doe",
      jobId: "123456",
      jobTitle: "Software Engineer",
      date: "2024-04-25",
      time: "10:00 AM",
      location: "Lagos",
      country: "Nigeria",
      gender: "Male",
      resume: "https://example.com/resume.pdf",
    },
    {
      id: 2,
      fullName: "Samuel Doghor",
      jobId: "679657",
      jobTitle: "Software Engineer",
      date: "2024-04-22",
      time: "04:00 PM",
      location: "Port Harcourt",
      country: "Nigeria",
      gender: "Male",
      resume: "https://example.com/resume.pdf",
    },
  ];
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">

        <SideBar />


        <div className="flex flex-col flex-grow ml-64">
          <Header Title={"Applications"} />
          <main className="p-6 flex-grow">
            <div className="container mx-auto">
              <div className="space-y-8">

                {applications.slice(0, 50).map((application) => (
                  <div key={application.id} className="border-b py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {application.fullName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Job Post ID: {application.jobId}
                        </p>
                        <p className="text-sm text-gray-500">
                          Job Title: {application.jobTitle}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {application.date}, {application.time}
                        </p>
                        <p className="text-sm text-gray-500">
                          {application.location}, {application.country}
                        </p>
                        <p className="text-sm text-gray-500">
                          Gender: {application.gender}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <a
                        href={application.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View Resume
                      </a>
                      <Link
                        to={`/applications/applicant/${application.id}`}
                        className="ml-4 text-blue-500 hover:underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Application;
