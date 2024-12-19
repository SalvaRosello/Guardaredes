async function loadStats() {
    const userId = window.location.pathname.split('/').pop();
    try {
        const response = await fetch(`/api/stats/${userId}`);
        const stats = await response.json();
        
        const savesElement = document.getElementById('saves');
        const goalsElement = document.getElementById('goals');
        const savePercentageElement = document.getElementById('savePercentage');

        if (savesElement) {
            savesElement.textContent = `Paradas: ${stats.saves}`;
        }
        if (goalsElement) {
            goalsElement.textContent = `Goles: ${stats.goals}`;
        }
        if (savePercentageElement) {
            savePercentageElement.textContent = `Porcentaje de paradas: ${stats.save_percentage}%`;
        }
    } catch (error) {
        console.error('Error al cargar estadísticas:', error);
    }
}


document.addEventListener('DOMContentLoaded', loadStats);