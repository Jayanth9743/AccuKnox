import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const WidgetSlice = createSlice({
    name: "dashboard",
    initialState: data,
    reducers: {
        addWidgets: (state, action) => {
            const {ctegoryId, widget} = action.payload;
            const category = state.find((category) => category.id === ctegoryId);

            if (category) {
                category.widgets.push(widget);
            }
        },

        removeWidgets: (state, action) => {
            const {ctegoryId, widgetId} = action.payload;
            const category = state.find((category) => category.id === ctegoryId);

            if (category) {
                category.widgets = category.widgets.filter((widget) => widget.id !== widgetId);
            }
        },
    },
});

export const { addWidgets, removeWidgets } = WidgetSlice.actions;
export default WidgetSlice.reducer;
