/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, type ComponentChildren } from 'preact';
import { RootLayout } from '../components/RootLayout.js';

export default function AppLayout({ children }: { children: ComponentChildren }) {
  return <RootLayout>{children}</RootLayout>;
}
