import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    if (typeof window !== 'undefined') {
      // Keep a breadcrumb for debugging without breaking UI.
      window.__GETVIA_LAST_ERROR__ = { error, info }
    }
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    const message = error?.message ? String(error.message) : String(error)

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          background: '#ffffff',
          color: '#111827',
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
        }}
      >
        <div style={{ maxWidth: 860, width: '100%' }}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
            Something crashed while rendering.
          </div>
          <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 16 }}>
            This prevents a blank screen during development. Check DevTools Console for the root
            cause, then fix the first error.
          </div>

          <div
            style={{
              background: '#0b1220',
              color: '#e5e7eb',
              borderRadius: 12,
              padding: 16,
              fontSize: 13,
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.45,
              marginBottom: 16,
            }}
          >
            {message}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                background: '#177043',
                color: '#ffffff',
                border: 0,
                borderRadius: 10,
                padding: '10px 14px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Reload page
            </button>
            <button
              type="button"
              onClick={() => this.setState({ error: null })}
              style={{
                background: '#e5e7eb',
                color: '#111827',
                border: 0,
                borderRadius: 10,
                padding: '10px 14px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    )
  }
}

