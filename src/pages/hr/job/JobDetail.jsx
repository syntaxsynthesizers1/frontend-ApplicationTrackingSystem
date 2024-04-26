import { useParams } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import Header from "../../../components/Header";

const JobDetail = () => {
  const jobDetails = {
    id: 1,
    title: "Software Engineer",
    department: "Engineering",
    city: "New York",
    state: "NY",
    country: "USA",
    salaryRange: "$80,000 - $120,000",
    type: "Remote",
    closingDate: "2024-05-15",
    datePosted: "2024-04-15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    responsibilities: [
      "Develop new features for our web application",
      "Collaborate with product managers and designers",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience with JavaScript and React",
    ],
  };

  // Get the job id from URL params
  const { id } = useParams();

  // Retrieve the job details based on id
  const job = jobDetails;
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex flex-col flex-grow ml-64">
          <Header Title={"Job Details"} />
          <main className="p-6 flex-grow">
            <div className="container mx-auto">
              <a href="/jobs" className="text-blue-500 hover:underline">
                Go Back
              </a>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">{job.title}</h1>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Job Details</h2>
                <p className="my-2">
                  <span className="font-semibold me-2">Department:</span>
                  {job.department}
                </p>
                <p className="my-2">
                  <span className="font-semibold me-2">Location:</span>{" "}
                  {job.city},{job.state}, {job.country}
                </p>
                <p className="my-2">
                  <span className="font-semibold me-2">Job ID:</span> {`${id}`}
                </p>
                <p className="my-2">
                  <span className="font-semibold me-2">Salary Range:</span>
                  {job.salaryRange}
                </p>
                <p className="my-2">
                  <span className="font-semibold me-2">Type:</span> {job.type}
                </p>
                <p className="my-2">
                  <span className="font-semibold me-2">Closing Date:</span>
                  {job.closingDate}
                </p>
                <p className="my-2">
                  <span className="font-semibold me-2">Date Posted:</span>
                  {job.datePosted}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold me-2 mb-2">
                  Description:
                </h2>
                <p>{job.description}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold me-2 mb-2">
                  Responsibilities
                </h2>
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold me-2 mb-2">
                  Qualifications
                </h2>
                <ul className="list-disc list-inside">
                  {job.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
