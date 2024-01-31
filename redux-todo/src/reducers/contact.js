export const contactReducer = (state = [], action) => {
    switch (action.type) {
        case "CREATE_NEW_CONTACT":
            return  [...state, action.payload];
        case "REMOVE_CONTACT":
            return state.filter((data, i) => i !== action.payload);
        case "UPDATE_CONTACT":
            return state.map((data, i) => i === action.payload ? action.contact : data);
        default:
            return state;
    }
};

export default contactReducer;