import express = require('express');

export interface SignoutRequests extends express.Request {
    body: {
        email: string,
        token: string,
    }
}