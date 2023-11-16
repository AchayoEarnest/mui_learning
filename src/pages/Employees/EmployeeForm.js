import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  makeStyles,
} from "@material-ui/core";
import { TextField } from "@mui/material";
import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../services/EmployeeService";

const initialFValues = {
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Others" },
];

const EmployeeForm = () => {
  const { values, setValues, errors, setErrors, resetForm, handleInputChange } =
    useForm(initialFValues);

  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName
      ? ""
      : "Please put in the right format for your email address!";
    temp.email = /$^|.+@.+..+/.test(values.email)
      ? ""
      : "This field is required";
    temp.mobile =
      values.mobile.length > 9
        ? ""
        : "The mobile number must be more than 10 digits!";
    temp.departmentId =
      values.departmentId.length != 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) return window.alert("testing... Please keep going!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />

          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            value={values.gender}
            name="gender"
            label="Gender"
            onChange={handleInputChange}
            items={genderItems}
          />

          <Controls.Select
            value={values.departmentId}
            name="departmentId"
            label="Department"
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />

          <Controls.DatePicker
            value={values.hireDate}
            name="hireDate"
            label="Hire Date"
            onChange={handleInputChange}
          />

          <Controls.Checkbox
            value={values.isPermanent}
            name="isPermanent"
            label="Permanent Employee"
            onChange={handleInputChange}
            color="primary"
            checked="false"
          />
          <div>
            <Controls.Button text="Submit" color="primary" type="submit" />
            <Controls.Button
              variant="contained"
              text="Reset"
              color="secondary"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
