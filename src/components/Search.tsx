import { Fragment, useEffect, useRef } from "react";
import nprogress from "nprogress";
import { Button, TextInput } from "react-materialize";

import { useSearchPositions } from "~/hooks/useSearchPositions";
import "~/styles/search.css";

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
        className="form-group"
        onSubmit={(e) => {
          e.preventDefault();
          const search = ref.current?.value.trim();

          if (search) {
            searchPositions({ search });
          }
        }}
      >
        <label htmlFor="search-positions" className="screen-reader">
          Job Description
        </label>

        <input
          id="search-positions"
          type="text"
          ref={ref}
          placeholder="Search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          data-testid="search-input"
        ></input>

        <Button>Search</Button>
      </form>
    </Fragment>
  );
};
