import React, { useState, useRef } from "react";

export default function Controls({ handleSetAnimationOptions }) {
  const pointsRef = useRef();
  const speedRef = useRef();
  const incrementRef = useRef();

  return (
    <div>
      <div>
        <input ref={pointsRef} placeholder={`points`} />
      </div>
      <div>
        <input ref={speedRef} placeholder={`speed`} />
      </div>
      <div>
        <input ref={incrementRef} placeholder={`increment`} />
      </div>
      <button
        onClick={() => {
          handleSetAnimationOptions({ pointsRef, speedRef, incrementRef });
        }}
      >
        SET
      </button>
    </div>
  );
}
