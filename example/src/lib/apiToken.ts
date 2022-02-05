import { Request, Response } from "express";

export const getAuthToken = function (req: Request): string {
    const bearerHeader = req.headers['authorization']!;
    if (!bearerHeader) {
        throw Error('Invalid HTTP headers');
    }
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];

    return token;
};

export const withApiTokenValidation = async function(fn: (token: string) => void, req: Request): Promise<void> {
    try {
        const headerToken = getAuthToken(req);
        const res = headerToken || 'test-token'; 
        await fn(res);
    } catch (e) {
        if (e instanceof Error) {
            new Error('Invalid authorization token');
            return;
        }
        throw e;
    }
};