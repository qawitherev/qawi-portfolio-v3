/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue':        '#0066cc',
        'apple-blue-focus':  '#0071e3',
        'apple-blue-dark':   '#2997ff',
        'apple-ink':         '#1d1d1f',
        'apple-ink-muted':   '#333333',
        'apple-ink-soft':    '#7a7a7a',
        'apple-canvas':      '#ffffff',
        'apple-parchment':   '#f5f5f7',
        'apple-pearl':       '#fafafc',
        'apple-tile-1':      '#272729',
        'apple-tile-2':      '#2a2a2c',
        'apple-tile-3':      '#252527',
        'apple-black':       '#000000',
        'apple-hairline':    '#e0e0e0',
        'apple-divider':     '#f0f0f0',
      },
      borderRadius: {
        'apple-none': '0px',
        'apple-xs':   '5px',
        'apple-sm':   '8px',
        'apple-md':   '11px',
        'apple-lg':   '18px',
        'apple-pill': '9999px',
      },
      spacing: {
        'apple-xxs': '4px',
        'apple-xs':  '8px',
        'apple-sm':  '12px',
        'apple-md':  '17px',
        'apple-lg':  '24px',
        'apple-xl':  '32px',
        'apple-xxl': '48px',
        'apple-section': '80px',
      },
      fontFamily: {
        'apple': [
          'SF Pro Display', 'SF Pro Text',
          'system-ui', '-apple-system', 'BlinkMacSystemFont',
          'Inter', 'sans-serif',
        ],
      },
      maxWidth: {
        'apple-text': '980px',
        'apple-wide': '1440px',
      },
    },
  },
  plugins: [],
}
