import {
  Accordion,
  Button,
  Col,
  Container,
  ListGroup,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";
import PageIntro from "../components/PageIntro";
import {
  education,
  experience,
  profile,
  recognition,
  skills,
} from "../data/site";

export default function About() {
  return (
    <Container className="shell">
      <PageIntro
        eyebrow="About — Résumé"
        title={
          <>
            Quiet systems,
            <br />
            <em>loud details.</em>
          </>
        }
        lede={profile.bio[0]}
        meta={[profile.location, "Available Q1 2027", "BS Information Technology"]}
      />

      <Row className="g-4 g-lg-5 align-items-start resume-row">
        <Col lg={4}>
          <aside className="profile-card">
            <img
              src="/portrait.jpg"
              alt="Portrait of Rafael Felipe Suerte"
              width={880}
              height={1184}
            />
            <h2 className="profile-name">{profile.name}</h2>
            <p className="profile-role">{profile.role}</p>

            <ListGroup variant="flush" className="profile-list">
              <ListGroup.Item>
                <span className="contact-key">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="contact-key">Phone</span>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="contact-key">Location</span>
                <span>{profile.location}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="contact-key">Status</span>
                <span>{profile.status}</span>
              </ListGroup.Item>
            </ListGroup>

            <div className="profile-actions">
              <Button className="btn-ink" onClick={() => window.print()}>
                Print résumé <span aria-hidden="true">↗</span>
              </Button>
              <a className="btn btn-outline-ink" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>

            <div className="profile-socials">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </aside>
        </Col>

        <Col lg={8}>
          <section className="resume-block">
            <h2 className="resume-heading">
              <span className="num">01</span> Profile
            </h2>
            {profile.bio.map((paragraph) => (
              <p className="resume-text" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </section>

          <section className="resume-block">
            <h2 className="resume-heading">
              <span className="num">02</span> Experience
            </h2>
            <Accordion defaultActiveKey="0" flush className="resume-accordion">
              {experience.map((job, index) => (
                <Accordion.Item eventKey={String(index)} key={job.role}>
                  <Accordion.Header>
                    <span className="job-head">
                      <span className="job-period">{job.period}</span>
                      <span className="job-title">{job.role}</span>
                      <span className="job-org">
                        {job.company} · {job.location}
                      </span>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="job-points">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </section>

          <section className="resume-block">
            <h2 className="resume-heading">
              <span className="num">03</span> Education
            </h2>
            <Table borderless responsive className="resume-table">
              <tbody>
                {education.map((item) => (
                  <tr key={item.school}>
                    <td>{item.period}</td>
                    <td>
                      <span className="edu-school">{item.school}</span>
                      <span className="edu-detail">{item.detail}</span>
                      <span className="edu-note">{item.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>

          <section className="resume-block">
            <h2 className="resume-heading">
              <span className="num">04</span> Skills
            </h2>
            <Row className="g-4">
              {skills.map((group) => (
                <Col md={6} key={group.group}>
                  <p className="skill-group">{group.group}</p>
                  {group.items.map((skill) => (
                    <div className="skill" key={skill.name}>
                      <div className="skill-head">
                        <span>{skill.name}</span>
                        <span className="skill-num">{skill.level}</span>
                      </div>
                      <ProgressBar
                        now={skill.level}
                        label={`${skill.name}: ${skill.level} out of 100`}
                        visuallyHidden
                      />
                    </div>
                  ))}
                </Col>
              ))}
            </Row>
          </section>

          <section className="resume-block">
            <h2 className="resume-heading">
              <span className="num">05</span> Recognition
            </h2>
            <ListGroup variant="flush" className="award-list">
              {recognition.map((item) => (
                <ListGroup.Item key={item.title}>
                  <span className="award-year">{item.year}</span>
                  <span className="award-body">
                    <span className="award-title">{item.title}</span>
                    <span className="award-org">{item.org}</span>
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
