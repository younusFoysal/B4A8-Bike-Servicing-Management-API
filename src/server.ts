import { Server } from "http";
import app from "./app";

const port = 3000;

async function main() {
    const server: Server = app.listen(port, () => {
        console.log("Server is running on port ", port);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (error) => {
        console.error('Unhandled Rejection:', error);
        if (server) {
            server.close(() => {
                process.exit(1);
            });
        } else {
            process.exit(1);
        }
    });
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

main();
