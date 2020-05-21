import React from "react";

export function useMedia(query, defaultState = false) {
  const isClient = typeof window === "object";
  const [state, setState] = React.useState(
    isClient ? () => window.matchMedia(query).matches : defaultState
  );

  React.useEffect(() => {
    const mql = window.matchMedia(query);

    function onChange() {
      setState(!!mql.matches);
    }

    mql.addListener(onChange);

    setState(mql.matches);

    return () => {
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
}

export default useMedia;
