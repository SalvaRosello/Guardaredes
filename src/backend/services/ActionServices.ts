import pool from '../configuration/dataBaseConfig.js';
import { ApiResponse } from '../models/interfaces/ApiResponse.js';
import { StatsDto } from '../models/dtos/StatsDto.js';

export class ActionServices {
    static async registerGol(): Promise<ApiResponse> {
        try {
            await pool.query('UPDATE stats SET goals_conceded = goals_conceded + 1 WHERE id = 1');
            return {
                success: true,
                message: 'Gol registrado exitosamente'
            };
        } catch (error) {
            return {
                success: false,
                message: 'Error al registrar el gol',
                errorCode: 'DB_ERROR'
            };
        }
    }

    static async registerParada(): Promise<ApiResponse> {
        try {
            await pool.query('UPDATE stats SET saves = saves + 1 WHERE id = 1');
            return {
                success: true,
                message: 'Parada registrada exitosamente'
            };
        } catch (error) {
            return {
                success: false,
                message: 'Error al registrar la parada',
                errorCode: 'DB_ERROR'
            };
        }
    }

    static async getStats(): Promise<ApiResponse<StatsDto>> {
        try {
            const result = await pool.query('SELECT goals_conceded, saves FROM stats WHERE id = 1');
            return {
                success: true,
                message: 'Estadísticas obtenidas exitosamente',
                data: result.rows[0]
            };
        } catch (error) {
            return {
                success: false,
                message: 'Error al obtener las estadísticas',
                errorCode: 'DB_ERROR'
            };
        }
    }
}