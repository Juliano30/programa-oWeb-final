const routes = {
    '/': renderHome,
    '/projects': renderProjects,
    '/register': renderRegister,
    '/404': render404
};

function renderHome() {
    const template = document.getElementById('template-home');
    document.getElementById('app').innerHTML = template.innerHTML;
    document.title = 'ONG Amigão - Proteção Animal';
}

function renderProjects(section = null) {
    const template = document.getElementById('template-projects');
    document.getElementById('app').innerHTML = template.innerHTML;
    document.title = 'Projetos - ONG Amigão';
    
    if (section) {
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

function renderRegister() {
    const template = document.getElementById('template-register');
    document.getElementById('app').innerHTML = template.innerHTML;
    document.title = 'Cadastro - ONG Amigão';
    initializeForms();
}

function render404() {
    const template = document.getElementById('template-404');
    document.getElementById('app').innerHTML = template.innerHTML;
    document.title = 'Página não encontrada - ONG Amigão';
}

function handleLocation() {
    const path = window.location.pathname.replace('/programa-oWeb-final', '') || '/';
    const section = window.location.hash.replace('#', '');
    
    const route = routes[path] || routes['/404'];
    route(section);
}

function navigate(path, section = null) {
    const fullPath = '/programa-oWeb-final' + (path === '/' ? '' : '/' + path) + (section ? '#' + section : '');
    window.history.pushState({}, '', fullPath);
    handleLocation();
}

// Atualizar a navegação quando o usuário usar os botões do navegador
window.addEventListener('popstate', handleLocation);

// Inicializar a página correta quando o site carregar
document.addEventListener('DOMContentLoaded', handleLocation);