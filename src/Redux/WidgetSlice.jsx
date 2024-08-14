import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const WidgetSlice = createSlice({
    name: "widget",
    initialState: {
        widgets: data.widgets,
    },
    reducers: {
        
    },
});
