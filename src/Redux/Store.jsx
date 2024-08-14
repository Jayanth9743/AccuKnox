import { configureStore } from "@reduxjs/toolkit";
import WidgetReducer  from "./WidgetSlice";

const store = configureStore({
    reducer: {
        dashboard: WidgetReducer ,
    },
});

export default store;