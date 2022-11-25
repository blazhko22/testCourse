import React from "react";
import s from "./CourseConvert.module.scss";

function CourseConvert({
    value,
    valueSelect,
    valueImput,
    onChangeSelect,
    onChangeInput,
  }) {
  return (
    <div className={s.container}>
      <input
        value={valueImput}
        onChange={(e) => {
          onChangeInput(e);
        }}
        type="number"
      />
      <select value={valueSelect} onChange={onChangeSelect}>
        {value.map((option) => (
          <option key={option.cc} title={option.txt}>
            {option.cc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseConvert;