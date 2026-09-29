/**
 * js/storage.js
 * Camada de Persistência via Web Storage (localStorage).
 */
const STORAGE_KEY = 'candidatoCadastro';

export function salvarCandidato(dados) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
        return true;
    } catch (e) {
        console.error('Erro ao gravar dados no localStorage:', e);
        return false;
    }
}

export function obterCandidato() {
    try {
        const dados = localStorage.getItem(STORAGE_KEY);
        return dados ? JSON.parse(dados) : null;
    } catch (e) {
        console.error('Erro ao ler dados do localStorage:', e);
        return null;
    }
}
