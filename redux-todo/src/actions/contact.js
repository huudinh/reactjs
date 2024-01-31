export const createContact = (contact) => {
    return {
        type: "CREATE_NEW_CONTACT",
        payload: contact,
    };
};
export const removeContact = (id) => {
    return {
        type: "REMOVE_CONTACT",
        payload: id,
    };
};
export const updateContact = (id, contact) => {
    return {
        type: "UPDATE_CONTACT",
        payload: id,
        contact: contact
    };
};
