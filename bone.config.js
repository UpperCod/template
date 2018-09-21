export default {
    description: "Hi!, now we will create your web-component based on Atomico",
    questions: [
        {
            type: "text",
            name: "__name__",
            message: "What is the name of your component?"
        }
    ],
    onSubmit(data) {
        data.$dist = data.__NAME__ = data.__NAME__.replace(/[^\w]+/g, "-");
        return data;
    }
};
