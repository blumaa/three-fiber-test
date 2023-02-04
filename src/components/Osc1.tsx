import React from "react";

const Osc1 = ({
  changeFreq,
  freq,
}: {
  changeFreq: (e: React.ChangeEvent<HTMLInputElement>) => void;
  freq: number;
}) => {
  return (
    <div>
      <input
        onChange={changeFreq}
        type="range"
        max="5000"
        id="frequency"
        value={freq}
      />
    </div>
  );
};

export { Osc1 };
