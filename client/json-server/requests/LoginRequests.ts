import express = require('express');

export interface LoginRequests extends express.Request {
    body: {
        email: string,
        password: string,
    }
}