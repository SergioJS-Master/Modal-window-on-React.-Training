import React from "react";
import "./container.css";
import { Modal } from "../Modal/Modal";
import { Window } from "../WindowAccept/Window";
import { useState } from "react";
import containerStyle from "./container.module.css"

export function Container() {
  const [isOpenModal, setIsOpenModal] = useState(false) 

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const openModal = () => {
    setIsOpenModal(true)
  }
  return (
    <div className={containerStyle.container__btn}>
      <div className={containerStyle.container_btn_style}>
        <button
          className={containerStyle.btn}
          data-btnmodal
          type="button"
          onClick={openModal}
        >
          Don't click
        </button>
      </div>
      <Modal
        isOpen={isOpenModal}
        closeHandler={closeModal}
      >
        <div className={containerStyle.buttonCloseXContainer}>
          <button
            className={containerStyle.buttonCloseX}
            type="button"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <Window/>
      </Modal>
    </div>
  );
}
