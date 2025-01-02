class AuthRegister {
    static async register(username: any, password: any): Promise<any> {
        const response = await fetch("http://localhost:3000/api/v1/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
 
        const result = await response.json();
 
        if (result.success && result.data) {
            localStorage.setItem("user", JSON.stringify(result.data));
            
            return { success: true, data: result.data };
        } else {
            return { success: false, message: result.message || "Login failed" };
        }
    }
 }

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const form = event.target;
            
            if (!(form instanceof HTMLFormElement)) {
                return;
            }
            
            const formData = new FormData(form);
            const credentials = {
                username: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            const result = await AuthRegister.register(credentials.username, credentials.password);
            
            if (result.success) {
                const userID = result.data.id;
                window.location.href = `/homePage/${userID}`;
            } else {
                alert(result.message || "Registro fallido");
            }
        });
    } else {
        console.error('El formulario del registro no se encontró');
    }
});