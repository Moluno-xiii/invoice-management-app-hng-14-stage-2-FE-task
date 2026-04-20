import { useEffect, useLayoutEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { GoSun } from "react-icons/go";

type ThemeMode = "light" | "dark" | "auto";

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "auto";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "auto") {
    return stored;
  }

  return "auto";
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolved);

  if (mode === "auto") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", mode);
  }

  document.documentElement.style.colorScheme = resolved;
}

const ThemeToggle = () => {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialMode());

  useLayoutEffect(() => {
    applyThemeMode(mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== "auto") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyThemeMode("auto");

    media.addEventListener("change", onChange);
    return () => {
      media.removeEventListener("change", onChange);
    };
  }, [mode]);

  function toggleMode() {
    const nextMode: ThemeMode =
      mode === "light" ? "dark" : mode === "dark" ? "light" : "light";
    setMode(nextMode);
    console.log("current mode", mode);
    console.log("next mode", nextMode);
    applyThemeMode(nextMode);
    window.localStorage.setItem("theme", nextMode);
  }

  return mode === "light" ? (
    <IoMoon
      color="#7E88C3"
      className="cursor-pointer self-center transition-all duration-500 hover:rotate-180"
      size={24}
      onClick={toggleMode}
    />
  ) : (
    <GoSun
      color="#7E88C3"
      className="cursor-pointer self-center transition-all duration-500 hover:rotate-180"
      size={24}
      onClick={toggleMode}
    />
  );
};

export default ThemeToggle;
