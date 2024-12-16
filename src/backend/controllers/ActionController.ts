import { Request, Response } from 'express';
import { ActionServices } from '../services/ActionServices.js';
import { ApiResponse } from '../models/interfaces/ApiResponse.js';

export class ActionController {
    static async registerGol(req: Request, res: Response): Promise<void> {
        try {
            const response: ApiResponse = await ActionServices.registerGol();
            if (response.success) {
                res.status(200).json(response);
            } else {
                res.status(400).json(response);
            }
        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: 'Error interno del servidor',
                errorCode: error.code || 'INTERNAL_SERVER_ERROR',
            });
        }
    }

    static async registerParada(req: Request, res: Response): Promise<void> {
        try {
            const response: ApiResponse = await ActionServices.registerParada();
            if (response.success) {
                res.status(200).json(response);
            } else {
                res.status(400).json(response);
            }
        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: 'Error interno del servidor',
                errorCode: error.code || 'INTERNAL_SERVER_ERROR',
            });
        }
    }
}