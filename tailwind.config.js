module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['didot-headline', 'serif'],
      script: ['sheila', 'cursive'],
      serif: ['didot', 'serif'],
      sans: ['quasimoda', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '0px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '2rem',
      'tiny': '.875rem',
      'base': '1rem',
      'md': '3rem',
      'lg': '5rem',
      'xl': '8rem',
      '2xl': '10rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        blush: '#F9C29E',
        clay: '#CB6620',
        grey: '#56565E',
        jardin: '#2C3329',
        peri: '#656AB4',
        rouge: '#F13C49',
        sky: '#B0C7FF',
        slate: '#131921',
        teal: '#273B3F',
        mailly: '#FFFAF0'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      maxWidth: {
        'q': '25%',
        'half': '50%',
        'three-q': '75%',
      },
      margin: {
        '1/2': '50%'
      },
      top: {
        '1/2': '50%'
      },
      right: {
        '1/2': '50%'
      },
      left: {
        '1/2': '50%'
      },      
      bottom: {
        '1/2': '50%'
      },
      inset: {
        '1/2': '50%'
      }

      
    }
  },
  variants: {
    variants: {
      inset: ['responsive', 'hover', 'focus']
    }
  },
  plugins: [],
}
