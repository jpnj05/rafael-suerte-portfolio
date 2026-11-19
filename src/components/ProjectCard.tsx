import { Badge, Button, Card } from "react-bootstrap";
import type { Project } from "../data/site";

type Props = {
  project: Project;
  cta: string;
  onOpen: () => void;
};

export default function ProjectCard({ project, cta, onOpen }: Props) {
  return (
    <Card className={`work-card cover-${project.cover}`}>
      <div className="work-cover" aria-hidden="true">
        <span className="work-cover-index">{project.index}</span>
        <span className="work-cover-mark">✳</span>
        <span className="work-cover-kind">{project.kind}</span>
      </div>

      <Card.Body>
        <div className="work-meta">
          <span>{project.year}</span>
          <span>{project.category}</span>
        </div>
        <Card.Title as="h3">{project.title}</Card.Title>
        <Card.Text>{project.summary}</Card.Text>
        <div className="tag-row">
          {project.stack.slice(0, 3).map((item) => (
            <Badge pill bg="" className="tag" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </Card.Body>

      <Card.Footer>
        <Button variant="link" className="work-open" onClick={onOpen}>
          {cta}
          <span aria-hidden="true">↗</span>
        </Button>
      </Card.Footer>
    </Card>
  );
}
