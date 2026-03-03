import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Master Tax Guide',
  description:
    'Comprehensive Tanzania tax reference guide — income tax, VAT, withholding, stamp duty, and more.',
};

// After publishing your Notion page to the web, paste the public URL here.
// Instructions: In Notion → open the Tanzania Master Tax Guide → Share → Publish to web → copy URL.
const NOTION_GUIDE_URL =
  'https://maize-comet-b12.notion.site/230a91266d3f806fadd1caca5608cff0?v=242a91266d3f80c69f57000c17af815e';

export default function TaxGuidePage() {
  return (
    <div
      className="flex flex-col"
      style={{ height: 'calc(100dvh - 62px)' }}
    >
      {/* Thin info bar */}
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 border-b border-gray-200 bg-white flex-shrink-0">
        <div className="min-w-0">
          <h1 className="text-sm font-semibold text-gray-900 truncate">
            Tanzania Master Tax Guide
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            View only · Updated from Notion
          </p>
        </div>
        <a
          href={NOTION_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#F28500] hover:text-[#d97500] transition-colors shrink-0 whitespace-nowrap"
        >
          Open ↗
        </a>
      </div>

      {/* Notion embed */}
      <iframe
        src={NOTION_GUIDE_URL}
        className="w-full flex-1 border-0"
        title="Tanzania Master Tax Guide"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
