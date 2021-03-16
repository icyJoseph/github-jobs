import { Fragment, useEffect, useRef } from "react";
import nprogress from "nprogress";

import { useSearchPositions } from "~/hooks/useSearchPositions";

export const Searching = () => {
  const [loading, error] = useSearchPositions((state) => [
    state.loading,
    state.error
  ]);

  useEffect(() => {
    if (loading) {
      nprogress.start();
    } else {
      if (nprogress.isStarted()) {
        nprogress.done();
      }
    }
  }, [loading]);

  useEffect(() => {
    if (error) {
      if (nprogress.isStarted()) {
        nprogress.remove();
      }
    }
  }, [error]);

  return null;
};

export const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  const searchPositions = useSearchPositions((state) => state.searchPositions);

  return (
    <Fragment>
      <Searching />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const search = ref.current?.value.trim();
          if (search) {
            searchPositions({ search });
          }
        }}
      >
        <input className="text-input" placeholder="search" ref={ref} />
        <button type="submit">Search</button>
      </form>
    </Fragment>
  );
};
