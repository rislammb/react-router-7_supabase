import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h5>Dashboard</h5>
      <Outlet />
    </div>
  );
}
