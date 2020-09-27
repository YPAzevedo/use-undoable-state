import { useState, useRef } from "react";

export default function useUndlableState(initial) {
  const [state, setState] = useState(initial);
  const prevStates = useRef([]);

  const getProviousSate = () => {
    if (!prevStates.current.length) return;
    const [first, ...rest] = prevStates.current;
    prevStates.current = rest;
    return first;
  };

  const _setState = (newState) => {
    prevStates.current = [state, ...prevStates.current];
    setState(newState);
  };

  const undo = () => {
    const previousState = getProviousSate();
    if (!previousState) return;
    setState(previousState);
  };

  return [state, _setState, undo];
}
