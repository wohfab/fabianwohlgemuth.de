module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: `sans-serif`,
        serif: `serif`,
        mono: `monospace`,
        display: ``,
      },
      colors: {
        'fwdc-orange': {
          '900': '#EE6600',
        },
        'fwdc-yellow': {
          '900': '#FCCA46',
        },
        'fwdc-blue-dark': {
          '900': '#233D4D',
        },
      },
      boxShadow: {
        'fwdc-orange': '.1rem .1rem 0 #EE6600',
      },
      gridTemplateColumns: {
        blogRoll: '10rem auto',
      },
    },
  },
  variants: {},
  plugins: [],
}
