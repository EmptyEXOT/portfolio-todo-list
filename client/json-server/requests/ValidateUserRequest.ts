import express = require('express');

export interface ValidateUserRequest extends express.Request {
    body: {
        email: string,
        token: string,
    }
}