import React, { useState } from "react";
import { WartchServices } from "../../services/watch";
import { IWatch } from "../../models/IWatch";

const Cart:React.FC = () => {
  const [watchs, setWatchs] = useState(WartchServices.getWatchs());

  const incrQty = (productId: string): void => {
    const result = watchs.map((watch) => {
      if (watch.id === productId) {
        return {
          ...watch,
          qty: watch.qty + 1,
        };
      }
      return watch;
    });
    setWatchs(result);
  };
  const decrQty = (productId: string): void => {
    const result = watchs.map((watch) => {
      if (watch.id === productId) {
        return {
          ...watch,
          qty: watch.qty - 1 > 1 ? watch.qty - 1 : 1,
        };
      }
      return watch;
    });
    setWatchs(result);
  };

  const deleteWatch = (productId: string): void => {
    const result = watchs.filter((watch) => {
      if (watch.id !== productId) {
        return watch;
      }
    });
    setWatchs(result);
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-success">Add To Cart</h1>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              deleniti. Minus maxime reiciendis ad, cumque similique tempore! Ut
              et modi veniam, accusamus distinctio nihil maxime voluptas dolorum
              voluptate, ex odio ducimus hic facilis cupiditate.
            </p>
          </div>
        </div>
        {watchs.length > 0 && watchs ? (
          <div className="row mt-2">
            <div className="col">
              <table className="table table-striped table-hover shadow-lg text-center">
                <thead className="table-success">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {watchs.map((item: IWatch) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="image-fluid"
                          />
                        </td>
                        <td>{item.price}</td>
                        <td>
                          <i
                            className="bi bi-dash-circle-fill text-success me-1"
                            onClick={() => {
                              decrQty(item.id);
                            }}
                          ></i>
                          {item.qty}
                          <i
                            className="bi bi-plus-circle-fill ms-1 text-success"
                            onClick={() => {
                              incrQty(item.id);
                            }}
                          ></i>
                        </td>
                        <td>{item.qty * item.price} </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteWatch(item.id);
                            }}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-12">
              <div className="card bg-danger-subtle text-center shadow-lg">
                <div className="card-body">
                  <h1>No Products Avilable</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
