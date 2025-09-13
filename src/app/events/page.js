'use client';

import { useMemo, useState } from 'react';
import {
  FaCalendarDays,
  FaMapPin,
  FaClock,
  FaCalendarPlus,
  FaShareNodes,
  FaMagnifyingGlass,
  FaFilter,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';

const events = [
  {
    id: 1,
    title: 'Full Moon Poya Day Program',
    date: 'September 28, 2025',
    time: '6:00 AM - 6:00 PM',
    location: 'Temple Main Hall',
    description:
      'Join us for chanting, Dhamma sermons, and meditation sessions on this auspicious Full Moon Poya Day.',
  },
  {
    id: 2,
    title: 'Meditation Retreat',
    date: 'October 10, 2025',
    time: '8:00 AM - 5:00 PM',
    location: 'Meditation Center',
    description:
      'A full-day guided meditation retreat with mindfulness and loving-kindness practices.',
  },
  {
    id: 3,
    title: 'Kathina Ceremony',
    date: 'November 2, 2025',
    time: '7:00 AM - 1:00 PM',
    location: 'Temple Courtyard',
    description:
      'Traditional robe offering ceremony with almsgiving and Dhamma teachings.',
  },
];

// Helpers
function parseStartEnd(e) {
  try {
    const [startT, endT] = (e.time || '').split('-').map((s) => s.trim());
    const start = new Date(`${e.date} ${startT}`);
    const end = new Date(`${e.date} ${endT}`);
    return { start, end };
  } catch {
    const start = new Date(e.date);
    const end = new Date(e.date);
    return { start, end };
  }
}

const toICSDate = (isoLike) =>
  new Date(isoLike).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');

function googleCalUrl(ev) {
  const { start, end } = parseStartEnd(ev);
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const params = new URLSearchParams({
    text: ev.title,
    dates: `${toICSDate(start)}/${toICSDate(end)}`,
    details: ev.description || '',
    location: ev.location || '',
  });
  return `${base}&${params.toString()}`;
}

function directionsUrl(location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

function timeUntil(dateStr, timeStr) {
  const { start } = parseStartEnd({ date: dateStr, time: timeStr });
  const now = new Date();
  const diff = start.getTime() - now.getTime();
  const sign = diff >= 0 ? 1 : -1;
  const mins = Math.round(Math.abs(diff) / 60000);
  if (mins < 60) return sign > 0 ? `in ${mins} min` : `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return sign > 0 ? `in ${hrs} hrs` : `${hrs} hrs ago`;
  const days = Math.round(hrs / 24);
  return sign > 0 ? `in ${days} days` : `${days} days ago`;
}

function monthDay(dateStr) {
  const d = new Date(dateStr);
  const m = d.toLocaleString(undefined, { month: 'short' });
  const day = d.toLocaleString(undefined, { day: '2-digit' });
  return { m, day };
}

export default function EventsPage() {
  const [query, setQuery] = useState('');
  const [range, setRange] = useState('Upcoming'); // Upcoming | All | Past
  const [sort, setSort] = useState('soonest'); // soonest | latest | az

  const computed = useMemo(() => {
    const withDates = events.map((e) => {
      const { start, end } = parseStartEnd(e);
      return { ...e, start, end, isPast: start < new Date() };
    });

    // Range filter
    let filtered = withDates.filter((e) => {
      if (range === 'All') return true;
      if (range === 'Upcoming') return !e.isPast;
      if (range === 'Past') return e.isPast;
      return true;
    });

    // Search
    const q = query.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter((e) =>
        `${e.title} ${e.description} ${e.location}`
          .toLowerCase()
          .includes(q),
      );
    }

    // Sort
    if (sort === 'soonest') {
      filtered.sort((a, b) => +a.start - +b.start);
    } else if (sort === 'latest') {
      filtered.sort((a, b) => +b.start - +a.start);
    } else if (sort === 'az') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [query, range, sort]);

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50/50">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-20"
               style={{ background: 'radial-gradient(800px 300px at 10% -20%, rgba(251,191,36,0.4), transparent), radial-gradient(600px 300px at 90% 120%, rgba(251,146,60,0.35), transparent)' }} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-900 mt-20">
            Temple Events
          </h1>
          <p className="mt-3 text-center text-gray-700">
            Dhamma talks, meditation, Sil programs, and community activities · Timezone: {tz}
          </p>

          {/* Toolbar */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {/* Range */}
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="inline-flex items-center gap-2 text-sm text-gray-700">
                <FaFilter className="text-amber-700" /> Range
              </span>
              <div className="bg-white rounded-full border border-yellow-200 p-1">
                {['Upcoming', 'All', 'Past'].map((r) => {
                  const active = r === range;
                  return (
                    <button
                      key={r}
                      onClick={() => setRange(r)}
                      className={[
                        'px-3 py-1.5 rounded-full text-sm',
                        active ? 'bg-amber-100 text-amber-900 shadow-inner' : 'text-gray-700 hover:text-amber-800',
                      ].join(' ')}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events..."
                className="w-full rounded-full border border-yellow-200 bg-white pl-10 pr-10 py-2 text-sm text-gray-800 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                aria-label="Search events"
              />
              <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 justify-center sm:justify-end">
              <label className="text-sm text-gray-700">Sort</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-yellow-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                aria-label="Sort events"
              >
                <option value="soonest">Soonest</option>
                <option value="latest">Latest</option>
                <option value="az">A–Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {computed.length === 0 ? (
          <div className="text-center text-gray-500 py-20">No events found.</div>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2" role="list">
            {computed.map((event) => {
              const { m, day } = monthDay(event.date);
              const label = timeUntil(event.date, event.time);
              const gUrl = googleCalUrl(event);
              const dirUrl = directionsUrl(event.location);

              return (
                <li key={event.id} role="listitem">
                  <article className="relative bg-white rounded-2xl border border-yellow-200 shadow-sm hover:shadow-md transition overflow-hidden">
                    {/* Accent bar */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600" />

                    <div className="p-6 flex gap-5">
                      {/* Date badge */}
                      <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-amber-50 border border-amber-200 shadow-sm">
                        <div className="text-xs uppercase tracking-wide text-amber-700">{m}</div>
                        <div className="text-2xl font-extrabold text-amber-900 leading-none">{day}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-semibold text-yellow-900">
                          {event.title}
                        </h2>
                        <p className="mt-1 text-gray-600 line-clamp-3">{event.description}</p>

                        <div className="mt-3 space-y-1 text-sm text-gray-700">
                          <p className="flex items-center gap-2">
                            <FaCalendarDays className="text-amber-700" />
                            <span>{event.date}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <FaClock className="text-amber-700" />
                            <span>{event.time}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <FaMapPin className="text-amber-700" />
                            <span>{event.location}</span>
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <a
                            href={gUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-amber-600 text-white hover:bg-amber-700 transition"
                            aria-label="Add to Google Calendar"
                            title="Add to Google Calendar"
                          >
                            <FaCalendarPlus /> Add to Calendar
                          </a>

                          <a
                            href={dirUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border border-amber-600 text-amber-800 hover:bg-amber-50"
                            aria-label="Get directions"
                            title="Open in Google Maps"
                          >
                            <FaArrowUpRightFromSquare /> Directions
                          </a>

                          <button
                            onClick={async () => {
                              const url = `${window.location.origin}${window.location.pathname}#event-${event.id}`;
                              try {
                                if (navigator.share) {
                                  await navigator.share({ title: event.title, url });
                                } else {
                                  await navigator.clipboard.writeText(url);
                                  alert('Event link copied to clipboard');
                                }
                              } catch {
                                // ignored
                              }
                            }}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            <FaShareNodes /> Share
                          </button>

                          <span className="ml-auto text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">
                            {label}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Anchor for deep link */}
                    <span id={`event-${event.id}`} className="absolute -top-16" aria-hidden="true" />
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}