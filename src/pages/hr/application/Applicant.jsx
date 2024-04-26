import React from "react";
import SideBar from "../../../components/SideBar";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";

const Applicant = () => {
  const applicantDetails = [
    {
      id: 1,
      fullName: "John Doe",
      dateOfBirth: "1990-01-01",
      country: "USA",
      yearsOfExperience: 5,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem nec justo dictum fermentum. Nam eget placerat magna. Suspendisse potenti. Integer lobortis, odio a placerat pharetra, libero mauris tincidunt odio, id sodales purus libero at metus. Cras vehicula mauris vel nisi laoreet, vel fermentum risus pharetra.",
      previousEmployment: [
        {
          company: "ABC Inc.",
          position: "Software Engineer",
          duration: "2018-2021",
        },
      ],
      school: "University XYZ",
      skills: ["JavaScript", "React", "Node.js"],
      socialMedia: {
        linkedin: "https://www.linkedin.com/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
      ATSscore: 85,
    },
    {
      id: 2,
      fullName: "Samuel Doghor",
      dateOfBirth: "1985-05-15",
      country: "Nigeria",
      yearsOfExperience: 8,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem nec justo dictum fermentum. Nam eget placerat magna. Suspendisse potenti. Integer lobortis, odio a placerat pharetra, libero mauris tincidunt odio, id sodales purus libero at metus. Cras vehicula mauris vel nisi laoreet, vel fermentum risus pharetra.",
      previousEmployment: [
        {
          company: "XYZ Corp",
          position: "Frontend Developer",
          duration: "2015-2018",
        },
      ],
      school: "University ABC",
      skills: ["HTML", "CSS", "JavaScript"],
      socialMedia: {
        linkedin: "https://www.linkedin.com/janesmith",
        github: "https://github.com/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
      ATSscore: 72,
    },
  ];

  const { id } = useParams();

  const applicant = applicantDetails[id - 1];

  console.log("Applicant Details:", applicant);

  let scoreMessage;
  if (applicant.ATSscore < 66) {
    scoreMessage = "0-65: Will not be considered for interview";
  } else if (applicant.ATSscore < 80) {
    scoreMessage = "66-79: Interview will be scheduled at HR discretion";
  } else {
    scoreMessage = "80-100: Must be considered for interview";
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />

      <div className="flex flex-col flex-grow ml-64">
        <Header Title={`Applicant (${applicant.fullName})`} />
        <main className="p-6 flex-grow">
          <div className="container mx-auto">
            <a href="/applications" className="text-blue-500 hover:underline">
              Go Back
            </a>
            {applicant && (
              <>
                <h1 className="text-3xl font-semibold mb-4">
                  {applicant.fullName}
                </h1>
                <div className="bg-white rounded-lg shadow-md p-6 my-6">
                  <h2 className="text-lg font-semibold mb-4">ATS Score</h2>
                  <p>
                    {applicant.ATSscore}/100
                    <span className="text-sm text-gray-600 block">
                      {scoreMessage}
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">
                      Personal Info
                    </h2>
                    <p>Date of Birth: {applicant.dateOfBirth}</p>
                    <p>Country: {applicant.country}</p>
                    <p>Years of Experience: {applicant.yearsOfExperience}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">About</h2>
                    <p>{applicant.about}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Previous Employment History
                  </h2>
                  <ul>
                    {applicant.previousEmployment.map((employment, index) => (
                      <li key={index}>
                        {employment.position} at {employment.company},{" "}
                        {employment.duration}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h2 className="text-lg font-semibold mb-4">School</h2>
                  <p>{applicant.school}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h2 className="text-lg font-semibold mb-4">Skills</h2>
                  <p>{applicant.skills.join(", ")}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h2 className="text-lg font-semibold mb-4">Social Media</h2>
                  <ul>
                    {Object.entries(applicant.socialMedia).map(
                      ([platform, link]) => (
                        <li key={platform}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {platform}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mt-8">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
                    Schedule Interview
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Drop Applicant
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Applicant;
