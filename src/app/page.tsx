import Link from 'next/link';
import AppCard from '@/components/AppCard';
import { NAV_TOOLS } from '@/lib/navConfig';

const liveTools = NAV_TOOLS.filter((tool) => !tool.disabled);
const upcomingTools = NAV_TOOLS.filter((tool) => tool.disabled);

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <section className="relative overflow-hidden rounded-3xl border border-[#F28500]/10 bg-white shadow-sm">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F28500] via-[#FCD116] to-[#006233]" />
        <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#F28500]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#9A5700]">
              Tanzania payroll and tax tools
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Faster, clearer Tanzania tax calculations for payroll and compliance work
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Use practical tools for PAYE, NSSF, SDL, WCF, receipt parsing, and guided tax reference content designed for Tanzania.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tax-calculator"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#F28500] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Open tax calculator
              </Link>
              <Link
                href="/tax-guide"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#006233]/30 hover:text-[#006233]"
              >
                Browse tax guide
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-500 sm:text-sm">
              <span className="rounded-full bg-[#fdf6ee] px-3 py-1">2025/2026 rates</span>
              <span className="rounded-full bg-[#fdf6ee] px-3 py-1">Printable outputs</span>
              <span className="rounded-full bg-[#fdf6ee] px-3 py-1">Receipt export support</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#F28500]/10 bg-[#FFF8F1] p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#9A5700]">Most used</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">PAYE calculator</div>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Monthly and annual employment tax breakdowns for employees and employers.
              </p>
            </div>
            <div className="rounded-2xl border border-[#006233]/10 bg-[#F4FBF7] p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#006233]">Reference</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Master tax guide</div>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Quick access to tax topics, rates, deadlines, and compliance guidance.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Workflow</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Receipt parser</div>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Extract supplier and invoice details, then prepare data for accounting exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Available tools</h2>
            <p className="mt-1 text-sm text-gray-500">Start with the tool that matches your task.</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {liveTools.map((app) => (
            <AppCard
              key={app.shortTitle}
              title={app.title}
              description={app.description}
              href={app.href}
              badge={app.badge}
              icon={app.icon}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-gray-900">Built for local use</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            The homepage now makes the main Tanzania-specific tools easier to find and understand at a glance.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-gray-900">Clearer first steps</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Visitors can go straight to the tax calculator or tax guide without having to explore the menu first.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-gray-900">Room to grow</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Upcoming tools stay visible without distracting from the features that are already ready to use.
          </p>
        </article>
      </section>

      {upcomingTools.length > 0 && (
        <section className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white/70 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900">Coming soon</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {upcomingTools.map((tool) => (
              <div key={tool.shortTitle} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {tool.icon}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900">{tool.title}</h3>
                      {tool.badge && (
                        <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[11px] font-medium text-gray-600">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
