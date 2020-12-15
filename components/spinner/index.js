import React from "react";
import Styles from './index.module.css'
const SpinnerPage = () => {
  return (
    <div className={`col-12 ${Styles.spinnerPage}`}>
      <div class={`spinner-border ${Styles.spinner}`} role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
  );
}

export default SpinnerPage;