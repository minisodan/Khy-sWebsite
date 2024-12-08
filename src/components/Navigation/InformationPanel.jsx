import React, { useState } from "react";
import "./Shortcut.css";

function InfoPanel({ title, content }) {
  return (
    <div className="icon-container">
      <div className="tooltip">
        <div className="tooltip-header">Keyboard shortcuts:</div>
        <ul className="tooltip-list">
          <li>
            <span className="shortcut">Ctrl+1</span> Go to Portfolio
          </li>
          <li>
            <span className="shortcut">Ctrl+2</span> Go to About
          </li>
          <li>
            <span className="shortcut">Ctrl+3</span> Go to Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoPanel;
