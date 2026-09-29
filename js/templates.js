/**
 * js/templates.js
 * Camada de Apresentação e Templates Dinâmicos.
 */
export const projetosData = [
    {
        titulo: "Currículo Otimizado para ATS",
        descricao: "Oficinas práticas ensinando regras de ouro para leitura por robôs de triagem, uso de palavras-chave e formatações ideais.",
        imagem: "assets/infografico-ats-modelo.png",
        alt: "Diagrama com layout de currículo para ATS",
        acao: "Participar do Workshop"
    },
    {
        titulo: "Simulação de Entrevistas Reais",
        descricao: "Mentoria com especialistas de RH para treinar linguagem corporal, clareza na fala e perguntas estratégicas ao recrutador.",
        imagem: "assets/projeto-simulacao-entrevista.jpeg",
        alt: "Jovem realizando simulação de entrevista com recrutador",
        acao: "Agendar Mentoria"
    },
    {
        titulo: "Conexão com Portais de Vagas",
        descricao: "Treinamento focado em LinkedIn inicial e cadastros corretos nas principais plataformas de Jovem Aprendiz e Estágio.",
        imagem: "assets/projeto-oficina-curriculo.png",
        alt: "Acesso a plataformas de vagas no computador",
        acao: "Acessar Plataformas"
    }
];

export function renderizarProjetosDinamicos() {
    const container = document.getElementById('lista-projetos');
    if (!container) return;

    container.innerHTML = projetosData.map(projeto => `
        <article class="card">
            <figure>
                <img src="${projeto.imagem}" alt="${projeto.alt}">
            </figure>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="cadastro.html" data-link class="btn btn-secondary">${projeto.acao}</a>
        </article>
    `).join('');
}
