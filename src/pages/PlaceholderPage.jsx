import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { Button } from '../components/ui/Button.jsx'

export const PlaceholderPage = memo(function PlaceholderPage({ title }) {
  return (
    <div className="min-h-dvh bg-paper">
      <Navbar />
      <main className="container-page py-10">
        <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-black/10 md:p-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">
            {title}
          </h1>
          <p className="mt-3 max-w-[60ch] text-sm font-medium leading-6 text-black/60">
            This route is included for basic routing. The main work in this
            task is the Home page UI replication.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button as="link" to="/" variant="primary" size="md">
              Back to Home
            </Button>
            <Link
              to="/"
              className="text-sm font-semibold text-brand-800 hover:underline"
            >
              View design
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
})

