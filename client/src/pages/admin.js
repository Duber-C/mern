import Logo from "../components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../components/table";
import React, { useState } from "react";
import axios from "axios";
import Loading from "./loading";

function Admin() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/tickets")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <main className="admin-layout">
          <aside className="sidebar">
            <div className="sidebar-brand">
              <Logo width="32" height="32" />
              <h1 style={{ marginLeft: "1em" }}>Dashboard</h1>
            </div>
            <nav>
              <a className="sidebar-link">
                <FontAwesomeIcon icon={faChartPie} onClick={() => {}} />
                <p>Overview</p>
              </a>
            </nav>
          </aside>
          <div style={{ margin: "0em 2em 2em 2em" }}>
            <header className="admin-header row">
              <h1 className="title">Tickets</h1>
              <div>
                <FontAwesomeIcon
                  className="header-icon"
                  icon={faSearch}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  className="header-icon"
                  icon={faBell}
                  onClick={() => {}}
                />
              </div>
              <div className="header-profile row">
                <p className="subtitle">Jones Ferdinand</p>
                <img
                  className="circle circle-border"
                  src="https://picsum.photos/200/300"
                  width={40}
                  height={40}
                />
              </div>
            </header>
            <Table data={data ? data : []} />
          </div>
        </main>
      )}
    </div>
  );
}

export default Admin;
