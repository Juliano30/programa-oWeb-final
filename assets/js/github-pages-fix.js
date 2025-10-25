// Adiciona o prefixo do GitHub Pages a todos os links
const BASE_URL = '/programa-oWeb-final';

function fixGitHubPagesLinks() {
    // Ajusta links no header
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith(BASE_URL)) {
            link.href = BASE_URL + href;
        }
    });

    // Ajusta links no conteúdo dinâmico
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('/') && !href.startsWith(BASE_URL)) {
                e.preventDefault();
                window.location.href = BASE_URL + href;
            }
        }
    });
}

// Executa a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', fixGitHubPagesLinks);

// Executa a função quando o conteúdo for atualizado dinamicamente
const observer = new MutationObserver(fixGitHubPagesLinks);
observer.observe(document.body, { childList: true, subtree: true });