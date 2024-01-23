/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        plum: "#bfacec",
        darkseagreen: {
          "100": "#acd8a1",
          "200": "#92cbaf",
          "300": "#9fc097",
          "400": "#7aa66e",
        },
        white: "#fff",
        gainsboro: "#d9d9d9",
        gray: "#828282",
        aquamarine: "#c0fec1",
        mediumpurple: "#765cba",
        darkgray: "#969696",
        dimgray: "#4f4f4f",
        darkslateblue: "#342165",
        beige: "#ddf3d8",
        midnightblue: "#240765",
        lightgoldenrodyellow: "#d1fbc5",
        darkorchid: "#6337c6",
      },
      spacing: {},
      fontFamily: {
        "source-code-pro": "'Source Code Pro'",
        "jetbrains-mono": "'JetBrains Mono'",
        "share-tech-mono": "'Share Tech Mono'",
        "roboto-mono": "'Roboto Mono'",
        "cutive-mono": "'Cutive Mono'",
        "ibm-plex-mono": "'IBM Plex Mono'",
      },
      borderRadius: {
        "6xl": "25px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      "77xl": "96px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
};
