// Simulate a WeekMap for now
export default {
    get: function (obj) {
        return obj._self;
    },
    set: function (obj, value) {
        obj._self = value;
    }
};
