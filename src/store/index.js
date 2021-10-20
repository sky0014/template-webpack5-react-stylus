import { createStore, register } from "@sky0014/easystore";
import app from "./app";

register(app);

export default createStore({
  debug: true,
});
