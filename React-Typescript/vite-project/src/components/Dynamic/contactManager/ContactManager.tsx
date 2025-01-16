import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllContacts } from "../../../services/ContactServices";
import { IUsers } from "../../../models/IUsers";
import Spinner from "../../static/spinner/Spinner";
import ErrorMsg from "../../static/error/ErrorMsg";
// import Spinner from "../../static/spinner/Spinner";

interface IState {
  contacts: IUsers[];
  loading: boolean;
  error: string;
}

const ContactManager: React.FC = () => {
  const [state, setState] = useState<IState>({
    contacts: [],
    loading: false,
    error: "",
  });

  const { contacts, loading, error } = state;

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    getAllContacts()
      .then((res) => {
        setState({
          ...state,
          contacts: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        // alert(err.message);
        setState({
          ...state,
          loading: false,
          error: err.message,
        });
      });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {error && error.length > 0 ? (
        <ErrorMsg message={error} />
      ) : (
        <>
          <section className="">
            <div className="container mt-4">
              <div className="row">
                <div className="col">
                  <p className="h3">
                    {/* <pre>{JSON.stringify(contacts)}</pre> */}
                    Contact Manager
                    <Link
                      to="/add-contact"
                      className="btn btn-danger btn-sm ms-3"
                    >
                      <i className="bi bi-plus-circle pe-1"></i>New
                    </Link>
                  </p>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam perferendis at officiis placeat consequatur natus
                    deserunt ab fugiat fuga voluptatum! Ut eveniet, quae
                    deserunt, debitis, molestiae quam facere quod suscipit
                    perferendis iste consequuntur ex sit fugit reprehenderit
                    magni numquam atque excepturi quaerat. Aperiam, corporis
                    eius.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <form>
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          placeholder="sharch hear"
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <button className="btn btn-success">Search</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container mt-4">
              <div className="row">
                {contacts && contacts.length > 0 ? (
                  contacts.map((item, index) => {
                    return (
                      <div className="col-sm-6" key={index}>
                        <div className="card shadow-lg mb-3">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-3">
                                <img
                                  className="img-fluid rounded-circle"
                                  src={item.imageUrl}
                                  alt="img"
                                />
                              </div>
                              <div className="col-sm-8">
                                <ul className="list-group">
                                  <li className="list-group-item">
                                    Name :{" "}
                                    <span className="fw-bold">{item.name}</span>
                                  </li>
                                  <li className="list-group-item ">
                                    Email :{" "}
                                    <span className="fw-bold">
                                      {item.email}
                                    </span>
                                  </li>
                                  <li className="list-group-item ">
                                    Phone-No :{" "}
                                    <span className="fw-bold">
                                      {item.mobile}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-1 p-0">
                                <Link
                                  className="btn btn-primary mb-2 p-1"
                                  to="/view-contact"
                                >
                                  <i className="bi bi-eye-fill m-1"></i>
                                </Link>
                                <Link
                                  className="btn btn-info mb-2 p-1"
                                  to="/update-contact"
                                >
                                  <i className="bi bi-pencil-square m-1"></i>
                                </Link>
                                <Link
                                  className="btn btn-danger mb-2 p-1"
                                  to="/delete-contact"
                                >
                                  <i className="bi bi-trash-fill m-1"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div className="col-sm-12">
                      <div className="card bg-danger-subtle shadow-lg">
                        <div className="card-body">
                          <p className="h3 text-center text-danger">
                            No Contact Found
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ContactManager;
