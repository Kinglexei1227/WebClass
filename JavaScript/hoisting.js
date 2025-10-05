export default {
    data() {
        return {
            message: getGreeting() // Hoisted about getGreeting
        };
    },
    mothods: {
        getGreeting() {
            return "Hello from hoisted method!"
        }
    }
};