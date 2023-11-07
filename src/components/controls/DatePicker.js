import React, { Children } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultPara = (name, value) => ({
    target : {
      name, value
    }
  })
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        dateAdapter={AdapterDateFns}
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        formate="MMM/dd/yyy"
        name={name}
        value={value}
        onChange={date => onChange(convertToDefaultPara(name, date))}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
