import Logo from "../components/logo";

function NotFound() {
  return (
    <main
      style={{
        backgroundColor: "#363740",
        height: "100vh",
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        color: "gray",
        fontSize: "20px",
      }}
    >
      <div style={{ display: "grid", justifyItems: "center" }}>
        <Logo width="50" height="50" />
        <p>There's nothing here!</p>
      </div>
    </main>
  );
}

export default NotFound;
