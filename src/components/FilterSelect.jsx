import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const FilterSelect = (props) => {
  const { handleChange: pHandleChange, options, ifMulti, filter } = props;
  // <FilterSelect filter={filters[0]} options={this.state.selectedCities} handleChange={this.handleChange}/>
  const [selectedValues, setSelectedValues] = React.useState(undefined);

  const getFilter = (x) => {
    const { field } = filter;
    if (!selectedValues)
      //no values mean - this filter isn't a barrier - it is filtering in - hence true
      return true;

    if ("value" in selectedValues) {
      return selectedValues.value.toLowerCase() === x[field].toLowerCase();
    }
    // selectedValues is now an array
    if (!selectedValues.length) {
      //no values mean - this filter isn't a barrier - it is filtering in - hence true
      return true;
    }
    // check if koi bhi m.value (kisi bhi option ki value) aur x.field same hai kya

    return selectedValues.filter((m) => {
      if (x[field]) {
        return m.value.toLowerCase() === x[field].toLowerCase();
      }
      return false;
    }).length;
  };

  const handleChange = (selectedVals) => {
    const { field } = filter;
    setSelectedValues(selectedVals);

    pHandleChange(field, getFilter);
  };

  return (
    <Select
      className="filterSelect"
      // className={props.filter.field+"Select"}
      value={selectedValues}
      isMulti={ifMulti}
      onChange={handleChange}
      options={options}
      placeholder={`Select ${filter.name} ...`}
      isClearable
      components={animatedComponents}
      closeMenuOnSelect
    />
  );
};

export default FilterSelect;
