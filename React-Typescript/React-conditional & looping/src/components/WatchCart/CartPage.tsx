import React, { useState } from "react";
import { IWatch } from "../../models/IWatch";
import { WartchServices } from "../../services/watch";

const CartPage = () => {
  const [watchs, setWatchs] = useState<IWatch[]>(WartchServices.getWatchs());

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-success">Watch Cart</h1>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              deleniti. Minus maxime reiciendis ad, cumque similique tempore! Ut
              et modi veniam, accusamus distinctio nihil maxime voluptas dolorum
              voluptate, ex odio ducimus hic facilis cupiditate.
            </p>
          </div>
        </div>
        <div className="row">
          {watchs.map((item) => {
            return (
              <div className="card w-25 m-3">
                <div className="card-header">
                  <img
                    src={item.imgUrl}
                    alt={item.imgUrl}
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  {item.inventory > 5 && (
                    <p className="card-text text-primary">
                      Availability: Available
                    </p>
                  )}
                  {item.inventory > 0 && item.inventory <= 5 && (
                    <p className="card-text text-success">
                      Availability: Few Left{" "}
                      <span className="fw-bold">({item.inventory})</span>
                    </p>
                  )}
                  {item.inventory === 0 && (
                    <p className="card-text text-danger">
                      Availability: Out of stock
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CartPage;
