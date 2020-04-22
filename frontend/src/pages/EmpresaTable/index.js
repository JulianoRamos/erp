import React, { useEffect } from "react";

import { connect } from "react-redux";

import EmpresaTableApi from "./../../services/empresaTableApi";

import MyTable from "./../Components/Table";

const EmpresaTable = ({ title, columns, index, load, del }) => {
  useEffect(() => {
    load();
  }, [load]);

  return <MyTable index={index} title={title} columns={columns} del={del} />;
};

const mapStateToProps = (state) => ({
  title: state.empresaTable.title,
  columns: state.empresaTable.columns,
  index: state.empresaTable.index,
});

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(EmpresaTableApi.empresaIndex());
    },
    del: (data, id) => {
      dispatch(EmpresaTableApi.empresaDelete(data, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaTable);
