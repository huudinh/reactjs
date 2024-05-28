const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
    if (action.type === "counter/increment") {
        return {
            value: state.value + 1 // important: do NOT mutate the state.
        };
    }

    return state; // return the state as is (in all other cases)
};

const store = createStore(counterReducer);

const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", () => {
    store.dispatch({ type: "counter/increment" });
});

