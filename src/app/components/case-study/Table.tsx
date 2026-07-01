import { ReactNode } from 'react';

interface CaseStudyTableProps {
  headers: string[];
  rows: ReactNode[][];
  caption?: ReactNode;
}

/**
 * Simple responsive table for case-study content (competitive teardowns,
 * research→decision maps, key-screen rundowns). Styled with the shared tokens:
 * mono uppercase headers, hairline rules, cream-pale header band. Scrolls
 * horizontally on narrow viewports rather than crushing columns.
 */
export default function CaseStudyTable({ headers, rows, caption }: CaseStudyTableProps) {
  return (
    <figure className="m-0">
      <div className="overflow-x-auto rounded-md border border-hairline">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-cream-pale">
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="border-b border-hairline px-4 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-warm-grey align-bottom"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="align-top last:[&>td]:border-b-0">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`border-b border-hairline px-4 py-3.5 font-sans text-[0.9375rem] leading-[1.5] text-charcoal [&_strong]:text-aubergine [&_strong]:font-medium ${
                      ci === 0 ? 'font-medium text-aubergine' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-warm-grey leading-[1.5]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
