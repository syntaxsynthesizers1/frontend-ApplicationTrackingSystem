import React from "react";

const Signup = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg my-10">
          <div className="text-center mb-4">
            <img
              src="src/assests/img/inter-logo.png"
              alt="Interswitch G4 ATS Logo"
              className="h-12 w-auto mx-auto"
            />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Group 4 ATS
            </h2>
          </div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
            Create an Account (Job Applicant)
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Resume (PDF)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="linkedinProfile"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                id="linkedinProfile"
                name="linkedinProfile"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-gray-700"
              >
                Portfolio Website URL
              </label>
              <input
                type="text"
                id="portfolio"
                name="portfolio"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-center">
            <div className="my-4 text-sm text-center">
              <p className="font-medium text-gray-600">
                Have an account?
                <a
                  href="/"
                  className="text-indigo-600 hover:text-indigo-500 ml-2"
                >
                  Login
                </a>
              </p>
            </div>
            <p className="font-medium text-gray-600">
              HR accounts are created by Management. Please contact the
              management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
