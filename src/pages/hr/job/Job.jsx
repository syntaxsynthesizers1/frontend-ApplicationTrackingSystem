import SideBar from "../../../components/SideBar";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";

const Job = () => {
  const jobPosts = [
    {
      id: 1,
      title: "Software Engineer",
      location: "Lagos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Data Scientist",
      location: "Port Harcourt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Frontend Engineer",
      location: "Lagos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Backend Engineer",
      location: "Port Harcourt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex flex-col flex-grow ml-64">
          <Header Title={"Jobs"} />
          <main className="p-6 flex-grow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">All Job Openings</h1>
                {/* Button to create new job openings */}
                <Link
                  to="/jobs/new-position"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Create New Job Opening
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Render all job posts */}
                {jobPosts.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                  >
                    <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{job.location}</p>
                    <p className="text-sm text-gray-700 mb-4">
                      {job.description}
                    </p>
                    {/* Link to view job post details */}
                    <Link
                      to={`/jobs/details/${job.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Details
                    </Link>
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

export default Job;
