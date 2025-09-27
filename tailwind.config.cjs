/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Core palette
        bg: "#0B0F19",
        surface: "rgba(255,255,255,0.04)",
        line: "rgba(255,255,255,0.12)",
        text: {
          DEFAULT: "#E6EAF2",
          soft: "#C6CCDA",
          dim: "#99A3B5",
        },
        accent: {
          1: "#22D3A3", // teal
          2: "#06B6D4", // cyan
          3: "#A78BFA"  // soft purple (sparingly)
        }
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)",
        ring: "0 0 0 1px rgba(255,255,255,0.10) inset, 0 10px 30px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(1200px 600px at 20% -10%, rgba(34,211,163,0.25), transparent 60%), radial-gradient(1000px 500px at 100% 10%, rgba(6,182,212,0.18), transparent 60%)",
        "accent-gradient":
          "linear-gradient(135deg, #22D3A3 0%, #06B6D4 50%, #A78BFA 100%)",
      },
    },
  },
  plugins: [],
};
