module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'graph-black':
          'radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px)'
      },
      backgroundSize: {
        'size-40': '40px 40px'
      },
      height: {
        textarea: '30rem'
      },
      animation: {
        enter: 'enter 200ms ease-out',
        'slide-in': 'slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)',
        leave: 'leave 150ms ease-in forwards'
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 }
        }
      }
    }
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [require('daisyui')]
}
