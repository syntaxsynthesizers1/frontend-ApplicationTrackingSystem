import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
} from "react-icons/hi";

const SideBar = () => {
  return (
    <>
      <Sidebar className="h-screen flex-shrink-0 fixed">
        <Sidebar.Logo
          href="/dashboard"
          img="/src/assests/img/inter-logo.png"
          imgAlt="Interswitch G4 ATS Logo"
        ></Sidebar.Logo>
        <Sidebar.Logo>Interswitch G4 ATS</Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard" icon={HiChartPie} className="mb-4">
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/applications"
              icon={HiViewBoards}
              className="mb-4"
            >
              Applications
            </Sidebar.Item>
            <Sidebar.Item href="/jobs" icon={HiInbox} className="mb-4">
              Job Posting
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className="mb-4">
              Schedules
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <div className="absolute bottom-0 w-full">
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Notifications
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Settings
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </div>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SideBar;
