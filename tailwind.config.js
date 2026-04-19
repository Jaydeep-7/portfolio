/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light editorial palette
        page:    "#FAFAF8",          // warm off-white — page background
        surface: "#F4F4F5",          // zinc-100 — card / surface
        border:  "#E4E4E7",          // zinc-200 — dividers, borders
        muted:   "#71717A",          // zinc-500 — secondary text
        ink:     "#18181B",          // zinc-900 — primary text
        accent:  "#4F46E5",          // indigo-600 — links, highlights
        "accent-light": "#EEF2FF",   // indigo-50 — accent bg tint
      },
      fontFamily: {
        sans:    ["var(--font-manrope)",    "Manrope",       "sans-serif"],
        display: ["var(--font-newsreader)", "Newsreader",    "serif"],
        mono:    ["var(--font-jetbrains)",  "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
