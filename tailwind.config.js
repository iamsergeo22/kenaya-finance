/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

module.exports = {
  theme: {
    extend: {
      spacing: {
        80: '20rem',
        108: '27rem'
      },
      borderWidth: {
        14: '14px'
      }
    },
    container: {
      padding: '1rem'
    },
   /*  colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      
    }, */
    fontFamily: {
      poppins: ['Poppins', 'sans-serif', 'Josefin Sans'],
      
    },

    backgroundImage: (theme) => ({
      banner: "url('/images/banner.jpg')",
    }),
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      transparent: 'transparent',
    }),
    filter: {
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
    },
  },
  variants: {},
  plugins: [require("tw-elements/dist/plugin")],
    purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/dist/js/**/*.js"

    ]
  }
}
