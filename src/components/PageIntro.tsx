import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: string[];
};

export default function PageIntro({ eyebrow, title, lede, meta }: Props) {
  return (
    <header className="page-head">
      <div className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        {eyebrow}
      </div>
      <h1 className="display">{title}</h1>
      {lede ? <p className="page-lede">{lede}</p> : null}
      {meta ? (
        <div className="page-head-meta">
          {meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : null}
    </header>
  );
}
