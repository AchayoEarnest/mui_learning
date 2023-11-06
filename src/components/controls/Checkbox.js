import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import React from "react";

const Checkbox = (props) => {
  const { value, name, onChange, color, label } = props;

  const convertToDefaultEventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            value={value}
            onChange={(e) =>
              onChange(convertToDefaultEventParam(name, e.target.checked))
            }
            checked={value}
            color={color}
            label={label}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
