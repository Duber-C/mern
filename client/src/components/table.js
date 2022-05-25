import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowUpWideShort,
  faFilter,
  faEllipsisVertical,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Table(props) {
  const [rpp, setRpp] = React.useState(8);
  const [page, setPage] = React.useState(1);

  const colors = {
    high: "#F12B2C",
    normal: "#29CC97",
    low: "#FEC400",
  };

  return (
    <div className="content-wrapper">
      <div className="row " style={{ padding: "1.5em", marginBottom: "2em" }}>
        <h3
          className="subtitle"
          style={{ fontSize: "19px", fontWeight: "700", flexGrow: 1 }}
        >
          All tickets
        </h3>
        <div style={{ justifySelf: "end" }} className="row">
          <div style={{ marginRight: "2em" }} className="row">
            <FontAwesomeIcon
              style={{ marginRight: "0.5em" }}
              width={12}
              height={12}
              icon={faArrowUpWideShort}
              onClick={() => {}}
            />
            <p className="subtitle">Sort</p>
          </div>
          <div className="row">
            <FontAwesomeIcon
              style={{ marginRight: "0.5em" }}
              width={12}
              height={12}
              icon={faFilter}
              onClick={() => {}}
            />
            <p className="subtitle">Filter</p>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Ticket details</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Priority</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.slice(0, rpp).map((row, index) => (
              <tr key={index}>
                <td className="row">
                  <img
                    className="circle"
                    src="https://picsum.photos/200/300"
                    width={40}
                    height={40}
                    style={{ marginRight: "1em" }}
                  />
                  <div>
                    <p className="subtitle">Constact email not linked</p>
                    <p className="subparagraph">Updated at 1 day ago</p>
                  </div>
                </td>
                <td>
                  <p className="subtitle">Tom cruise</p>
                  <p className="subparagraph">on 24.05.2019</p>
                </td>
                <td>
                  <div className="column">
                    <p className="subtitle">may 26,2019</p>
                    <p className="subparagraph">6:30 PM</p>
                  </div>
                </td>
                <td>
                  <span
                    style={{
                      backgroundColor: colors["high"],
                    }}
                  >
                    high
                  </span>
                </td>
                <td style={{ width: "50px" }}>
                  <FontAwesomeIcon
                    className="header-icon"
                    style={{ cursor: "pointer", color: "#C5C7CD" }}
                    icon={faEllipsisVertical}
                    onClick={() => {}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "grid",
          justifyItems: "end",
          padding: "1.5em 0 1.5em 0",
        }}
      >
        <div className="row">
          <div style={{ marginRight: "1em", gap: "0.5em" }} className="row">
            <p className="subparagraph">Rows per page:</p>
            <div style={{ position: "relative" }}>
              <select name="rpp" id="rpp" className="subtitle dropdown-rpp">
                <option
                  value="8"
                  onClick={() => {
                    setRpp(8);
                  }}
                >
                  8
                </option>
                <option
                  onClick={() => {
                    setRpp(16);
                  }}
                >
                  16
                </option>
                <option
                  value="32"
                  onClick={() => {
                    setRpp(32);
                  }}
                >
                  32
                </option>
                <option
                  value="64"
                  onClick={() => {
                    setRpp(64);
                  }}
                >
                  64
                </option>
              </select>
              <FontAwesomeIcon className="dropdown-icon" icon={faCaretDown} />
            </div>
          </div>
          <p style={{ marginRight: "1em" }} className="subparagraph">
            {page}-{rpp * page} of {props.data.length}
          </p>
          <FontAwesomeIcon
            className="header-icon"
            icon={faChevronLeft}
            onClick={() => {
              setPage(page > 1 ? page - 1 : page);
            }}
          />
          <FontAwesomeIcon
            className="header-icon"
            icon={faChevronRight}
            onClick={() => {
              setPage(page <= props.data.length / rpp ? page + 1 : page);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
