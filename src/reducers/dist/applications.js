"use strict";
exports.__esModule = true;
exports.applicationReducers = void 0;
exports.applicationReducers = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 0 /* fetchApplications */:
            return action.payload;
        case 1 /* deleteApplications */:
            return state.filter(function (todo) { return todo.id !== action.payload; });
        case 2 /* addOneApplications */:
            state.unshift(action.payload);
            return state;
        case 3 /* editOneApplication */:
            if (action.payload.id) {
                var foundApplication = state.find(function (a) { return a.id === action.payload.id; });
                if (foundApplication) {
                    foundApplication.ApplicantName = action.payload.ApplicantName;
                    foundApplication.status = action.payload.status;
                }
            }
            return state;
        default:
            return state;
    }
};
