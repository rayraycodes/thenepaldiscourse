import { Navigate, useLocation } from 'react-router-dom';

/** Speaker blocks live on the home page; keep /speakers URLs working for bookmarks and links. */
export function SpeakersPage() {
  const { hash } = useLocation();
  const to = hash === '#speaker-themes' ? '/#speaker-themes' : '/#speakers';
  return <Navigate to={to} replace />;
}
