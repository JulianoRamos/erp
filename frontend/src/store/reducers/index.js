import { combineReducers } from "redux";

import menu from "./menu";
import main from "./main";
import empresa from "./empresa";
import empresaTable from "./empresaTable";
import empresaForm from "./empresaForm";

export default combineReducers({
  menu,
  main,
  empresa,
  empresaTable,
  empresaForm,
});
