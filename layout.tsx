@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-orbitron: "Orbitron", "Rajdhani", "Arial", sans-serif;
  --font-rajdhani: "Rajdhani", "Inter", "Arial", sans-serif;
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: #0b0f0c;
}

body {
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background:
    radial-gradient(circle at top left, rgba(57, 255, 20, 0.11), transparent 28rem),
    linear-gradient(180deg, #0b0f0c 0%, #101a12 48%, #0b0f0c 100%);
  color: #e6e6e6;
  font-family: var(--font-rajdhani);
  letter-spacing: 0;
}

body::before {
  pointer-events: none;
  content: "";
  position: fixed;
  inset: 0;
  z-index: 80;
  background:
    linear-gradient(rgba(57, 255, 20, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(57, 255, 20, 0.025) 1px, transparent 1px);
  background-size: 100% 6px, 72px 72px;
  mix-blend-mode: screen;
  opacity: 0.42;
}

a {
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

::selection {
  background: rgba(57, 255, 20, 0.85);
  color: #0b0f0c;
}
