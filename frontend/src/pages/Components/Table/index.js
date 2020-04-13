import React from "react";
import MaterialTable from "material-table";
import {
  FilterList as FilterListIcon,
  Assignment as AssignmentIcon,
  Add as AddIcon,
  Create as CreateIcon,
} from "@material-ui/icons";

const MyTable = ({ title, columns, data, deletar, editar, filtering }) => (
  <MaterialTable
    localization={{
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
    }}
    title={title}
    columns={columns}
    data={data}
    style={{
      marginTop: "10px",
      marginLeft: "20px",
      marginRight: "20px",
      marginBottom: "10px",
    }}
    editable={{
      onRowDelete: (oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            const dataDelete = [...data];
            dataDelete.splice(dataDelete.indexOf(oldData), 1);
            deletar(dataDelete, oldData.id);
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
        onClick: (event) =>
          this.setState({ ...this.state, filtering: !filtering }),
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
        onClick: (event) =>
          this.props.history.push(`${this.props.match.path}/formulario`),
      },
      (rowData) => ({
        icon: CreateIcon,
        tooltip: "Editar",
        onClick: (event, rowData) => {
          editar(rowData);
          this.props.history.push(`${this.props.match.path}/formulario`);
        },
      }),
    ]}
  />
);

export default MyTable;
