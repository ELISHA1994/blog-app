import http from "http";
import path from "path";
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import {default as logger} from "morgan";
import {default as rfs} from "rotating-file-stream";
import { default as DBG } from 'debug';


import { approotdir } from "./approotdir.js";
import {dbConnection, normalizePort, onError, onListening} from "./utils/utils";


import blogsRoute from "./routes/blogs.route.js";
import authRoute from "./routes/auth.route.js";


// Global variables
const __dirname = approotdir;
const debug = DBG('server:debug');
const dbgerror = DBG('server:error');

dotenv.config();

// Initialize the express app object
export const app = express();

// Db connectivity
await dbConnection();

// Setting api port
export const port = normalizePort(process.env.PORT || '1337');
app.set('port', port);

// Middleware
app.use(express.json());
app.use(logger(process.env.REQUEST_LOG_FORMAT || 'common',  {
    stream: process.env.REQUEST_LOG_FILE ?
        rfs.createStream(process.env.REQUEST_LOG_FILE, {
            size: '10M',     // rotate every 10 MegaBytes written
            interval: '1d',  // rotate daily
            compress: 'gzip',
            path: path.join(__dirname, 'logs')
        })
        : process.stdout
}));
app.use(cors());

// routes middleware
app.use('/api', blogsRoute);
app.use('/api', authRoute);

export const server = http.createServer(app);
server.listen(port);

server.on('error', onError)
server.on('listening', onListening)
