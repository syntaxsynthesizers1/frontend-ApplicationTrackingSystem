import { Routes, Route } from "react-router-dom";
import {
  Applicant,
  Application,
  Dashboard,
  Login,
  Job,
  JobDetail,
  CreateJob,
} from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications">
          <Route index element={<Application />} />
          <Route path="applicant/:id" element={<Applicant />} />
        </Route>
        <Route path="/jobs">
          <Route index element={<Job />} />
          <Route path="details/:id" element={<JobDetail />} />
          <Route path="new-position" element={<CreateJob />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
