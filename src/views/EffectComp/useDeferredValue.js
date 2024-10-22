import { Suspense, useState, useDeferredValue } from "react";
import { fetchData } from "./data.js";
function UseDeferredValue() {
  const [query, setQuery] = useState("");
  const deferredValue = useDeferredValue(query);
  const isStale = query !== deferredValue;
  return (
    <div>
      <h1>UseDeferredValue</h1>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<div>Loading222...</div>}>
        <div
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? "opacity 0.2s 0.2s linear"
              : "opacity 0s 0s linear",
          }}
        >
          <SearchResults query={deferredValue} />
        </div>
      </Suspense>
    </div>
  );
}

function SearchResults({ query }) {
  if (query === "") {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    );
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

// TODO：待 bug 修复后应该替换为真正的实现。
function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

export default UseDeferredValue;
