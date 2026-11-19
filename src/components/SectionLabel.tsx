import type { ReactNode } from "react";

type Props = {
  index: string;
  children: ReactNode;
  action?: ReactNode;
};

export default function SectionLabel({ index, children, action }: Props) {
  return (
    <div className="section-label">
      <span className="section-index">{index}</span>
      <span className="section-title">{children}</span>
      <span className="section-rule" aria-hidden="true" />
      {action}
    </div>
  );
}
