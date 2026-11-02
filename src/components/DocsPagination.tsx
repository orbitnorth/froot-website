/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import type { DocItem } from '../data/docs-nav.js';

export interface DocsPaginationProps {
  prev?: DocItem | undefined;
  next?: DocItem | undefined;
}

export function DocsPagination({ prev, next }: DocsPaginationProps) {
  if (!prev && !next) return null;

  return (
    <div class="mt-16 pt-8 border-t border-[#222226] grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prev ? (
        <a
          href={prev.id === 'overview' ? '/docs' : `/docs/${prev.id}`}
          class="group p-4 rounded-xl bg-[#09090b] border border-[#222226] hover:border-[#383842] hover:bg-[#121216] transition-all flex flex-col justify-between"
        >
          <span class="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors flex items-center gap-1.5">
            <span class="transition-transform group-hover:-translate-x-0.5">←</span>
            <span>Previous</span>
          </span>
          <span class="text-sm font-medium text-neutral-200 mt-2 group-hover:text-white transition-colors">
            {prev.title}
          </span>
        </a>
      ) : (
        <div />
      )}

      {next ? (
        <a
          href={next.id === 'overview' ? '/docs' : `/docs/${next.id}`}
          class="group p-4 rounded-xl bg-[#09090b] border border-[#222226] hover:border-[#383842] hover:bg-[#121216] transition-all flex flex-col justify-between text-right"
        >
          <span class="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors flex items-center justify-end gap-1.5">
            <span>Next</span>
            <span class="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
          <span class="text-sm font-medium text-neutral-200 mt-2 group-hover:text-white transition-colors">
            {next.title}
          </span>
        </a>
      ) : (
        <div />
      )}
    </div>
  );
}
