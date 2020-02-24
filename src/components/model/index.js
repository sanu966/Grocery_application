import React from "react";
import Cart from "../../containers/cart";
import "../../styles/model.scss";

function Model(props) {
  const { show, handleClose } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return <div className={`modal-main ${showHideClassName}`}>
    <Cart handleClose={handleClose} />
  </div>;
}

export default Model;