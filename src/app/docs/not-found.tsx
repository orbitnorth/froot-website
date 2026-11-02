/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';

export interface DocNotFoundProps {
  currentPath?: string;
}

export default function DocNotFound({ currentPath }: DocNotFoundProps) {
  return (
    <div class="py-16 text-center max-w-xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-neutral-400 border border-[#222226] bg-[#0c0c0e] mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-rose-500" />
        404 · Documentation Missing
      </div>

      <h1 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Document Not Found
      </h1>

      <p class="mt-4 text-base text-neutral-400 leading-relaxed">
        The documentation page you requested at{' '}
        <code class="font-mono text-sm bg-[#121215] border border-[#222226] px-1.5 py-0.5 rounded text-neutral-200">
          {currentPath || '/docs/...'}
        </code>{' '}
        does not exist or has moved.
      </p>

      <div class="mt-8 flex items-center justify-center gap-3">
        <a
          href="/docs"
          class="btn btn-primary text-sm px-5 py-2 rounded-md font-semibold"
        >
          Documentation Overview
        </a>
        <a
          href="/"
          class="btn btn-secondary text-sm px-5 py-2 rounded-md"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
