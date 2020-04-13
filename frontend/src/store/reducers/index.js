import { combineReducers } from "redux";

import menu from "./menu";
import main from "./main";
import empresa from "./empresa";

export default combineReducers({
  menu,
  main,
  empresa,
});
