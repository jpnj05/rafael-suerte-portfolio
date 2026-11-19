import { useEffect, useState } from "react";
import { profile } from "../data/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: profile.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function useManilaTime() {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
