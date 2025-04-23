module.exports = {
  theme: {
    extend: {
      scrollBehavior: ["responsive"],
      fontFamily: {
        mars: ["Mars"],
        manrope: ["Manrope"],
      },
    },
  },
  keyframes: {
    glow: {
      "0%": { boxShadow: "0 0 10px 5px #206DC7" },
      "100%": { boxShadow: "0 0 30px 15px #206DC7" },
    },
  },
};
