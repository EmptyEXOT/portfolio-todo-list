import express = require('express');

export interface LoginRequests extends express.Request {
    body: {
        username: string,
        password: string,
    }
}