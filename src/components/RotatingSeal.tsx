import { useId } from "react";

type Props = {
  text: string;
  className?: string;
};

export default function RotatingSeal({ text, className = "" }: Props) {
  const pathId = `seal-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      className={`seal ${className}`.trim()}
      viewBox="0 0 120 120"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <path
          id={pathId}
          d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
        />
      </defs>
      <circle className="seal-ring" cx="60" cy="60" r="57" />
      <g className="seal-spin">
        <text className="seal-text">
          <textPath href={`#${pathId}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </g>
      <text className="seal-mark" x="60" y="66" textAnchor="middle">
        ✳
      </text>
    </svg>
  );
}
