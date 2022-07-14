const plugin = require("tailwindcss/plugin");

const typography = plugin(function ({ addComponents }) {
  const fontSizes = Array.from(Array(12), (_, i) => 10 + 2 * i);
  const fontWeightMap = new Map([
    ["thin", 100],
    ["light", 300],
    ["demilight", 350],
    ["regular", 400],
    ["medium", 500],
    ["bold", 700],
    ["black", 900],
  ]);
  const typoVariants = {};
  for (const fontSize of fontSizes) {
    for (const [alias, fontWeight] of fontWeightMap) {
      typoVariants[`.typo-${alias}-${fontSize}`] = {
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
      };
    }
  }
  addComponents(typoVariants);
});

module.exports = typography;
