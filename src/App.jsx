import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { PlaceholderPage } from './pages/PlaceholderPage.jsx'
import CategoryProfiles from './pages/CategoryProfiles.jsx'
import CategoriesPage from './pages/CategoriesPage.jsx'
import { AuthLogin } from './pages/AuthLogin.jsx'
import { AuthSignup } from './pages/AuthSignup.jsx'
import { BusinessOnboarding } from './pages/BusinessOnboarding.jsx'
import { PlanSelect } from './pages/PlanSelect.jsx'
import { PaymentTest } from './pages/PaymentTest.jsx'
import { PaymentDone } from './pages/PaymentDone.jsx'
import BusinessProfile from './pages/BusinessProfile.jsx'
import OffersPage from './pages/OffersPage.jsx'
import SavedBusinessPage from './pages/SavedBusinessPage.jsx'
import RecentBusinessPage from './pages/RecentBusinessPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route path="/auth/signup" element={<AuthSignup />} />
      <Route path="/auth/onboarding" element={<BusinessOnboarding />} />
      <Route path="/auth/onboarding/:stepId" element={<BusinessOnboarding />} />
      <Route path="/auth/plans" element={<PlanSelect />} />
      <Route path="/auth/payment" element={<PaymentTest />} />
      <Route path="/auth/done" element={<PaymentDone />} />
      <Route path="/connect" element={<PlaceholderPage title="Connect" />} />
      <Route path="/events" element={<PlaceholderPage title="Events" />} />
      <Route path="/partners" element={<PlaceholderPage title="Partners" />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:categoryId" element={<CategoryProfiles />} />
      <Route path="/offers" element={<OffersPage />} />
      <Route path="/saved" element={<SavedBusinessPage />} />
      <Route path="/saved-business" element={<Navigate to="/saved" replace />} />
      <Route path="/recent" element={<RecentBusinessPage />} />
      <Route path="/recently-visited" element={<Navigate to="/recent" replace />} />
      <Route path="/profile/:profileId" element={<BusinessProfile />} />
      <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<PlaceholderPage title="Not Found" />} />
    </Routes>
  )
}
