import React, { useState } from "react";
import { IUser } from "../../models/user";

const Login: React.FC = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  const onInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert(JSON.stringify(user));
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <form>
                {/* <pre>{JSON.stringify(user)}</pre> */}
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="UserName"
                  value={user.name}
                  onChange={onInputChnage}
                  required
                />
                <input
                  name="email"
                  type="email"
                  className="form-control mt-3"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={onInputChnage}
                  required
                />
                <input
                  name="password"
                  type="password"
                  className="form-control mt-3"
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={onInputChnage}
                  required
                />
                <input
                  type="submit"
                  className="btn btn-primary mt-3"
                  value={"Register"}
                  onClick={handelSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
