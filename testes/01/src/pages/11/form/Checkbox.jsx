import React from "react";

const Checkbox = ({ options, value, setValue }) => {
  const handleChance = ({ target }) => {
    if (target.checked) setValue([...value, target.value]);
    else setValue(value.filter((itemValue) => itemValue !== target.value));
  };
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" name={option} id={option} value={option} onChange={handleChance} />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
