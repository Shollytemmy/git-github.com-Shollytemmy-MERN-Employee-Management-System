/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { dummyAdminDashboardData, dummyEmployeeDashboardData } from "../assets/assets"
import Loading from "../components/Loading"
import EmployeeDashboard from "./EmployeeDashboard"
import AdminDashboard from "./AdminDashboard"


const Dashboard = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setData(dummyAdminDashboardData)

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    
  }, [])

  if (isLoading) return <Loading />
  if (!data) return <p className="text-center text-slate-500 py-12">Fail to load dashboard</p>
  
  if (data.role === "ADMIN") {
    return <AdminDashboard data={data} />;
  } else {
    return <EmployeeDashboard data={data} />;
  }
 
}

export default Dashboard