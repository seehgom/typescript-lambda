export const handler = async (event) => {
    try {
        // Your logic here
        const message = 'Hello, world!';
        return {
            statusCode: 200,
            body: JSON.stringify({ message }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred' }),
        };
    }
};
