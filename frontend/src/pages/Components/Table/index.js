import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import MaterialTable from "material-table";
import {
  FilterList as FilterListIcon,
  Assignment as AssignmentIcon,
  Add as AddIcon,
  Create as CreateIcon,
} from "@material-ui/icons";

const localization = {
  pagination: {
    labelDisplayedRows: "{from}-{to} de {count}",
    labelRowsSelect: "linhas",
    labelRowsPerPage: "Linhas por página:",
    firstAriaLabel: "Primeira página",
    firstTooltip: "Primeira página",
    previousAriaLabel: "Página anterior",
    previousTooltip: "Página anterior",
    nextAriaLabel: "Próxima página",
    nextTooltip: "Próxima página",
    lastAriaLabel: "Última página",
    lastTooltip: "Última página",
  },
  toolbar: {
    addRemoveColumns: "Adicionar ou remover colunas",
    nRowsSelected: "{0} linha(s) selecionada(s)",
    showColumnsTitle: "Mostrar colunas",
    showColumnsAriaLabel: "Mostrar colunas",
    exportTitle: "Exportar",
    exportAriaLabel: "Exportar",
    exportName: "Exportar como CSV",
    searchTooltip: "Pesquisar",
    searchPlaceholder: "Pesquisar",
  },
  header: {
    actions: "Ações",
  },
  body: {
    emptyDataSourceMessage: "Não há registros a serem exibidos",
    addTooltip: "Adicionar",
    deleteTooltip: "Deletar",
    editTooltip: "Editar",
    filterRow: {
      filterTooltip: "Filtrar",
    },
    editRow: {
      deleteText: "Tem certeza que deseja excluir esta linha?",
      cancelTooltip: "Cancelar",
      saveTooltip: "Salvar",
    },
  },
};

const MyTable = ({ title, columns, load, index, del }) => {
  const history = useHistory();
  const match = useRouteMatch();

  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <MaterialTable
      localization={localization}
      title={title}
      columns={columns}
      data={index}
      style={{
        boxShadow: "none",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.12)",
      }}
      editable={{
        onRowDelete: (oldIndex) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const indexDelete = [...index];
              indexDelete.splice(indexDelete.indexOf(oldIndex), 1);
              del(indexDelete, oldIndex.id);
            }, 600);
          }),
      }}
      options={{
        actionsColumnIndex: -1,
        exportButton: true,
        filtering: filtering,
      }}
      actions={[
        {
          icon: FilterListIcon,
          tooltip: "Filtrar",
          isFreeAction: true,
          onClick: (event) => setFiltering(!filtering),
        },
        {
          icon: AssignmentIcon,
          tooltip: "Relatório",
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row"),
        },
        {
          icon: AddIcon,
          tooltip: "Adicionar",
          isFreeAction: true,
          onClick: (event) => history.push(`${match.path}/adicionar`),
        },
        (rowData) => ({
          icon: CreateIcon,
          tooltip: "Editar",
          onClick: (event, rowData) =>
            history.push(`${match.path}/editar/${rowData.id}`),
        }),
      ]}
    />
  );
};

export default MyTable;
