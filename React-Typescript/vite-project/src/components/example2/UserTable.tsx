import React from "react";
import { userServices } from "../../services/userServices";
import { IUser } from "../../models/IUser";

interface IProps {
  tableDataFunction: (msg: IUser) => void;
}

const UserTable: React.FC<IProps> = ({ tableDataFunction }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = React.useState<IUser[]>(userServices.getUsers());

  const handleClick = (item: IUser) => {
    // alert(JSON.stringify(item));
    tableDataFunction(item);
  };
  return (
    <>
      <table className="table table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody className="table-success">
          {users.map((item) => {
            return (
              <tr key={item.login.uuid} onClick={() => handleClick(item)}>
                <td>
                  {item.login.uuid.substring(
                    item.login.uuid.length - 5,
                    item.login.uuid.length
                  )}
                </td>
                <td>{item.name.first}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.login.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
