export const TestReducer = (
    state: any = null,
    action: any
): any => {
    switch (action.type) {
        case "COMPLETE_TEST":
            const score = action.payload.questionStack.reduce((acc: any, item: any) => {
                const key = Object.keys(item).find(key => String(item[key]) === String(item.Answer));
                const isAnswerCorrect = String(key).toLowerCase() === String(item.Correct).toLowerCase();
                return acc + (isAnswerCorrect ? 100 / action.payload.numberOfQuestions : 0)
            }, 0)
            return { score };
        default:
            return state;
    }
};