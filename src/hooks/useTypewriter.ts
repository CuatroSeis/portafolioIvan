import { useEffect, useState } from "react";

/** Typewriter simple: escribe `text` a `speed` ms por caracter. Si `instant`, devuelve el texto completo. */
export function useTypewriter(text: string, speed = 28, instant = false): string {
  const [output, setOutput] = useState<string>(instant ? text : "");

  useEffect(() => {
    if (instant) {
      setOutput(text);
      return;
    }
    setOutput("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, instant]);

  return output;
}
