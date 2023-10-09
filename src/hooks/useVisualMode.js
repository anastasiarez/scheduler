import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setHistory((prev) => (replace ? [...prev.slice(0, -1), newMode] : [...prev, newMode]));
    setMode(newMode);
  };
  const back = () => {

    if (history.length > 1) {

      const newHistory = history.slice(0, -1);
      setHistory(newHistory);

      // Update the mode to the previous mode
      setMode(newHistory[newHistory.length - 1]);
    }
  };

  return { mode, transition, back };
}
