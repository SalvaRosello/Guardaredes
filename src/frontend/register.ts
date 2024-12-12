async function registerUser(event) {
    event.preventDefault();
    const usernameElement = document.getElementById('username') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const passwordElement = document.getElementById('password') as HTMLInputElement;

    if (!usernameElement || !emailElement || !passwordElement) {
      throw new Error('No se encontraron los elementos del formulario');
    }

    const formData = {
      username: usernameElement.value,
      email: emailElement.value,
      password: passwordElement.value
    };
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      
      if (response.ok) {
        alert('Usuario registrado exitosamente');
        
      } else {
        alert(data.error || 'Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    }
  }