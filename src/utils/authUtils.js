export function getTokenFromLocalStorage() {
    // Retorna o token de autenticação armazenado no localStorage
    return localStorage.getItem('authToken');
  }