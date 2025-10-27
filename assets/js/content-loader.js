function loadContent(page, section = null) {
    // Limpar classes ativas
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const mainContent = document.getElementById('app');
    const template = document.getElementById('template-' + page);
    
    if (template) {
        // Atualizar conteúdo
        mainContent.innerHTML = template.innerHTML;
        
        // Atualizar título da página
        switch(page) {
            case 'home':
                document.title = 'ONG Amigão - Proteção Animal';
                break;
            case 'projects':
                document.title = 'Projetos - ONG Amigão';
                break;
            case 'register':
                document.title = 'Cadastro - ONG Amigão';
                break;
            default:
                document.title = 'ONG Amigão';
        }
        
        // Se estivermos na página de projetos e houver uma seção
        if (section && page === 'projects') {
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        
        // Se estivermos na página de cadastro
        if (page === 'register') {
            initializeForms();
        }
    } else {
        mainContent.innerHTML = document.getElementById('template-404').innerHTML;
        document.title = 'Página não encontrada - ONG Amigão';
    }
}