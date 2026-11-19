import { useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";
import SectionLabel from "../components/SectionLabel";
import { projects } from "../data/site";
import type { Project, ProjectCategory } from "../data/site";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Web",
  "Product",
  "Identity",
];

const process = [
  {
    title: "Listen & frame",
    body: "A short conversation, then a one-page brief: who it is for, what it must say, and how it should feel in a sentence.",
  },
  {
    title: "Draw in the open",
    body: "Wireframes and type tests early, in the browser when possible. Feedback happens on something real, not a deck.",
  },
  {
    title: "Build & hand over",
    body: "Accessible, responsive React. A tidy component set, a short walkthrough, and nothing that needs me to keep it running.",
  },
];

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const shown =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Container className="shell">
        <PageIntro
          eyebrow="Work — 2024 / 2026"
          title={
            <>
              Selected
              <br />
              <em>interfaces.</em>
            </>
          }
          lede="Four projects that taught me something: a study planner, a coffee storefront, a textile archive, and a conference that needed a pulse."
          meta={["Product design", "Front-end", "Identity"]}
        />

        <div className="filter-group" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <Button
              key={item}
              className={`filter-btn${filter === item ? " is-active" : ""}`}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
            </Button>
          ))}
          <span className="filter-count">
            {String(shown.length).padStart(2, "0")} projects
          </span>
        </div>

        <Row className="g-4">
          {shown.map((project) => (
            <Col md={6} key={project.slug}>
              <ProjectCard
                project={project}
                cta="Read the case"
                onOpen={() => setActive(project)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <section className="section">
        <Container className="shell">
          <SectionLabel index="02">How it goes</SectionLabel>
          <Row className="g-4 process-row">
            {process.map((step, index) => (
              <Col md={4} key={step.title}>
                <span className="process-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="process-title">{step.title}</h2>
                <p className="process-body">{step.body}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Container className="shell">
        <div className="work-outro">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            More where that came from
          </p>
          <h2 className="display">
            The archive is small
            <br />
            <em>on purpose.</em>
          </h2>
          <p className="page-lede">
            I only show work I can still stand behind. If you want to see
            something closer to what you are building, ask — I keep a longer
            deck of process work and half-finished things.
          </p>
          <Link className="btn btn-ink" to="/contact">
            Ask for the full archive <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Container>

      <Modal
        show={Boolean(active)}
        onHide={() => setActive(null)}
        centered
        size="lg"
        aria-labelledby="case-title"
      >
        {active ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="case-title">
                {active.index} — {active.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-meta">
                <span>{active.year}</span>
                <span>{active.category}</span>
                <span>{active.role}</span>
              </div>
              {active.detail.map((paragraph) => (
                <p key={paragraph} className="modal-text">
                  {paragraph}
                </p>
              ))}
              <div className="tag-row">
                {active.stack.map((item) => (
                  <Badge pill bg="" className="tag" key={item}>
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="modal-outcome">
                <span>Outcome</span>
                {active.outcome}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="link"
                className="modal-close"
                onClick={() => setActive(null)}
              >
                Close
              </Button>
              <Link
                className="btn btn-ink"
                to="/contact"
                onClick={() => setActive(null)}
              >
                Ask for the case study <span aria-hidden="true">↗</span>
              </Link>
            </Modal.Footer>
          </>
        ) : null}
      </Modal>
    </>
  );
}
