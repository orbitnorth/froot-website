/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';

export interface NotFoundProps {
  currentPath?: string;
}

export default function RootNotFound({ currentPath }: NotFoundProps) {
  return (
    <div class="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-black text-[#ededed]">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-neutral-400 border border-[#222226] bg-[#0c0c0e] mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-rose-500" />
        404 · Not Found
      </div>

      <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        Page Not Found
      </h1>

      <p class="mt-4 max-w-md text-base text-neutral-400 leading-relaxed">
        The route you requested at{' '}
        <code class="font-mono text-sm bg-[#121215] border border-[#222226] px-1.5 py-0.5 rounded text-neutral-200">
          {currentPath || 'this URL'}
        </code>{' '}
        does not exist or has been relocated.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="/"
          class="btn btn-primary text-sm px-5 py-2 rounded-md font-semibold"
        >
          Return to Homepage
        </a>
        <a
          href="/docs"
          class="btn btn-secondary text-sm px-5 py-2 rounded-md"
        >
          View Documentation
        </a>
      </div>
    </div>
  );
}
