
const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
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
            Sign in to your account
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
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
                autoComplete="current-password"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-center">
            <p className="font-medium text-gray-600 my-2">
              Don&apos;t have an account?
            </p>
            <p className="font-medium text-gray-600 my-2">
              HR Accounts are created by Management. Please contact Management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
