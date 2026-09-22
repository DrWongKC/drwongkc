import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div style={{ padding: 25, textAlign: "center" }}>
      <h1>404: Page Not Found</h1>
      <p>
        Please return to the{" "}
        <Link
          to="/drwongkc"
          style={{ textDecoration: "underline", color: "#f46036" }}
        >
          Home
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
