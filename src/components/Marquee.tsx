type Props = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className = "" }: Props) {
  const group = (
    <div className="marquee-group">
      {items.map((item, index) => (
        <span className="marquee-item" key={`${item}-${index}`}>
          {item}
          <span className="marquee-star" aria-hidden="true">
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`.trim()} aria-hidden="true">
      <div className="marquee-track">
        {group}
        {group}
      </div>
    </div>
  );
}
