import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

import { sequelize } from './database/database.js'; 
import './models/Project.js';
import './models/Task.js';

const PORT = process.env.APP_PORT;
async function main() {
    try {
        await sequelize.sync({ force: true });
        app.listen(PORT, () => {
            console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

main();