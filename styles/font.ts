const fontGenerator = (weight: number, size: number, lineHeight: number) => ({
  "font-weight": weight,
  "font-size": `${size}rem`,
  "line-height": `${lineHeight}%`,
});

const font = {
  large: fontGenerator(700, 2.125, 140),

  T1: fontGenerator(700, 1.75, 140),
  T2: fontGenerator(700, 1.5, 140),
  T3: fontGenerator(700, 1.25, 140),

  headline: fontGenerator(600, 1.125, 140),

  B1: fontGenerator(500, 1.125, 150),
  B2: fontGenerator(500, 1, 150),
  B3: fontGenerator(500, 0.875, 150),

  footnote: fontGenerator(400, 0.8125, 150),

  cap1: fontGenerator(500, 0.75, 120),
  cap2: fontGenerator(500, 0.6875, 120),

  btn1: fontGenerator(600, 1.125, 100),
  btn2: fontGenerator(600, 1, 100),
  btn3: fontGenerator(500, 0.875, 100),
};

export default font;
