import React from "react";

const Example2: React.FC = () => {
  enum Actions {
    GOOD_MORNING = "Good Morning",
    GOOD_AFTERNOON = "Good Afternoon",
    GOOD_EVENING = "Good Evening",
  }

  interface initialStateType {
    msg: string;
  }

  interface actionType {
    type: string;
  }

  const initialState: initialStateType = {
    msg: "Alex",
  };

  const reducer = (state: initialStateType, action: actionType) => {
    switch (action.type) {
      case Actions.GOOD_MORNING:
        return { msg: Actions.GOOD_MORNING };
      case Actions.GOOD_AFTERNOON:
        return { msg: Actions.GOOD_AFTERNOON };
      case Actions.GOOD_EVENING:
        return { msg: Actions.GOOD_EVENING };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const funGm = () => {
    dispatch({ type: Actions.GOOD_MORNING });
  };
  const funGa = () => {
    dispatch({ type: Actions.GOOD_AFTERNOON });
  };
  const funGe = () => {
    dispatch({ type: Actions.GOOD_EVENING });
  };

  return (
    <>
      <div className="card w-50 mt-5">
        <div className="card-header">
          <h1>useReducer</h1>
        </div>
        <div className="card-body">
          <p className="h3 mb-4">
            Hello <span>{state.msg}</span>
          </p>
          <button className="btn btn-success me-3" onClick={funGm}>
            Good Morning
          </button>
          <button className="btn btn-primary me-3" onClick={funGa}>
            Good Afternoon
          </button>
          <button className="btn btn-danger me-3" onClick={funGe}>
            Good Evening
          </button>
        </div>
      </div>
    </>
  );
};

export default Example2;
