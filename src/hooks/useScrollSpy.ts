import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const onScroll = (): void => {
      const offset = 120;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}
