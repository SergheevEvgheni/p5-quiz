export const QuizReducer = (
    state: any = null,
    action: any
): null => {
    switch (action.type) {
        case "REGISTER":
            return action.payload;
        default:
            return state;
    }
};