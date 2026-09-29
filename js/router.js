/**
 * js/router.js
 * Gerenciador de Roteamento SPA e Manipulação do DOM.
 */
import { renderizarProjetosDinamicos } from './templates.js';
import { inicializarFormularioCadastro } from './form.js';

export async function render(url) {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Falha ao descarregar a página.');

        const html = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const novoConteudo = doc.querySelector('#app') 
            ? doc.querySelector('#app').innerHTML 
            : (doc.querySelector('main') ? doc.querySelector('main').innerHTML : html);
        
        appContainer.innerHTML = novoConteudo;

        if (doc.title) {
            document.title = doc.title;
        }

        // Re-executa as rotinas dos módulos correspondentes na nova view
        renderizarProjetosDinamicos();
        inicializarFormularioCadastro();

        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
        console.error('Erro no roteamento SPA:', error);
        appContainer.innerHTML = '<p class="alert alert-error">Erro ao carregar o conteúdo solicitado.</p>';
    }
}

export function navigate(url) {
    window.history.pushState({}, "", url);
    render(url);
}

export function inicializarRoteador() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-link]');
        if (link) {
            const targetUrl = link.getAttribute('href');
            if (targetUrl && !targetUrl.startsWith('#')) {
                e.preventDefault();
                navigate(targetUrl);
            }
        }
    });

    window.addEventListener('popstate', () => {
        render(window.location.pathname.split('/').pop() || 'index.html');
    });
}
