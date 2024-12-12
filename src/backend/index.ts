import express from "express";
import { supabase } from "./configuration/supabaseConfig.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));


app.get('/api/test-connection', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .limit(1);

        if (error) {
            console.error('Error de Supabase:', error);
            throw error;
        }

        console.log('Datos recibidos:', data);
        res.json({ 
            message: 'Conexión exitosa con Supabase', 
            data,
            tablaExiste: true 
        });
    } catch (error) {
        console.error('Error detallado:', error);
        res.status(500).json({ 
            error: 'Error al conectar con la base de datos',
            details: (error as Error).message 
        });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});


