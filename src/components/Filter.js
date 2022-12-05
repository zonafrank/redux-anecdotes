import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterValue } from "../reducers/filterSlice";

const Filter = () => {
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateFilterValue(e.target.value));
  };

  return (
    <div style={{ marginBottom: 10 }}>
      filter <input value={filterValue} onChange={handleChange} />
    </div>
  );
};

export default Filter;
