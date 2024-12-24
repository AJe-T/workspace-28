import React, { useState } from "react";

interface IMobile {
  model: string;
  color: string;
  ram: string;
  price: string;
}

const Mobile: React.FC = () => {
  const [mobile, setMobile] = useState<IMobile>({
    model: "",
    color: "",
    ram: "",
    price: "",
  });
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);

  const upGrade = (): void => {
    setIsModelOpen(true);
  };
  const downGrade = (): void => {
    setIsModelOpen(true);
  };

  const formHandel = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setMobile({
      ...Mobile,
      model: event.target[0].value,
      color: event.target[1].value,
      ram: event.target[2].value,
      price: event.target[3].value,
    });
    setIsModelOpen(false);
  };

  return (
    <>
      <div
        className="container d-flex flex-row justify-content-between "
        style={{ height: "100vh" }}
      >
        <div className="card mt-5  h-25 shadow-lg bg-danger-subtle ">
          <div className="card-header">
            <p>{JSON.stringify(mobile)}</p>
          </div>
          <div className="card-body">
            <button onClick={upGrade} className="btn btn-primary  me-3">
              UpGrade
            </button>
            <button className="btn btn-success" onClick={downGrade}>
              DownGrade
            </button>
          </div>
        </div>
        {isModelOpen && (
          <div className="w-50 bg-danger-subtle p-5 m-5 rounded-3">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Mobile Form
                  </h1>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={() => {
                      formHandel(event);
                    }}
                  >
                    <div className="mb-2">
                      <label htmlFor="model" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Model"
                        required
                        name="model"
                        id="model"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="color" className="form-label">
                        Color
                      </label>
                      <input
                        type="text"
                        placeholder="Enter color"
                        required
                        name="color"
                        id="color"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="ram" className="form-label">
                        RAM
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Ram"
                        required
                        name="ram"
                        id="ram"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <input
                        type="text"
                        placeholder="Enter price"
                        required
                        name="price"
                        id="price"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">
                      Save changes
                    </button>
                    <button
                      onClick={() => {
                        setIsModelOpen(false);
                      }}
                      className="btn btn-dark ms-4  mt-4"
                    >
                      close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Mobile;
