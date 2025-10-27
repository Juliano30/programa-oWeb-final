// Função principal de navegação
function loadPage(page, section = null) {
    if (event) event.preventDefault();
    
    // Carregar o template correto
    const template = document.getElementById(`template-${page}`);
    if (template) {
        // Atualizar o conteúdo
        document.getElementById('app').innerHTML = template.innerHTML;

        // Atualizar o título da página
        updateTitle(page);

        // Tratar seções específicas de projetos
        if (section && page === 'projects') {
            scrollToSection(section);
        }

        // Inicializar formulário se necessário
        if (page === 'register') {
            initializeForm();
        }
    }
}

// Atualizar o título da página
function updateTitle(page) {
    const titles = {
        'home': 'ONG Amigão - Proteção Animal',
        'projects': 'Projetos - ONG Amigão',
        'register': 'Cadastro - ONG Amigão'
    };
    document.title = titles[page] || 'ONG Amigão';
}

// Rolar até a seção específica
function scrollToSection(section) {
    setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// Inicializar formulário
function initializeForm() {
    const form = document.getElementById('volunteerForm');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            // Validar campos
            const fields = form.querySelectorAll('input, select');
            let isValid = true;

            fields.forEach(field => {
                if (field.hasAttribute('required') && !field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                alert('Cadastro enviado com sucesso!');
                form.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        };
    }
}

// Inicializar quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});