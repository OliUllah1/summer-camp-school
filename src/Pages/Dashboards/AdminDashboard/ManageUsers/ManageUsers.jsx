import React from "react";
import DashboardNavBar from "../../DashboardNavBar/DashboardNavBar";
import UserInformation from "./UserInformation";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/allusers");
    return res.data;
  });
  return (
    <div className="w-[100%]">
      <DashboardNavBar>Manages Users</DashboardNavBar>

      <div className="w-[100%]">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className="bg-[#eb1551] text-white">
                <th>No</th>
                <th>User Profile</th>
                <th>User Information</th>
                <th>Role</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserInformation
                  user={user}
                  index={index}
                  key={user._id}
                  refetch={refetch}
                ></UserInformation>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
