/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      spacing: {
        // design-system spacing (px) from PDF rhythm
        18: '18px',
        22: '22px',
        26: '26px',
        30: '30px',
        34: '34px',
        38: '38px',
        section: '40px',
      },
      colors: {
        surface: '#FFFFFF',
        navbar: '#f7f7f7',
        brand: {
          50: '#ECF8F0',
          100: '#D7F0DE',
          200: '#B1E2BE',
          300: '#86D29B',
          400: '#4DBF73',
          500: '#1F9A55',
          600: '#167C44',
          // exact CTA green from screenshot
          700: '#006e12',
          800: '#0C4527',
          900: '#08311B',
        },
        // light grey page background from screenshot
        paper: '#F3F3F3',
        ink: '#111827',
        muted: '#6B7280',
        // exact hero highlight "brand" color from screenshot
        lime: '#b4e817',
        greenText: '#0E6B2B',
        line: 'rgba(0,0,0,0.14)',
        fieldBorder: 'rgba(0,0,0,0.55)',
      },
      boxShadow: {
        // PDF: very soft elevation
        'ds-card': '0 2px 8px rgba(0,0,0,0.06)',
        'ds-cardHover': '0 10px 24px rgba(0,0,0,0.08)',
        'ds-nav': '0 2px 10px rgba(0,0,0,0.06)',
        // screenshot input elevation
        field: '0 3px 0 rgba(0,0,0,0.12), 0 10px 18px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        // PDF: cards ~14px, buttons ~10px, pills fully rounded
        card: '14px',
        btn: '10px',
        field: '12px',
      },
    },
  },
  plugins: [],
}

