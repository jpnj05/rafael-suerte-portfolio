import { useManilaTime } from "../hooks/useManilaTime";

type Props = {
  label?: string;
  className?: string;
};

export default function LocalTime({ label = "Local time", className = "" }: Props) {
  const time = useManilaTime();

  return (
    <span className={`local-time ${className}`.trim()}>
      {label} <time>{time}</time> <span className="local-tz">PHT</span>
    </span>
  );
}
