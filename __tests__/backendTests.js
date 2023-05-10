import express from 'express';
import response from 'supertest';
import request from 'supertest';
import { describe, beforeEach, expect, test, jest } from '@jest/globals';

import apiRouter from "../server/routes/apiRouter";
import loginRouter from "../server/routes/loginRouter";
import oauthRouter from "../server/routes/oauthRouter";
import qrRouter from "../server/routes/qrRouter";

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.use('/api', apiRouter);
app.use('/qr', qrRouter);
app.use('/oauth', oauthRouter);
app.use('/login', loginRouter);
//const server = app.listen(3000);
const server = app.listen(5001);

afterAll(done => {
  server.close(done);
});

describe("Endpoint /api", () => {
    test("Post  request", async () => {
        const requestBody = {
            question: "hi gpt",
            answer: 'hello',
          };
        const res = await request(server).post("/api").send(requestBody);
        console.log(res);
        expect(typeof res.body).toBe("string")
        expect(res.status).toBe(200)
    })
})

describe("Endpoint /qr", () => {
    test("Get request", () => {

    })
})

describe("Endpoint /oauth", () => {
    test("Get request", () => {

    })
})

describe("Endpoint /login", () => {
    test("Get request", () => {

    })
})