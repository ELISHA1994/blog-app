import mongoose from "mongoose";
import { port, server } from "../server";
import { default as DBG } from 'debug';

const debug = DBG('server:debug');
const dbgerror = DBG('server:error');

export function normalizePort (val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

export function onError(error) {
    dbgerror(error);
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

export function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug(`Listening on ${bind}`)
}

export async function dbConnection() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        debug("Database Connected");
    } catch (err) {
        dbgerror("Database connectivity error", err);
        throw new Error(err);
    }
}


function extraLongFactorials(n) {
    let memoization = [BigInt(0), BigInt(1)];

    const factorial = num => (typeof memoization[num] !== 'number')
        ? ((num - BigInt(1)) > 0
                ? (num * factorial(num - BigInt(1)))
                : BigInt(1)
        )
        : memoization[num]

    console.log(String(factorial(BigInt(n))));
}