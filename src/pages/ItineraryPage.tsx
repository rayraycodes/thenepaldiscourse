import { Link } from 'react-router-dom';

/** Conference schedule tables are temporarily unpublished; route kept for bookmarks and direct links. */
export function ItineraryPage() {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="mb-4 font-serif text-2xl font-semibold text-foreground md:text-3xl">
        Conference schedule
      </h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        The detailed day-by-day schedule is not published yet. Check back closer to the event, or
        return to the home page for conference highlights.
      </p>
      <Link
        to="/"
        className="mt-8 font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-90"
      >
        Return home
      </Link>
    </div>
  );
}
