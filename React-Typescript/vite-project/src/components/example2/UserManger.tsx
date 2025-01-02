import React from "react";
import UserTable from "./UserTable";
import UserCard from "./UserCard";
import { IUser } from "../../models/IUser";

const UserManger: React.FC = () => {
  const [tableData, setTableData] = React.useState<IUser>();

  const tableDataFunction = (msg: IUser) => {
    setTableData(msg);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="h1 text-success">User Manager</h1>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut sed
            deleniti praesentium odio nisi ipsa temporibus exercitationem magnam
            at. Totam nostrum, officiis quibusdam enim dolor explicabo, ea
            adipisci voluptatem qui doloremque molestias sint?
          </p>
          {/* <pre>{JSON.stringify(tableData)}</pre> */}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <UserTable tableDataFunction={tableDataFunction} />
        </div>
        <div className="col-sm-4">
          <UserCard tableData={tableData} />
        </div>
      </div>
    </>
  );
};

export default UserManger;
