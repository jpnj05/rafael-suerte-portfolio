import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container className="shell">
      <div className="notfound">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Error 404 — lost page
        </p>
        <p className="notfound-num">404</p>
        <h1 className="display">
          This page went
          <br />
          <em>out for coffee.</em>
        </h1>
        <p className="page-lede notfound-lede">
          The link is broken, the page moved, or it never existed. Either way,
          there is a perfectly good index one click away.
        </p>
        <div className="notfound-actions">
          <Link className="btn btn-ink" to="/">
            Back to index <span aria-hidden="true">↗</span>
          </Link>
          <Link className="btn btn-outline-ink" to="/contact">
            Report a broken link
          </Link>
        </div>
      </div>
    </Container>
  );
}
