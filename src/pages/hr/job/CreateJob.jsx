import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import Header from "../../../components/Header";

const CreateJob = () => {
  const navigate = useNavigate();

  // Initial state for job post form fields
  const [jobPost, setJobPost] = useState({
    title: "",
    department: "",
    city: "",
    state: "",
    country: "",
    salaryRange: "",
    type: "",
    closingDate: "",
    description: "",
    responsibilities: [],
    qualifications: [],
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobPost((prevJobPost) => ({
      ...prevJobPost,
      [name]: value,
    }));
  };

  // Function to handle responsibilities and qualifications changes
  const handleListChange = (e, type) => {
    const { value } = e.target;
    setJobPost((prevJobPost) => ({
      ...prevJobPost,
      [type]: value.split("\n"),
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit job post data (replace this with your API call)
    console.log("Submitted Job Post Data:", jobPost);
    // Redirect to job details page
    navigate.push("/jobs"); // Update this route based on your application's routing
  };
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex flex-col flex-grow ml-64">
          <Header Title={"Create Job Post"} />
          <main className="p-6 flex-grow">
            <div className="container mx-auto">
              <div className="mb-4">
                <a href="/jobs" className="text-blue-500 hover:underline">
                  Go Back
                </a>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="title" className="block font-semibold">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={jobPost.title}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department" className="block font-semibold">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={jobPost.department}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city" className="block font-semibold">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={jobPost.city}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state" className="block font-semibold">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={jobPost.state}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country" className="block font-semibold">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={jobPost.country}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="salaryRange"
                      className="block font-semibold"
                    >
                      Salary Range
                    </label>
                    <input
                      type="text"
                      id="salaryRange"
                      name="salaryRange"
                      value={jobPost.salaryRange}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type" className="block font-semibold">
                      Type
                    </label>
                    <input
                      type="text"
                      id="type"
                      name="type"
                      value={jobPost.type}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="closingDate"
                      className="block font-semibold"
                    >
                      Closing Date
                    </label>
                    <input
                      type="date"
                      id="closingDate"
                      name="closingDate"
                      value={jobPost.closingDate}
                      onChange={handleChange}
                      className="form-input w-full mt-1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-6">
                  <label htmlFor="description" className="block font-semibold">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={jobPost.description}
                    onChange={handleChange}
                    className="form-textarea w-full mt-1"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group mt-6">
                  <label
                    htmlFor="responsibilities"
                    className="block font-semibold"
                  >
                    Responsibilities (One per line)
                  </label>
                  <textarea
                    id="responsibilities"
                    name="responsibilities"
                    value={jobPost.responsibilities.join("\n")}
                    onChange={(e) => handleListChange(e, "responsibilities")}
                    className="form-textarea w-full mt-1"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group mt-6">
                  <label
                    htmlFor="qualifications"
                    className="block font-semibold"
                  >
                    Qualifications (One per line)
                  </label>
                  <textarea
                    id="qualifications"
                    name="qualifications"
                    value={jobPost.qualifications.join("\n")}
                    onChange={(e) => handleListChange(e, "qualifications")}
                    className="form-textarea w-full mt-1"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Create Job Post
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
