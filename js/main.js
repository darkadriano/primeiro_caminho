/**
 * js/main.js
 * Ponto de entrada do sistema que orquestra os submódulos ES6.
 */
import { renderizarProjetosDinamicos } from './templates.js';
import { inicializarFormularioCadastro } from './form.js';
import { inicializarRoteador } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o roteador global SPA
    inicializarRoteador();

    // 2. Executa as verificações da página atual
    renderizarProjetosDinamicos();
    inicializarFormularioCadastro();
});
