import React from "react";

const InputRadio = ({ pergunta, options, onChange, id, value, active }) => {

  if(active === false ) return null
  return (
    <fieldset>
      <h2>{pergunta}</h2>
      {options.map((option) => (
        <label key={option}>
          <input type="radio" id={id} value={option} checked={value === option} onChange={onChange} />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default InputRadio;
