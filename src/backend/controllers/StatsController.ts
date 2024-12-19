import pool from '../configuration/dataBaseConfig.js';
import { Pool } from 'pg';

export class StatsController {
    private db: Pool;

    constructor() {
        this.db = pool;
    }

    async getUserStats(userId: string) {
        const query = `
            SELECT 
                COUNT(CASE WHEN action_type = 'save' THEN 1 END) as saves,
                COUNT(CASE WHEN action_type = 'goal' THEN 1 END) as goals,
                COUNT(CASE WHEN action_type IN ('save', 'goal') THEN 1 END) as total_shots,
                ROUND(COUNT(CASE WHEN action_type = 'save' THEN 1 END) * 100.0 / 
                    NULLIF(COUNT(CASE WHEN action_type IN ('save', 'goal') THEN 1 END), 0), 2) as save_percentage
            FROM actions 
            WHERE user_id = $1
        `;
        
        const stats = await this.db.query(query, [userId]);
        return stats.rows[0];
    }
}