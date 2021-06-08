const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            if (action.payload) {
                return state += action.payload
            }
            return state += 1
        case "DECREMENT":
            if (action.payload) {
                return state -= action.payload
            }
            return state -= 1

        default:
            return state
    }


}

export default counterReducer