import { Table } from "@material-ui/core";
import React from "react";

const useTable = (records, headCells) => {
  const TblContainer = (props) => <Table>{props.children}</Table>;

  return {
    TblContainer,
  };
};

export default useTable;
