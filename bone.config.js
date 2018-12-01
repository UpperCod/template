export default {
    description: "Hi!, now we will create your web-component based on Atomico",
    questions: [
        {
            type: "text",
            name: "__name__",
            message: "What is the name of your component?"
        },
        {
            type: "select",
            name: "__typecss__",
            message: "So that library?",
            choices: [
                { title: "Postcss", value: "postcss" },
                { title: "Cssthis", value: "cssthis" }
            ],
            initial: 0
        }
    ],
    onSubmit(data) {
        data.__version__ = "0.7.0";
        data.$source = data.__typecss__;
        data.$dist = data.__name__ = data.__name__.replace(/[^\w]+/g, "-");
        return data;
    }
};
