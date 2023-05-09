import React from "react"
import NavBar from "./../../components/NavBar.tsx"
import DashboardMainContainer from './containers/DashboardMainContainer.tsx'

const Dashboard: React.FC = (props) => {
  return (
    <div>
      <NavBar />
      <DashboardMainContainer />
    </div>
  )
};

export default Dashboard;
