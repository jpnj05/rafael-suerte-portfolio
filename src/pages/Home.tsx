import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SectionLabel from "../components/SectionLabel";
import {
  heroMeta,
  nowItems,
  profile,
  projects,
  stats,
} from "../data/site";

const capabilities = [
  { key: "01", name: "Interface design" },
  { key: "02", name: "Front-end build" },
  { key: "03", name: "Type & identity" },
];

export default function Home() {
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <Container className="shell">
          <div className="hero-topline">
            <span>Portfolio</span>
            <span>Vol. 04 / 2026</span>
            <span className="hero-topline-right">Metro Manila, PH</span>
          </div>

          <Row className="hero-top g-4 g-lg-5">
            <Col lg={7} className="hero-copy">
              <h1 className="hero-name">
                <span>Rafael</span>
                <span className="hero-line-2">Felipe</span>
                <span className="hero-line-3">
                  Suerte
                  <span className="hero-dot" aria-hidden="true">
                    .
                  </span>
                </span>
              </h1>

              <p className="hero-lede">{profile.intro}</p>

              <div className="hero-actions">
                <Link to="/work" className="btn btn-ink">
                  See the work <span aria-hidden="true">↗</span>
                </Link>
                <Link to="/about" className="btn btn-outline-ink">
                  Résumé
                </Link>
              </div>
            </Col>

            <Col lg={5}>
              <figure className="portrait">
                <div className="portrait-frame">
                  <img
                    src="/portrait.jpg"
                    alt="Portrait of Rafael Felipe Suerte"
                    width={880}
                    height={1184}
                  />
                </div>
                <div className="portrait-sticker" aria-hidden="true">
                  <span>Open for work</span>
                  <strong>2026</strong>
                  <span>Manila, PH</span>
                </div>
                <figcaption>Fig. 01 — Rafael, at home in Manila</figcaption>
              </figure>
            </Col>
          </Row>

          <div className="hero-meta">
            {heroMeta.map((item) => (
              <div className="hero-meta-item" key={item.key}>
                <span className="hero-meta-key">{item.key}</span>
                <span className="hero-meta-value">{item.value}</span>
              </div>
            ))}
            <span className="hero-meta-scroll" aria-hidden="true">
              Scroll ↓
            </span>
          </div>
        </Container>
      </section>

      <section className="capabilities">
        <Container className="shell">
          <div className="cap-grid">
            {capabilities.map((item) => (
              <div className="cap-cell" key={item.key}>
                <span className="cap-key">{item.key}</span>
                <span className="cap-name">{item.name}</span>
              </div>
            ))}
            <div className="cap-cell cap-cell-lime">
              <span className="cap-key">04</span>
              <span className="cap-name">Open for work</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="stats">
        <Container className="shell">
          <Row className="g-0">
            {stats.map((stat) => (
              <Col xs={12} md={4} className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container className="shell">
          <SectionLabel
            index="01"
            action={
              <Link className="section-action" to="/work">
                All projects <span aria-hidden="true">↗</span>
              </Link>
            }
          >
            Selected work
          </SectionLabel>

          <Row className="g-4">
            {featured.map((project) => (
              <Col md={6} lg={4} key={project.slug}>
                <ProjectCard
                  project={project}
                  cta="View project"
                  onOpen={() => navigate("/work")}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container className="shell">
          <Row className="g-4 g-lg-5 align-items-start">
            <Col lg={5}>
              <SectionLabel index="02">Approach</SectionLabel>
              <h2 className="display">
                Built loud.
                <br />
                <em>Shipped quiet.</em>
              </h2>
              <p className="page-lede">
                I start with the words and the grid, then build the smallest
                version that still has a pulse. Tested at 320px, with a keyboard,
                on a slow phone — before it goes anywhere near a launch.
              </p>
            </Col>

            <Col lg={6} className="ms-lg-auto">
              <Card className="now-card">
                <Card.Header>Currently</Card.Header>
                <ListGroup variant="flush">
                  {nowItems.map((item) => (
                    <ListGroup.Item key={item.label}>
                      <span className="now-key">{item.label}</span>
                      <span className="now-value">{item.value}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta">
        <Container className="shell">
          <div className="cta-inner">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Open for work
              </p>
              <h2>
                Have something
                <br />
                <em>worth making?</em>
              </h2>
            </div>
            <div className="cta-side">
              <p>
                I take on a handful of projects each term — a site, a small
                product, a brand that needs a voice. Tell me what you are
                building and what it should feel like.
              </p>
              <Link className="btn btn-ink" to="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
