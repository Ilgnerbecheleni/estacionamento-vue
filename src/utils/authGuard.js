
import { getTokenFromLocalStorage } from './authUtils'; // Função para obter o token de autenticação do localStorage

export function isAuthenticated() {
  // Verifique se o usuário está autenticado consultando o backend
  // Você pode usar uma chamada assíncrona (por exemplo, usando Axios) para verificar a autenticação no backend
  const token = getTokenFromLocalStorage(); // Exemplo de obtenção do token de autenticação do localStorage

  // Retorne true se o usuário estiver autenticado, caso contrário, false
  return token !== null;
}