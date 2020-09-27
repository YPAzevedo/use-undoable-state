import React from "react";
import "./styles.css";
import useUndlableState from "./useUndoableState";

export default function App() {
  const [search, setSearch, undoSearch] = useUndlableState("useUndoalbeState");

  return (
    <div className="App">
      <h1>useUndoableState</h1>
      <h2>Make changes to the input and hit undo</h2>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="button" onClick={undoSearch}>
        Undo
      </button>
    </div>
  );
}
