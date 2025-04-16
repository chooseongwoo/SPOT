/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        large: ['34px', {lineHeight: '140%', fontWeight: '700'}],
        t1: ['28px', {lineHeight: '140%', fontWeight: '700'}],
        t2: ['24px', {lineHeight: '140%', fontWeight: '700'}],
        t3: ['20px', {lineHeight: '140%', fontWeight: '700'}],
        headline: ['18px', {lineHeight: '140%', fontWeight: '600'}],
        b1: ['18px', {lineHeight: '150%', fontWeight: '500'}],
        b2: ['16px', {lineHeight: '150%', fontWeight: '500'}],
        b3: ['14px', {lineHeight: '150%', fontWeight: '500'}],
        footnote: ['13px', {lineHeight: '150%', fontWeight: '400'}],
        cap1: ['12px', {lineHeight: '120%', fontWeight: '500'}],
        cap2: ['11px', {lineHeight: '120%', fontWeight: '500'}],
        btn1: ['18px', {lineHeight: '100%', fontWeight: '600'}],
        btn2: ['16px', {lineHeight: '100%', fontWeight: '600'}],
        btn3: ['14px', {lineHeight: '100%', fontWeight: '500'}],
      },

      colors: {
        green: {
          light: '#EAFAF4',
          DEFAULT: '#2AD18E',
          hover: '#26BC80',
          active: '#22A772',
        },
        gray: {
          1: '#F9F9F9',
          2: '#E5E5E5',
          3: '#C3C3C3',
          4: '#8C8C8C',
          5: '#5E5E5E',
        },
        white: '#FFFFFF',
        black: '#222222',
        red: '#F36563',
      },
    },
  },
  plugins: [],
};
