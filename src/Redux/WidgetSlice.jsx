import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const WidgetSlice = createSlice({
    name: "dashboard",
    initialState: {
        categories: data.categories,
    },
    reducers: {
        addWidgets: (state, action) => {
            const { categoryId, widget } = action.payload;
            const category = state.categories.find((category) => category.id === categoryId);

            if (category) {
                if(category.widgets.length < 3){
                    category.widgets.push(widget);
                }
                else{
                    alert("You can add only 3 widgets in a category");
                }
            }
        },

        removeWidgets: (state, action) => {
            const { categoryId, widgetId } = action.payload;
            const category = state.categories.find((category) => category.id === categoryId);

            if (category) {
                category.widgets = category.widgets.filter((widget) => widget.id !== widgetId);
            }
        },
    },
});

export const { addWidgets, removeWidgets } = WidgetSlice.actions;
export default WidgetSlice.reducer;

