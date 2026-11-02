/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { LandingPage } from '../components/LandingPage.js';

export const metadata = {
  title: 'Froot & FrootKit — High-Performance Next.js Alternative',
  description: 'The unified high-performance TypeScript stack. Monomorphic V8 backend (124k req/sec), FrootKit zero-overhead Next.js alternative (3KB Preact SSR, Tailwind v4 native), and FrootUI developer primitives.',
};

export default function Page() {
  return <LandingPage />;
}
