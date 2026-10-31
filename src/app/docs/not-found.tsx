/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';

export interface DocNotFoundProps {
  currentPath?: string;
}

export default function DocNotFound({ currentPath }: DocNotFoundProps) {
  return (
    <div class="py-12 text-center max-w-xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-[#cd3d64] bg-[#cd3d64]/10 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-[#cd3d64]" />
        Documentation Page Not Found
      </div>

      <h1 class="text-3xl sm:text-4xl font-light text-[#0a2540] tracking-tight">
        404: Document Missing
      </h1>

      <p class="mt-4 text-[16px] text-[#425466] leading-relaxed">
        The documentation page you requested at{' '}
        <code class="font-mono text-sm bg-[#f6f9fc] border border-[#e6ebf1] px-1.5 py-0.5 rounded text-[#0a2540]">
          {currentPath || '/docs/...'}
        </code>{' '}
        does not exist or has been moved to another section.
      </p>

      <div class="mt-8 flex items-center justify-center gap-3">
        <a
          href="/docs"
          class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium bg-[#635bff] text-white shadow-card hover:bg-[#5249e6] transition-colors"
        >
          Documentation Overview
        </a>
        <a
          href="/"
          class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium border border-[#e6ebf1] bg-white text-[#0a2540] shadow-card hover:bg-[#f6f9fc] transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

