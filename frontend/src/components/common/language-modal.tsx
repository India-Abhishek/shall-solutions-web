"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

export default function LanguageModal() {
  const { setLanguage } = useLanguage();

  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (!saved) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2>Choose Language</h2>

        <button
          onClick={() => {
            setLanguage("hi");
            setShow(false);
          }}
        >
          हिन्दी
        </button>

        <button
          onClick={() => {
            setLanguage("en");
            setShow(false);
          }}
          style={{ marginLeft: "1rem" }}
        >
          English
        </button>
      </div>
    </div>
  );
}