import React from "react";
import windowStyle from "./window.module.css"

export function Window() {
    return (
      <div data-hidden className={windowStyle.windowContainer}>
        <div className={windowStyle.windowWr}>
          <p>You lose</p>
        </div>
      </div>
    )
}