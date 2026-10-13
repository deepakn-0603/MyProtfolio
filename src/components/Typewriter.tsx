"use client";

import { useEffect, useState } from "react";

const name = "DEEPAK";

export function Typewriter() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (isDeleting) {
        if (text.length === 0) {
          setIsDeleting(false);
        } else {
          setText(text.slice(0, -1));
        }
      } else if (text.length === name.length) {
        setIsDeleting(true);
      } else {
        setText(name.slice(0, text.length + 1));
      }
    }, text === name ? 700 : isDeleting ? 55 : 95);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <span className="typewriter-text" aria-label={name}>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
