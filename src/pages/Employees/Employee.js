import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Paper, TableCell, makeStyles } from "@material-ui/core";
import useTable from "../../components/useTable";
import { TableBody, TableRow } from "@material-ui/core";
import * as employeeService from "../../services/EmployeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const Employee = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees());

  const { TblContainer } = useTable();
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Add new employee below"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />

      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TblContainer>
          <TableBody>
            {records.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </Paper>
    </>
  );
};

export default Employee;
