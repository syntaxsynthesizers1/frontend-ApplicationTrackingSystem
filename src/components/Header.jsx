import React from "react";

const Header = ({ Title }) => {
  return (
    <>
      <header className="bg-white shadow py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Group 4 ATS {Title}
        </h1>
      </header>
    </>
  );
};

export default Header;
