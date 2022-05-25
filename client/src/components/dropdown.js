import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown(props) {
  const [dropdown, setDropdown] = React.useState(false);

  return (
    <div onClick={() => setDropdown(!dropdown)}>
      <div
        name="rpp"
        id="rpp"
        className="subtitle"
        style={{ display: dropdown ? "block" : "none" }}
      >
        <option
          value="8"
          onClick={() => {
            props.action(8);
          }}
        >
          8
        </option>
        <option
          onClick={() => {
            props.action(16);
          }}
        >
          16
        </option>
        <option
          value="32"
          onClick={() => {
            props.action(32);
          }}
        >
          32
        </option>
        <option
          value="64"
          onClick={() => {
            props.action(64);
          }}
        >
          64
        </option>
      </div>
      <FontAwesomeIcon
        className="header-icon"
        icon={faCaretDown}
        onClick={() => {}}
      />
    </div>
  );
}

export default Dropdown;
