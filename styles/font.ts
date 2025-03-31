const fontGenerator = (weight: number, size: number, lhRatio: number) => ({
  "font-weight": weight.toString(),
  "font-size": size,
  "line-height": parseFloat((size * (lhRatio / 100)).toFixed(2)),
});

const font = {
  large: fontGenerator(700, 34, 140),

  T1: fontGenerator(700, 28, 140),
  T2: fontGenerator(700, 24, 140),
  T3: fontGenerator(700, 20, 140),

  headline: fontGenerator(600, 18, 140),

  B1: fontGenerator(500, 18, 150),
  B2: fontGenerator(500, 16, 150),
  B3: fontGenerator(500, 14, 150),

  footnote: fontGenerator(400, 13, 150),

  cap1: fontGenerator(500, 12, 120),
  cap2: fontGenerator(500, 11, 120),

  btn1: fontGenerator(600, 18, 100),
  btn2: fontGenerator(600, 16, 100),
  btn3: fontGenerator(500, 14, 100),
};

export default font;
