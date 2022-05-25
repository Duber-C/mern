import Logo from "../components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../components/table";

function Admin() {
  return (
    <main className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Logo width="32" height="32" />
          <h1>Dashboard</h1>
        </div>
        <nav>
          <a className="sidebar-link">
            <FontAwesomeIcon icon={faChartPie} onClick={() => {}} />
            <p>Overview</p>
          </a>
        </nav>
      </aside>
      <div>
        <header className="admin-header row">
          <h1 className="title">Tikets</h1>
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
        <div className="table-wrapper">
          <Table
            data={[
              { uno: 1, dos: 2 },
              { uno: 1, dos: 2 },
            ]}
          />
        </div>
      </div>
    </main>
  );
}

export default Admin;
