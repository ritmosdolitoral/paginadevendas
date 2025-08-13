// ===== JAVASCRIPT ESTRATÉGICO - FUNCIONALIDADES AVANÇADAS =====

// Configuração estratégica
const CONFIG = {
    whatsappNumber: '5522998758861',
    siteName: 'CONEXAO BUZIOS',
    animations: {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    localStorage: {
        flowProgress: 'conexao_flow_progress',
        userAnswers: 'conexao_user_answers',
        currentStep: 'conexao_current_step'
    }
};

// ===== INICIALIZAÇÃO ESTRATÉGICA =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 CONEXAO BUZIOS - Site carregado com funcionalidades estratégicas');
    
    // Aguardar um pouco para garantir que o DOM está totalmente carregado
    setTimeout(() => {
        // Inicializar todas as funcionalidades
        initializeHeader();
        initializeAnimations();
        initializeWhatsAppFlow();
        initializeFAQ();
        initializeScrollEffects();
        initializeMobileMenu();
        initializePerformance();
        initializeAccessibility();
        initializeFlowContinuity();
        
        console.log('✅ Todas as funcionalidades estratégicas carregadas!');
        
        // Verificação final de funcionalidades
        console.log('🔍 Verificação final de funcionalidades:');
        console.log('💬 toggleFAQ:', typeof toggleFAQ === 'function' ? '✅' : '❌');
        console.log('📱 Menu mobile:', document.getElementById('nav-toggle') ? '✅' : '❌');
        console.log('💬 openWhatsAppFlow:', typeof openWhatsAppFlow === 'function' ? '✅' : '❌');
        console.log('📜 scrollToSection:', typeof scrollToSection === 'function' ? '✅' : '❌');
        console.log('🎨 Animações:', typeof initializeAnimations === 'function' ? '✅' : '❌');
        console.log('♿ Acessibilidade:', typeof initializeAccessibility === 'function' ? '✅' : '❌');
        console.log('💾 LocalStorage:', typeof localStorage !== 'undefined' ? '✅' : '❌');
        console.log('🚀 Site CONEXAO BUZIOS pronto para converter!');
    }, 100);
});

// ===== HEADER ESTRATÉGICO =====
function initializeHeader() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Adicionar classe scrolled quando rolar
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Esconder/mostrar header baseado na direção do scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// ===== ANIMAÇÕES ESTRATÉGICAS =====
function initializeAnimations() {
    // Intersection Observer para animações de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.dor-card, .prova-card, .plano-card, .faq-item, .diferencial, .garantia-card');
    animateElements.forEach(el => observer.observe(el));
    
    // Animações de hover estratégicas
    initializeHoverEffects();
}

function initializeHoverEffects() {
    // Efeitos de hover para cards
    const cards = document.querySelectorAll('.dor-card, .prova-card, .plano-card, .garantia-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== FUNIL DE WHATSAPP ESTRATÉGICO - MULTI-ETAPAS =====
function initializeWhatsAppFlow() {
    // Configurar fluxos de WhatsApp
    window.openWhatsAppFlow = function(type = 'default') {
        const flows = {
            'urgencia': {
                title: '🚨 URGENTE - Vamos Resolver Seu Problema AGORA!',
                steps: [
                    {
                        question: 'Qual é a sua dor mais urgente hoje?',
                        options: {
                            'perdendo_vendas': 'Estou perdendo vendas para concorrentes',
                            'sem_presenca': 'Não tenho presença online profissional',
                            'sem_conversao': 'Tenho tráfego mas não converto',
                            'sem_tempo': 'Não tenho tempo para aprender'
                        }
                    },
                    {
                        question: 'Qual é o seu tipo de negócio?',
                        options: {
                            'loja_fisica': 'Loja física que quer vender online',
                            'servicos': 'Prestação de serviços',
                            'consultoria': 'Consultoria/Profissional liberal',
                            'produtos_digitais': 'Produtos digitais',
                            'dropshipping': 'Dropshipping/E-commerce',
                            'outro': 'Outro tipo de negócio'
                        }
                    },
                    {
                        question: 'Qual é o seu orçamento disponível?',
                        options: {
                            'ate_100': 'Até R$ 100 (começar pequeno)',
                            '100_300': 'R$ 100 - R$ 300 (investimento médio)',
                            '300_500': 'R$ 300 - R$ 500 (investimento alto)',
                            '500_mais': 'R$ 500+ (investimento premium)'
                        }
                    },
                    {
                        question: 'Qual é a sua urgência?',
                        options: {
                            'muito_urgente': 'Muito urgente - preciso em 48h',
                            'urgente': 'Urgente - preciso na semana',
                            'moderado': 'Moderado - posso esperar 1 semana',
                            'sem_pressa': 'Sem pressa - quero qualidade'
                        }
                    },
                    {
                        question: 'Que tipo de site você precisa?',
                        options: {
                            'landing_simples': 'Landing page simples (R$ 97)',
                            'site_completo': 'Site completo profissional (R$ 297)',
                            'ecommerce': 'Loja online/E-commerce (R$ 497)',
                            'consultoria': 'Consultoria + site (R$ 797)'
                        }
                    }
                ]
            },
            'comeca_agora': {
                title: '🚀 Plano Começa Agora - Vamos Começar Sua Jornada!',
                steps: [
                    {
                        question: 'Qual é o seu tipo de negócio?',
                        options: {
                            'loja_fisica': 'Loja física que quer vender online',
                            'servicos': 'Prestação de serviços',
                            'consultoria': 'Consultoria/Profissional liberal',
                            'produtos_digitais': 'Produtos digitais',
                            'dropshipping': 'Dropshipping/E-commerce',
                            'outro': 'Outro tipo de negócio'
                        }
                    },
                    {
                        question: 'Você já tem algum material?',
                        options: {
                            'fotos_textos': 'Tenho fotos e textos prontos',
                            'so_fotos': 'Só tenho fotos',
                            'so_textos': 'Só tenho textos',
                            'nada': 'Não tenho nada ainda'
                        }
                    },
                    {
                        question: 'Qual é a sua urgência?',
                        options: {
                            'muito_urgente': 'Muito urgente - preciso em 48h',
                            'urgente': 'Urgente - preciso na semana',
                            'moderado': 'Moderado - posso esperar 1 semana',
                            'sem_pressa': 'Sem pressa - quero qualidade'
                        }
                    },
                    {
                        question: 'Que funcionalidade você precisa mais?',
                        options: {
                            'vendas': 'Botão de vendas/WhatsApp',
                            'leads': 'Captura de leads',
                            'portfolio': 'Portfolio de trabalhos',
                            'blog': 'Blog para SEO',
                            'tudo': 'Tudo completo'
                        }
                    }
                ]
            },
            'profissional': {
                title: '⭐ Plano Profissional - Vamos Criar Sua Presença Online!',
                steps: [
                    {
                        question: 'Quantas páginas você precisa?',
                        options: {
                            '3_paginas': '3 páginas (básico)',
                            '5_paginas': '5 páginas (intermediário)',
                            '7_paginas': '7 páginas (completo)',
                            '10_mais': '10+ páginas (premium)'
                        }
                    },
                    {
                        question: 'Você precisa de SEO otimizado?',
                        options: {
                            'seo_basico': 'SEO básico (incluído)',
                            'seo_avancado': 'SEO avançado (+ R$ 100)',
                            'seo_completo': 'SEO completo + blog (+ R$ 200)',
                            'nao_preciso': 'Não preciso de SEO'
                        }
                    },
                    {
                        question: 'Qual é o seu público-alvo?',
                        options: {
                            'b2c': 'Consumidores finais (B2C)',
                            'b2b': 'Empresas (B2B)',
                            'ambos': 'Ambos os públicos',
                            'especifico': 'Público específico'
                        }
                    },
                    {
                        question: 'Que tipo de conteúdo você quer?',
                        options: {
                            'textos_persuasivos': 'Textos persuasivos (incluído)',
                            'copy_avancado': 'Copy avançado (+ R$ 150)',
                            'blog_posts': 'Blog posts (+ R$ 200)',
                            'tudo': 'Tudo completo (+ R$ 300)'
                        }
                    }
                ]
            },
            'turbo_express': {
                title: '⚡ Turbo Express - Prioridade Máxima na Fila!',
                steps: [
                    {
                        question: 'Qual é a sua urgência real?',
                        options: {
                            '48h': '48 horas (máxima urgência)',
                            '72h': '72 horas (urgência alta)',
                            '1_semana': '1 semana (urgência moderada)',
                            'personalizado': 'Prazo personalizado'
                        }
                    },
                    {
                        question: 'Que tipo de projeto é?',
                        options: {
                            'site_completo': 'Site completo profissional',
                            'ecommerce': 'Loja online/E-commerce',
                            'landing_premium': 'Landing page premium',
                            'consultoria_completa': 'Consultoria + site + marketing'
                        }
                    },
                    {
                        question: 'Você precisa de prioridade máxima?',
                        options: {
                            'sim_prioridade': 'Sim, preciso de prioridade máxima',
                            'nao_prioridade': 'Não, posso esperar na fila normal',
                            'personalizado': 'Prazo personalizado'
                        }
                    },
                    {
                        question: 'Que extras você quer?',
                        options: {
                            'artes_premium': 'Artes premium (+ R$ 200)',
                            'seo_avancado': 'SEO avançado (+ R$ 150)',
                            'marketing': 'Marketing digital (+ R$ 300)',
                            'tudo_premium': 'Tudo premium (+ R$ 500)'
                        }
                    }
                ]
            },
            'default': {
                title: '💬 Olá! Vamos Encontrar a Solução Perfeita para Você!',
                steps: [
                    {
                        question: 'Qual serviço você tem interesse?',
                        options: {
                            'comeca_agora': 'Começa Agora - R$ 97 (entrada)',
                            'profissional': 'Profissional - R$ 297 (mais vendido)',
                            'turbo_express': 'Turbo Express - R$ 497 (urgência)',
                            'consultoria': 'Consultoria personalizada'
                        }
                    },
                    {
                        question: 'Qual é o seu tipo de negócio?',
                        options: {
                            'loja_fisica': 'Loja física que quer vender online',
                            'servicos': 'Prestação de serviços',
                            'consultoria': 'Consultoria/Profissional liberal',
                            'produtos_digitais': 'Produtos digitais',
                            'dropshipping': 'Dropshipping/E-commerce',
                            'outro': 'Outro tipo de negócio'
                        }
                    },
                    {
                        question: 'Qual é o seu orçamento?',
                        options: {
                            'ate_100': 'Até R$ 100',
                            '100_300': 'R$ 100 - R$ 300',
                            '300_500': 'R$ 300 - R$ 500',
                            '500_mais': 'R$ 500+'
                        }
                    },
                    {
                        question: 'Qual é a sua urgência?',
                        options: {
                            'muito_urgente': 'Muito urgente',
                            'urgente': 'Urgente',
                            'moderado': 'Moderado',
                            'sem_pressa': 'Sem pressa'
                        }
                    }
                ]
            }
        };
        
        const flow = flows[type] || flows.default;
        showWhatsAppFunnel(flow, type);
    };
}

function showWhatsAppFunnel(flow, flowType) {
    // Verificar se há progresso salvo
    const savedProgress = localStorage.getItem(CONFIG.localStorage.flowProgress);
    const savedAnswers = JSON.parse(localStorage.getItem(CONFIG.localStorage.userAnswers) || '{}');
    const currentStep = parseInt(localStorage.getItem(CONFIG.localStorage.currentStep) || '1');
    
    // Criar modal de funil
    const modal = document.createElement('div');
    modal.className = 'whatsapp-funnel-modal';
    modal.innerHTML = `
        <div class="whatsapp-funnel-content">
            <div class="funnel-header">
                <h3>${flow.title}</h3>
                <button class="close-funnel" onclick="closeWhatsAppFunnel()" aria-label="Fechar funil de WhatsApp">×</button>
            </div>
            <div class="funnel-body">
                <div class="funnel-progress">
                    <div class="progress-info">
                        <span class="progress-text">Etapa <span id="current-step">1</span> de ${flow.steps.length}</span>
                        <span class="progress-percentage">0%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%"></div>
                    </div>
                    <div class="progress-steps">
                        ${flow.steps.map((_, index) => `
                            <div class="progress-step ${index === 0 ? 'active' : ''}" data-step="${index + 1}">
                                <span class="step-number">${index + 1}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="funnel-steps">
                    ${flow.steps.map((step, index) => `
                        <div class="funnel-step ${index === 0 ? 'active' : ''}" data-step="${index + 1}">
                            <h4>${step.question}</h4>
                            <div class="funnel-options">
                                ${Object.entries(step.options).map(([key, value]) => `
                                    <button class="funnel-option" data-value="${key}" data-step="${index + 1}" data-flow="${flowType}" aria-label="Selecionar: ${value}">${value}</button>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="funnel-navigation">
                    <button class="btn-prev" onclick="previousStep()" style="display: none;" aria-label="Voltar para etapa anterior">← Anterior</button>
                    <button class="btn-next" onclick="nextStep()" style="display: none;" aria-label="Ir para próxima etapa">Próximo →</button>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar estilos melhorados
    const styles = document.createElement('style');
    styles.setAttribute('data-funnel-styles', 'true');
    styles.textContent = `
        .whatsapp-funnel-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .whatsapp-funnel-content {
            background: white;
            border-radius: 20px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        
        .funnel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .funnel-header h3 {
            margin: 0;
            color: #1f2937;
            font-size: 1.25rem;
        }
        
        .close-funnel {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #6b7280;
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .close-funnel:hover {
            background: #f3f4f6;
            color: #374151;
        }
        
        .funnel-body {
            padding: 1.5rem;
        }
        
        .funnel-progress {
            margin-bottom: 2rem;
        }
        
        .progress-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        
        .progress-text {
            font-size: 0.875rem;
            color: #6b7280;
        }
        
        .progress-percentage {
            font-size: 0.875rem;
            color: #10b981;
            font-weight: 600;
        }
        
        .progress-bar {
            width: 100%;
            height: 6px;
            background: #e5e7eb;
            border-radius: 3px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #10b981, #059669);
            transition: width 0.5s ease;
        }
        
        .progress-steps {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            gap: 0.5rem;
        }
        
        .progress-step {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            border-radius: 20px;
            background: #f3f4f6;
            border: 2px solid #e5e7eb;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .progress-step.active {
            background: #10b981;
            border-color: #10b981;
            color: white;
            transform: scale(1.05);
        }
        
        .progress-step.completed {
            background: #059669;
            border-color: #059669;
            color: white;
        }
        
        .step-number {
            font-weight: 600;
            font-size: 0.875rem;
        }
        
        .funnel-steps {
            position: relative;
        }
        
        .funnel-step {
            display: none;
            animation: fadeInUp 0.3s ease;
        }
        
        .funnel-step.active {
            display: block;
        }
        
        .funnel-step h4 {
            margin-bottom: 1.5rem;
            color: #374151;
            font-size: 1.125rem;
            line-height: 1.4;
        }
        
        .funnel-options {
            display: grid;
            gap: 1rem;
        }
        
        .funnel-option {
            background: #f9fafb;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            padding: 1rem;
            text-align: left;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            color: #374151;
            line-height: 1.4;
        }
        
        .funnel-option:hover {
            background: #10b981;
            color: white;
            border-color: #10b981;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        
        .funnel-option.selected {
            background: #10b981;
            color: white;
            border-color: #10b981;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        
        .funnel-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            gap: 1rem;
        }
        
        .btn-prev, .btn-next {
            background: #6b7280;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }
        
        .btn-prev:hover, .btn-next:hover {
            background: #4b5563;
            transform: translateY(-1px);
        }
        
        .btn-next {
            background: #10b981;
        }
        
        .btn-next:hover {
            background: #059669;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 480px) {
            .whatsapp-funnel-content {
                width: 95%;
                margin: 1rem;
                max-height: 90vh;
            }
            
            .funnel-option {
                padding: 0.75rem;
                font-size: 0.875rem;
                min-height: 60px;
                display: flex;
                align-items: center;
            }
            
            .funnel-navigation {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .btn-prev, .btn-next {
                width: 100%;
                padding: 1rem;
                font-size: 1rem;
            }
            
            .funnel-header h3 {
                font-size: 1.125rem;
            }
            
            .funnel-step h4 {
                font-size: 1rem;
            }
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(modal);
    
    // Inicializar funil
    initializeFunnel(flow, flowType, currentStep);
    
    // Adicionar loading sutil
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'funnel-loading';
    loadingIndicator.innerHTML = '<div class="loading-spinner"></div>';
    loadingIndicator.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10001;
        display: none;
    `;
    
    const spinnerStyles = document.createElement('style');
    spinnerStyles.textContent = `
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f4f6;
            border-top: 4px solid #10b981;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(spinnerStyles);
    document.body.appendChild(loadingIndicator);
    
    // Mostrar loading brevemente
    loadingIndicator.style.display = 'block';
    setTimeout(() => {
        loadingIndicator.style.display = 'none';
    }, 300);
    
    // Adicionar funcionalidade aos botões
    const options = modal.querySelectorAll('.funnel-option');
    options.forEach(option => {
        const clickHandler = function() {
            selectOption(this, flow, flowType);
        };
        
        option.addEventListener('click', clickHandler);
        option._clickHandler = clickHandler; // Guardar referência para remoção
        
        // Adicionar feedback tátil para mobile
        option.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        option.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeWhatsAppFunnel();
        }
    });
    
    // Navegação por teclado no funil
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const activeOption = document.querySelector('.funnel-option:focus');
            if (activeOption) {
                e.preventDefault();
                selectOption(activeOption, flow, flowType);
            }
        }
        
        // Navegação com setas
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const currentStep = parseInt(document.querySelector('.funnel-step.active').dataset.step);
            const totalSteps = flow.steps.length;
            
            if (e.key === 'ArrowLeft' && currentStep > 1) {
                previousStep();
            } else if (e.key === 'ArrowRight' && currentStep < totalSteps) {
                nextStep();
            }
        }
    });
    
    // Foco automático na primeira opção
    setTimeout(() => {
        const firstOption = modal.querySelector('.funnel-option');
        if (firstOption) {
            firstOption.focus();
        }
    }, 100);
}

function initializeFunnel(flow, flowType, currentStep = 1) {
    // Salvar configuração do funil
    localStorage.setItem(CONFIG.localStorage.flowProgress, JSON.stringify({
        flowType: flowType,
        totalSteps: flow.steps.length,
        currentStep: currentStep
    }));
    
    // Atualizar progresso visual
    updateProgress(currentStep, flow.steps.length);
    
    // Mostrar/ocultar botões de navegação
    updateNavigation(currentStep, flow.steps.length);
}

function selectOption(option, flow, flowType) {
    const step = parseInt(option.dataset.step);
    const value = option.dataset.value;
    
    // Remover seleção anterior do mesmo passo
    const currentStepOptions = document.querySelectorAll(`.funnel-option[data-step="${step}"]`);
    currentStepOptions.forEach(opt => opt.classList.remove('selected'));
    
    // Selecionar opção atual
    option.classList.add('selected');
    
    // Salvar resposta
    const answers = JSON.parse(localStorage.getItem(CONFIG.localStorage.userAnswers) || '{}');
    answers[`step_${step}`] = value;
    localStorage.setItem(CONFIG.localStorage.userAnswers, JSON.stringify(answers));
    
    // Atualizar passo atual no localStorage para garantir funcionamento do botão Voltar
    const progress = JSON.parse(localStorage.getItem(CONFIG.localStorage.flowProgress) || '{}');
    if (progress && progress.totalSteps) {
        progress.currentStep = step;
        localStorage.setItem(CONFIG.localStorage.flowProgress, JSON.stringify(progress));
    }

    // Feedback visual de seleção
    option.style.transform = 'scale(0.95)';
    setTimeout(() => {
        option.style.transform = 'scale(1)';
    }, 150);
    
    // Mostrar feedback de seleção
    const feedback = document.createElement('div');
    feedback.className = 'selection-feedback';
    feedback.textContent = '✓ Selecionado';
    feedback.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #10b981;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 600;
        z-index: 1000;
        animation: fadeInOut 1s ease;
    `;
    const feedbackStyles = document.createElement('style');
    feedbackStyles.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(feedbackStyles);
    document.body.appendChild(feedback);
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.remove();
        }
    }, 1000);
    
    // Avançar automaticamente para o próximo passo, atualizando o passo atual
    setTimeout(() => {
        if (step < flow.steps.length) {
            // Atualizar currentStep antes de avançar
            const progress = JSON.parse(localStorage.getItem(CONFIG.localStorage.flowProgress) || '{}');
            if (progress && progress.totalSteps) {
                progress.currentStep = step + 1;
                localStorage.setItem(CONFIG.localStorage.flowProgress, JSON.stringify(progress));
            }
            showStep(step + 1);
            updateProgress(step + 1, flow.steps.length);
            updateNavigation(step + 1, flow.steps.length);
        } else {
            // Último passo - gerar mensagem
            generateFinalMessage(flow, flowType);
        }
    }, 800);
}

function nextStep() {
    const progress = JSON.parse(localStorage.getItem(CONFIG.localStorage.flowProgress));
    let currentStep = progress.currentStep;
    const totalSteps = progress.totalSteps;
    if (currentStep < totalSteps) {
        currentStep++;
        progress.currentStep = currentStep;
        localStorage.setItem(CONFIG.localStorage.flowProgress, JSON.stringify(progress));
        showStep(currentStep);
        updateProgress(currentStep, totalSteps);
        updateNavigation(currentStep, totalSteps);
    }
}

function previousStep() {
    const progress = JSON.parse(localStorage.getItem(CONFIG.localStorage.flowProgress));
    let currentStep = progress.currentStep;
    const totalSteps = progress.totalSteps;
    if (currentStep > 1) {
        currentStep--;
        progress.currentStep = currentStep;
        localStorage.setItem(CONFIG.localStorage.flowProgress, JSON.stringify(progress));
        showStep(currentStep);
        updateProgress(currentStep, totalSteps);
        updateNavigation(currentStep, totalSteps);
    }
}

function showStep(stepNumber) {
    // Ocultar todos os passos
    const steps = document.querySelectorAll('.funnel-step');
    steps.forEach(step => step.classList.remove('active'));
    
    // Mostrar passo atual
    const currentStep = document.querySelector(`.funnel-step[data-step="${stepNumber}"]`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
    
    // Restaurar seleção anterior se existir
    const answers = JSON.parse(localStorage.getItem(CONFIG.localStorage.userAnswers) || '{}');
    const previousSelection = answers[`step_${stepNumber}`];
    if (previousSelection) {
        const selectedOption = document.querySelector(`.funnel-option[data-value="${previousSelection}"][data-step="${stepNumber}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }
}

function updateProgress(currentStep, totalSteps) {
    const percentage = Math.round((currentStep / totalSteps) * 100);
    
    // Atualizar texto do progresso
    const currentStepElement = document.getElementById('current-step');
    if (currentStepElement) {
        currentStepElement.textContent = currentStep;
    }
    
    // Atualizar barra de progresso
    const progressFill = document.querySelector('.progress-fill');
    const progressPercentage = document.querySelector('.progress-percentage');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressPercentage) {
        progressPercentage.textContent = `${percentage}%`;
    }
    
    // Atualizar indicadores de etapas
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNumber < currentStep) {
            step.classList.add('completed');
        } else if (stepNumber === currentStep) {
            step.classList.add('active');
        }
    });
}

function updateNavigation(currentStep, totalSteps) {
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    
    if (btnPrev) {
        btnPrev.style.display = currentStep > 1 ? 'block' : 'none';
    }
    
    if (btnNext) {
        btnNext.style.display = currentStep < totalSteps ? 'block' : 'none';
    }
}

function generateFinalMessage(flow, flowType) {
    const answers = JSON.parse(localStorage.getItem(CONFIG.localStorage.userAnswers) || '{}');
    const progress = JSON.parse(localStorage.getItem(CONFIG.localStorage.flowProgress));
    
    // Mapear respostas para texto legível
    const answerLabels = {
        // Dores
        'perdendo_vendas': 'Estou perdendo vendas para concorrentes',
        'sem_presenca': 'Não tenho presença online profissional',
        'sem_conversao': 'Tenho tráfego mas não converto',
        'sem_tempo': 'Não tenho tempo para aprender',
        
        // Tipos de negócio
        'loja_fisica': 'Loja física que quer vender online',
        'servicos': 'Prestação de serviços',
        'consultoria': 'Consultoria/Profissional liberal',
        'produtos_digitais': 'Produtos digitais',
        'dropshipping': 'Dropshipping/E-commerce',
        'outro': 'Outro tipo de negócio',
        
        // Orçamentos
        'ate_100': 'Até R$ 100',
        '100_300': 'R$ 100 - R$ 300',
        '300_500': 'R$ 300 - R$ 500',
        '500_mais': 'R$ 500+',
        
        // Urgências
        'muito_urgente': 'Muito urgente',
        'urgente': 'Urgente',
        'moderado': 'Moderado',
        'sem_pressa': 'Sem pressa',
        
        // Serviços
        'comeca_agora': 'Começa Agora - R$ 97',
        'profissional': 'Profissional - R$ 297',
        'turbo_express': 'Turbo Express - R$ 497',
        'consultoria': 'Consultoria personalizada',
        
        // Tipos de site
        'landing_simples': 'Landing page simples',
        'site_completo': 'Site completo profissional',
        'ecommerce': 'Loja online/E-commerce',
        'consultoria_completa': 'Consultoria + site + marketing',
        
        // Materiais
        'fotos_textos': 'Tenho fotos e textos prontos',
        'so_fotos': 'Só tenho fotos',
        'so_textos': 'Só tenho textos',
        'nada': 'Não tenho nada ainda',
        
        // Funcionalidades
        'vendas': 'Botão de vendas/WhatsApp',
        'leads': 'Captura de leads',
        'portfolio': 'Portfolio de trabalhos',
        'blog': 'Blog para SEO',
        'tudo': 'Tudo completo',
        
        // Páginas
        '3_paginas': '3 páginas',
        '5_paginas': '5 páginas',
        '7_paginas': '7 páginas',
        '10_mais': '10+ páginas',
        
        // SEO
        'seo_basico': 'SEO básico',
        'seo_avancado': 'SEO avançado',
        'seo_completo': 'SEO completo + blog',
        'nao_preciso': 'Não preciso de SEO',
        
        // Público
        'b2c': 'Consumidores finais (B2C)',
        'b2b': 'Empresas (B2B)',
        'ambos': 'Ambos os públicos',
        'especifico': 'Público específico',
        
        // Conteúdo
        'textos_persuasivos': 'Textos persuasivos',
        'copy_avancado': 'Copy avançado',
        'blog_posts': 'Blog posts',
        'tudo': 'Tudo completo',
        
        // Prazos
        '48h': '48 horas',
        '72h': '72 horas',
        '1_semana': '1 semana',
        'personalizado': 'Prazo personalizado',
        
        // Prioridade
        'sim_prioridade': 'Sim, preciso de prioridade máxima',
        'nao_prioridade': 'Não, posso esperar na fila normal',
        
        // Extras
        'artes_premium': 'Artes premium',
        'marketing': 'Marketing digital',
        'tudo_premium': 'Tudo premium'
    };
    
    // Construir mensagem final
    let message = `🚀 *CONEXAO BUZIOS - Solicitação de Orçamento*\n\n`;
    message += `*Dados do Cliente:*\n`;
    
    // Adicionar cada resposta
    for (let i = 1; i <= progress.totalSteps; i++) {
        const answer = answers[`step_${i}`];
        if (answer) {
            const question = flow.steps[i - 1].question;
            const answerText = answerLabels[answer] || answer;
            message += `• *${question}*: ${answerText}\n`;
        }
    }
    
    message += `\n*Informações Adicionais:*\n`;
    message += `• Data: ${new Date().toLocaleDateString('pt-BR')}\n`;
    message += `• Hora: ${new Date().toLocaleTimeString('pt-BR')}\n`;
    message += `• Fluxo: ${flowType}\n`;
    
    message += `\n*Próximos Passos:*\n`;
    message += `1. Análise personalizada do seu projeto\n`;
    message += `2. Proposta detalhada com prazo e valor\n`;
    message += `3. Início do desenvolvimento\n`;
    
    message += `\n*Contato:*\n`;
    message += `📱 WhatsApp: (22) 99875-8861\n`;
    message += `🌐 Site: conexaobuzios.com\n`;
    
    // Mostrar feedback de conclusão
    const modal = document.querySelector('.whatsapp-funnel-modal');
    if (modal) {
        const content = modal.querySelector('.whatsapp-funnel-content');
        content.innerHTML = `
            <div class="funnel-completion">
                <div class="completion-icon">🎉</div>
                <h3>Perfeito! Vamos te ajudar!</h3>
                <p>Sua solicitação foi enviada com sucesso. Em breve entraremos em contato via WhatsApp!</p>
                <div class="completion-details">
                    <p><strong>Próximos passos:</strong></p>
                    <ul>
                        <li>✓ Análise personalizada do seu projeto</li>
                        <li>✓ Proposta detalhada com prazo e valor</li>
                        <li>✓ Início do desenvolvimento</li>
                    </ul>
                </div>
                <button class="btn-completion" onclick="closeWhatsAppFunnel()" aria-label="Fechar e abrir WhatsApp">Abrir WhatsApp</button>
            </div>
        `;
        
        // Adicionar estilos para conclusão
        const completionStyles = document.createElement('style');
        completionStyles.textContent = `
            .funnel-completion {
                text-align: center;
                padding: 2rem;
            }
            
            .completion-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
                animation: bounce 1s ease;
            }
            
            .funnel-completion h3 {
                color: #10b981;
                margin-bottom: 1rem;
                font-size: 1.5rem;
            }
            
            .completion-details {
                text-align: left;
                margin: 1.5rem 0;
                padding: 1rem;
                background: #f9fafb;
                border-radius: 8px;
            }
            
            .completion-details ul {
                list-style: none;
                padding: 0;
                margin: 0.5rem 0 0 0;
            }
            
            .completion-details li {
                padding: 0.25rem 0;
                color: #374151;
            }
            
            .btn-completion {
                background: #10b981;
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                margin-top: 1rem;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            
            .btn-completion:hover {
                background: #059669;
                transform: translateY(-2px);
            }
            
            .btn-completion:active {
                transform: translateY(0);
            }
        `;
        
        document.head.appendChild(completionStyles);
        
        // Aguardar 2 segundos e abrir WhatsApp
        setTimeout(() => {
            closeWhatsAppFunnel();
            openWhatsApp(message);
            
            // Limpar dados salvos
            localStorage.removeItem(CONFIG.localStorage.flowProgress);
            localStorage.removeItem(CONFIG.localStorage.userAnswers);
            localStorage.removeItem(CONFIG.localStorage.currentStep);
        }, 2000);
    }
}

function closeWhatsAppFunnel() {
    const modal = document.querySelector('.whatsapp-funnel-modal');
    if (modal) {
        // Remover event listeners antes de remover o modal
        const options = modal.querySelectorAll('.funnel-option');
        options.forEach(option => {
            option.removeEventListener('click', option._clickHandler);
        });
        
        // Remover estilos adicionados
        const addedStyles = document.querySelector('style[data-funnel-styles]');
        if (addedStyles) {
            addedStyles.remove();
        }
        
        modal.remove();
        
        // Limpar console
        console.log('🔒 Funil WhatsApp fechado - Recursos liberados');
    }
}

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// ===== CONTINUIDADE DO FLUXO =====
function initializeFlowContinuity() {
    // Verificar se há progresso salvo ao carregar a página
    const savedProgress = localStorage.getItem(CONFIG.localStorage.flowProgress);
    const savedAnswers = JSON.parse(localStorage.getItem(CONFIG.localStorage.userAnswers) || '{}');
    
    if (savedProgress && savedAnswers) {
        // Mostrar indicador visual de que há progresso salvo
        showFlowContinuityIndicator();
    }
}

function showFlowContinuityIndicator() {
    // Criar indicador sutil de continuidade
    const indicator = document.createElement('div');
    indicator.className = 'flow-continuity-indicator';
    indicator.innerHTML = `
        <div class="continuity-badge">
            <i class="fas fa-clock"></i>
            <span>Continuar onde parou</span>
        </div>
    `;
    
    // Adicionar estilos
    const styles = document.createElement('style');
    styles.textContent = `
        .flow-continuity-indicator {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 999;
            animation: slideInRight 0.5s ease;
        }
        
        .continuity-badge {
            background: #10b981;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .continuity-badge:hover {
            background: #059669;
            transform: translateY(-2px);
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .flow-continuity-indicator {
                top: 80px;
                right: 10px;
            }
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(indicator);
    
    // Remover após 5 segundos
    setTimeout(() => {
        if (indicator.parentNode) {
            indicator.remove();
        }
    }, 5000);
}

// ===== FAQ INTERATIVO =====
function initializeFAQ() {
    window.toggleFAQ = function(element) {
        const faqItem = element.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        
        // Fechar todos os outros
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abrir o atual se não estava ativo
        if (!isActive) {
            faqItem.classList.add('active');
        }
    };
    
    // Adicionar funcionalidade aos itens FAQ existentes
    document.querySelectorAll('.faq-item').forEach(faqItem => {
        faqItem.addEventListener('click', function(e) {
            // Evitar conflito com links dentro do FAQ
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            toggleFAQ(this);
        });
    });
    
    // Adicionar funcionalidade específica aos botões de pergunta
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleFAQ(this);
        });
    });
    
    console.log('✅ FAQ inicializado com sucesso');
    
    // Debug: verificar se os elementos FAQ existem
    const faqItems = document.querySelectorAll('.faq-item');
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log(`🔍 FAQ Debug: ${faqItems.length} itens FAQ encontrados`);
    console.log(`🔍 FAQ Debug: ${faqQuestions.length} perguntas FAQ encontradas`);
    
    // Testar se a função está funcionando
    if (faqItems.length > 0) {
        console.log('✅ Elementos FAQ encontrados - Função deve estar funcionando');
    } else {
        console.log('⚠️ Nenhum elemento FAQ encontrado - Verificar HTML');
    }
}

// ===== EFEITOS DE SCROLL =====
function initializeScrollEffects() {
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Função global para scroll
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
}

// ===== MENU MOBILE =====
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        console.log('📱 Menu mobile inicializado');
        
        // Função para abrir/fechar menu
        const toggleMenu = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            navMenu.classList.toggle('active');
            
            // Animar hambúrguer
            const spans = navToggle.querySelectorAll('span');
            navToggle.classList.toggle('active');
            
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                console.log('📱 Menu mobile aberto');
                
                // Focar no primeiro link do menu
                setTimeout(() => {
                    const firstLink = navMenu.querySelector('a');
                    if (firstLink) {
                        firstLink.focus();
                    }
                }, 100);
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                console.log('📱 Menu mobile fechado');
            }
        };
        
        // Event listeners
        navToggle.addEventListener('click', toggleMenu);
        navToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                toggleMenu(e);
            }
        });
        
        // Fechar menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Resetar animação do hambúrguer
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Resetar animação do hambúrguer
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
            // Fechar menu com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Melhorar acessibilidade do WhatsApp flutuante
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWhatsAppFlow('default');
            }
        });
    }
    } else {
        console.log('⚠️ Elementos do menu mobile não encontrados');
    }
}

// ===== ACESSIBILIDADE =====
function initializeAccessibility() {
    // Adicionar atributos ARIA
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            const text = button.textContent.trim();
            button.setAttribute('aria-label', text);
        }
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        // Tab para navegar
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remover classe ao usar mouse
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Foco visível
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
}

// ===== PERFORMANCE E OTIMIZAÇÃO =====
function initializePerformance() {
    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload crítico
    const criticalResources = [
        'styles.css',
        'script.js'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
}

// ===== UTILITÁRIOS ESTRATÉGICOS =====

// Debounce para performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== EVENT LISTENERS OTIMIZADOS =====

// Resize handler otimizado
window.addEventListener('resize', debounce(() => {
    console.log('📱 Tela redimensionada - Layout otimizado');
}, 250));

// Scroll handler otimizado
window.addEventListener('scroll', throttle(() => {
    // Efeitos de scroll se necessário
}, 16));

// ===== VERIFICAÇÃO FINAL =====
setTimeout(() => {
    console.log('🔍 Verificação final estratégica:');
    console.log('📱 Largura da tela:', window.innerWidth);
    console.log('🖥️ Altura da tela:', window.innerHeight);
    console.log('📄 Seções encontradas:', document.querySelectorAll('section').length);
    console.log('🃏 Cards encontrados:', document.querySelectorAll('.dor-card, .prova-card, .plano-card').length);
    console.log('🔘 Botões encontrados:', document.querySelectorAll('button').length);
    console.log('📱 Menu mobile:', document.getElementById('nav-toggle') ? '✅' : '❌');
    console.log('💬 WhatsApp funil:', typeof openWhatsAppFlow === 'function' ? '✅' : '❌');
    console.log('🎨 Animações:', typeof initializeAnimations === 'function' ? '✅' : '❌');
    console.log('♿ Acessibilidade:', typeof initializeAccessibility === 'function' ? '✅' : '❌');
    console.log('💾 LocalStorage:', typeof localStorage !== 'undefined' ? '✅' : '❌');
    console.log('🚀 Site CONEXAO BUZIOS pronto para converter!');
}, 1000);

// ===== FUNÇÕES DE FALLBACK =====
// Garantir compatibilidade com navegadores antigos
if (!window.openWhatsAppFlow) {
    window.openWhatsAppFlow = function(type) {
        const message = 'Olá! Gostaria de saber mais sobre os serviços da CONEXAO BUZIOS.';
        openWhatsApp(message);
    };
}

if (!window.scrollToSection) {
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
}

if (!window.toggleFAQ) {
    window.toggleFAQ = function(element) {
        const faqItem = element.closest('.faq-item');
        faqItem.classList.toggle('active');
    };
}

// === UI HUB (data-added-by="ui-hub-v1") ===
(function(){
  const HUB_ATTR = 'ui-hub-v1';
  const ADDED_SELECTOR = `[data-added-by="${HUB_ATTR}"]`;
  const state = {
    addedNodes: new Set(),
    listeners: [],
    observers: [],
    initialized: false
  };

  function addNode(node){ if(node && node.setAttribute){ node.setAttribute('data-added-by', HUB_ATTR); state.addedNodes.add(node);} }
  function on(target, event, handler, opts){ if(target && target.addEventListener){ target.addEventListener(event, handler, opts); state.listeners.push({target, event, handler, opts}); } }
  function observe(observer){ if(observer && typeof observer.disconnect === 'function'){ state.observers.push(observer);} }

  function dispatch(name, detail){ try { window.dispatchEvent(new CustomEvent(name, { detail })); } catch(_){} }

  function qs(sel, scope){ return (scope||document).querySelector(sel); }
  function qsa(sel, scope){ return Array.from((scope||document).querySelectorAll(sel)); }

  function createEl(tag, props = {}, children = []){
    const el = document.createElement(tag);
    Object.entries(props).forEach(([k,v])=>{
      // normalize aria* -> aria-*
      if(/^aria[A-Z]/.test(k)) {
        const attr = k.replace(/^aria/, 'aria-').replace(/[A-Z]/g, m => '-' + m.toLowerCase());
        el.setAttribute(attr, v);
        return;
      }
      if(k === 'class') el.className = v;
      else if(k === 'dataset') Object.entries(v).forEach(([dk,dv])=> el.dataset[dk]=dv);
      else if(k in el) el[k] = v; else el.setAttribute(k, v);
    });
    children.forEach(c => el.appendChild(c));
    addNode(el);
    return el;
  }

  function normalizeText(str){ return (str||'').replace(/\s+/g,' ').trim(); }

  // 1) Floating CTA
  function createFloatingCTA(){
    if(qs('#hub-floating-cta')) return;
    const heroCTA = qs('.hero .cta') || qs('.hero-cta') || qs('#hero .cta') || qs('header .cta');
    const originals = heroCTA ? qsa('a, button', heroCTA).slice(0,2) : [];

    const container = createEl('div', {
      id: 'hub-floating-cta',
      class: 'hub-floating-cta',
      role: 'region',
      ariaLabel: 'Barra de ações rápidas',
      tabIndex: 0
    });

    const createProxyBtn = (original, idx) => {
      const label = normalizeText(original ? original.textContent : (idx === 0 ? 'Quero avançar' : 'Ver mais'));
      const btn = createEl('button', {
        class: 'hub-cta-btn ' + (idx === 0 ? 'primary' : 'secondary'),
        type: 'button',
        ariaLabel: label
      });
      btn.textContent = label;
      on(btn, 'click', (e) => {
        dispatch('hub:cta-click', { source: 'floating', index: idx });
        if(original){
          try { original.dispatchEvent(new MouseEvent('click', { bubbles:true })); } catch(_){ try{ original.click(); }catch(__){} }
        }
      });
      return btn;
    };

    if(originals.length){
      originals.forEach((el, i) => container.appendChild(createProxyBtn(el, i)));
    } else {
      container.appendChild(createProxyBtn(null, 0));
      container.appendChild(createProxyBtn(null, 1));
    }

    document.body.appendChild(container);

    // hide when footer visible
    const footer = qs('footer, .footer');
    if('IntersectionObserver' in window && footer){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
          if(entry.isIntersecting){ container.classList.add('hub-hidden'); } else { container.classList.remove('hub-hidden'); }
        });
      }, { threshold: 0 });
      io.observe(footer); observe(io);
    }
  }

  // 2) Scrollspy + Segment control
  function detectSections(){
    const candidates = [
      { id:'hero', label:'Início' },
      { id:'dor', label:'Problema' },
      { id:'causa', label:'Causa' },
      { id:'solucao', label:'Solução' },
      { id:'prova', label:'Resultados' },
      { id:'planos', label:'Planos' },
      { id:'contato', label:'Contato' }
    ];
    const sections = [];
    candidates.forEach(c => {
      const el = qs(`#${c.id}`) || qs(`section.${c.id}`);
      if(el) sections.push({ id: c.id, label: c.label, el });
    });
    return sections;
  }

  function createScrollNav(sections){
    if(qs('.existing-scrollspy') || qs('#hub-scrollspy')) return;
    if(!sections.length) return;

    // Desktop sidebar
    const nav = createEl('nav', { id: 'hub-scrollspy', class: 'hub-scrollspy', role: 'navigation', ariaLabel: 'Navegação rápida' });
    sections.forEach(s => {
      const a = createEl('a', { href: `#${s.id}`, class: 'hub-link', role: 'link' });
      a.textContent = s.label;
      on(a, 'click', (e)=>{
        e.preventDefault();
        const target = s.el;
        if(target){ target.scrollIntoView({ behavior:'smooth', block:'start' }); }
        dispatch('hub:navigate', { section: s.id });
      });
      nav.appendChild(a);
    });
    document.body.appendChild(nav);

    // Mobile segment control
    if(!qs('#hub-segment-control')){
      const seg = createEl('div', { id:'hub-segment-control', class:'hub-segment-control', role:'tablist', ariaLabel:'Seções' });
      sections.forEach((s,idx)=>{
        const b = createEl('button', { class:'hub-segment-btn' + (idx===0?' hub-active':''), type:'button', role:'tab', ariaControls:s.id, ariaSelected: idx===0?'true':'false' });
        b.textContent = s.label;
        on(b, 'click', ()=>{
          const target = s.el; if(target){ target.scrollIntoView({ behavior:'smooth', block:'start' }); }
          dispatch('hub:navigate', { section: s.id });
        });
        seg.appendChild(b);
      });
      const main = qs('main') || document.body;
      main.insertBefore(seg, main.firstChild);
    }

    // IntersectionObserver to highlight
    if('IntersectionObserver' in window){
      const links = qsa('#hub-scrollspy a');
      const segBtns = qsa('#hub-segment-control .hub-segment-btn');
      const map = new Map(sections.map((s, i)=>[s.el, { id:s.id, idx:i }]));
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          const d = map.get(entry.target);
          if(!d) return;
          if(entry.intersectionRatio >= 0.35){
            links.forEach(l => l.classList.toggle('hub-active', l.getAttribute('href') === `#${d.id}`));
            segBtns.forEach((b, i)=>{
              const active = i === d.idx; b.classList.toggle('hub-active', active); b.setAttribute('aria-selected', active ? 'true' : 'false');
            });
          }
        });
      }, { threshold: [0, 0.35, 1] });
      sections.forEach(s => io.observe(s.el));
      observe(io);
    }
  }

  // 3) Progressive disclosure (mobile accordions)
  function setupAccordions(){
    const isMobile = window.innerWidth <= 760;
    const secs = qsa('main section');
    secs.forEach(sec => {
      if(qs('.hub-collapse-content', sec)) return; // already processed
      const header = qs('.section-header', sec);
      // collect direct content blocks ignoring header
      const directBlocks = Array.from(sec.children).filter(ch => ch.nodeType === 1 && !ch.classList.contains('section-header'));
      if(directBlocks.length <= 3) return;

      const wrapper = createEl('div', { class:'hub-collapse-content', id: `hub-col-${sec.id||Math.random().toString(36).slice(2)}` });
      directBlocks.forEach(ch => wrapper.appendChild(ch));
      sec.appendChild(wrapper);

      let toggleLabel = 'Mostrar conteúdo';
      if(header){
        const hClone = header.cloneNode(true);
        toggleLabel = normalizeText(hClone.textContent) || toggleLabel;
      }
      const toggle = createEl('button', { class:'hub-accordion-toggle', role:'button', ariaExpanded: isMobile ? 'false' : 'true', ariaControls: wrapper.id, type:'button' });
      toggle.innerHTML = `<span>${toggleLabel}</span><i class="fas fa-chevron-down hub-chevron" aria-hidden="true"></i>`;
      sec.insertBefore(toggle, wrapper);

      function applyState(){
        if(window.innerWidth <= 760){
          const expanded = toggle.getAttribute('aria-expanded') === 'true';
          if(expanded){ wrapper.style.maxHeight = wrapper.scrollHeight + 'px'; }
          else { wrapper.style.maxHeight = '0px'; }
        } else {
          toggle.setAttribute('aria-expanded', 'true');
          wrapper.style.maxHeight = 'none';
        }
      }

      on(toggle, 'click', ()=>{
        const cur = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', (!cur).toString());
        applyState();
      });

      on(window, 'resize', ()=>{ applyState(); });
      // initial
      applyState();
    });
  }

  // 4) Toggle Cards/Comparar na seção Planos
  function setupPlanCompare(){
    const planos = qs('#planos') || qs('.planos') || qs('.pricing');
    if(!planos) return;
    const grid = qs('.planos-grid, .pricing-grid', planos) || qs('.planos-grid') || qs('.pricing-grid');
    if(!grid) return;

    if(qs('#hub-plan-compare')) return;

    const ctrl = createEl('div', { id:'hub-plan-compare' });
    const btnCards = createEl('button', { class:'hub-toggle-btn hub-active', type:'button' }); btnCards.textContent = 'Ver em cards';
    const btnCompare = createEl('button', { class:'hub-toggle-btn', type:'button' }); btnCompare.textContent = 'Comparar planos';
    ctrl.appendChild(btnCards); ctrl.appendChild(btnCompare);

    grid.parentNode.insertBefore(ctrl, grid);

    let tableWrapper = null;

    function extractPlans(){
      const cards = qsa('.plano-card, .plan-card', grid);
      return cards.map(card => {
        const titleEl = qs('h2, h3', card);
        const priceEl = qs('.preco-valor, .preco, .price, .valor', card);
        const list = qs('.plano-beneficios, .beneficios, .features', card);
        const benefits = list ? qsa('li', list).map(li => normalizeText(li.textContent)) : [];
        const title = normalizeText(titleEl ? titleEl.textContent : 'Plano');
        const price = normalizeText(priceEl ? priceEl.textContent : '');
        return { card, title, price, benefits };
      });
    }

    function buildTable(){
      const plans = extractPlans();
      const benefitSet = new Set();
      plans.forEach(p => p.benefits.forEach(b => { if(b) benefitSet.add(b); }));
      const benefits = Array.from(benefitSet);

      const wrapper = createEl('div', { class:'hub-compare-table-wrapper' });
      const table = createEl('table', { class:'hub-compare-table', role:'table' });
      const thead = createEl('thead');
      const thr = createEl('tr');
      thr.appendChild(createEl('th', {}, [document.createTextNode('Benefício')]));
      plans.forEach(p => {
        const th = createEl('th');
        th.innerHTML = `${p.title}${p.price ? `<br><small>${p.price}</small>`:''}`;
        thr.appendChild(th);
      });
      thead.appendChild(thr);

      const tbody = createEl('tbody');
      benefits.forEach(b => {
        const tr = createEl('tr');
        tr.appendChild(createEl('th', {}, [document.createTextNode(b)]));
        plans.forEach(p => {
          const td = createEl('td');
          if(p.benefits.some(x => x === b)){
            td.innerHTML = '<span class="hub-check">✓</span>';
          } else {
            td.textContent = '';
          }
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      table.appendChild(thead); table.appendChild(tbody);
      wrapper.appendChild(table);
      return wrapper;
    }

    function showCards(){
      btnCards.classList.add('hub-active');
      btnCompare.classList.remove('hub-active');
      grid.style.display = '';
      if(tableWrapper){ tableWrapper.remove(); tableWrapper = null; }
    }

    function showCompare(){
      btnCards.classList.remove('hub-active');
      btnCompare.classList.add('hub-active');
      grid.style.display = 'none';
      if(!tableWrapper){ tableWrapper = buildTable(); grid.parentNode.insertBefore(tableWrapper, grid.nextSibling); }
      dispatch('hub:compare-open', {});
    }

    on(btnCards, 'click', showCards);
    on(btnCompare, 'click', showCompare);
  }

  // 5) Micro-FAQ inline e micro-ações
  function setupTooltipsAndCTAs(){
    // Info icons near benefits and prices
    const targets = [];
    qsa('.plano-beneficios li, .beneficios li, .features li').forEach(li => targets.push(li));
    qsa('.preco-valor, .preco, .price, .valor').forEach(p => targets.push(p));
    qsa('.hero-cta button, .cta-buttons button').forEach(b => targets.push(b));

    function findExplainer(el){
      // prefer nearby small or .explain
      const nearSmall = el.closest('li') ? qs('small, .explain', el.closest('li')) : null;
      if(nearSmall) return normalizeText(nearSmall.textContent);
      const sibling = el.nextElementSibling && (el.nextElementSibling.matches('small, .explain') ? el.nextElementSibling : null);
      if(sibling) return normalizeText(sibling.textContent);
      return 'Mais detalhes sobre este item';
    }

    function createTooltip(text, anchor){
      const tip = createEl('div', { class:'hub-tooltip', role:'dialog', tabIndex: -1 });
      tip.textContent = text;
      document.body.appendChild(tip);
      // position near anchor
      const rect = anchor.getBoundingClientRect();
      const top = window.scrollY + rect.top - 8 - 12; // arrow height offset
      const left = window.scrollX + rect.left;
      tip.style.top = `${top}px`;
      tip.style.left = `${left}px`;

      const remove = ()=>{ try{ tip.remove(); }catch(_){} on(document, 'keydown', noop); on(document, 'click', noop); };
      const esc = (e)=>{ if(e.key === 'Escape'){ e.stopPropagation(); cleanup(); } };
      const outside = (e)=>{ if(!tip.contains(e.target)){ cleanup(); } };
      function cleanup(){ document.removeEventListener('keydown', esc, true); document.removeEventListener('click', outside, true); try{ tip.remove(); }catch(_){} }
      document.addEventListener('keydown', esc, true);
      document.addEventListener('click', outside, true);
      return tip;
    }

    function noop(){}

    targets.forEach(t => {
      if(qs('.hub-info-btn', t.parentElement)) return;
      const info = createEl('button', { class:'hub-info-btn', type:'button', ariaLabel:'Mais informações' });
      info.textContent = 'i';
      on(info, 'click', (e)=>{
        e.stopPropagation();
        const tip = createTooltip(findExplainer(t), info);
        tip.focus();
      });
      if(t.nextSibling){ t.parentElement.insertBefore(info, t.nextSibling); } else { t.parentElement.appendChild(info); }
    });

    // Micro-CTA inline nos benefícios e final dos planos
    qsa('.plano-card').forEach(card => {
      const titleEl = qs('h2, h3', card);
      const title = normalizeText(titleEl ? titleEl.textContent : 'plano');
      const ctx = title.toLowerCase().replace(/[^a-z0-9]+/g,'_') || 'plano';
      // after list
      const list = qs('.plano-beneficios, .beneficios, .features', card);
      if(list && !qs('.hub-cta-inline', list.parentElement)){
        const cta = createEl('button', { class:'hub-cta-inline', type:'button', ariaLabel:`Falar no WhatsApp sobre ${title}` });
        cta.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i> Falar no WhatsApp';
        on(cta, 'click', ()=>{
          if(typeof window.openWhatsAppFlow === 'function') { window.openWhatsAppFlow(ctx); }
          else { dispatch('hub:request-whatsapp', { context: ctx }); }
        });
        list.parentElement.appendChild(cta);
      }
    });
  }

  function initUIHub(){
    if(state.initialized) return; state.initialized = true;
    // defensive checks
    if(!document || !document.body) return;

    try {
      createFloatingCTA();
      const sections = detectSections();
      createScrollNav(sections);
      setupAccordions();
      setupPlanCompare();
      setupTooltipsAndCTAs();
    } catch(err){
      console.error('UI Hub init error', err);
    }
  }

  window.initUIHub = initUIHub;
  window.removeUIHub = function(){
    // remove added nodes
    Array.from(state.addedNodes).forEach(n => { try{ n.remove(); }catch(_){} });
    state.addedNodes.clear();
    // remove listeners
    state.listeners.forEach(({target,event,handler,opts})=>{ try{ target.removeEventListener(event, handler, opts); }catch(_){} });
    state.listeners = [];
    // disconnect observers
    state.observers.forEach(o => { try{ o.disconnect(); }catch(_){} });
    state.observers = [];
    state.initialized = false;
  };

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initUIHub, { once: true });
  } else {
    initUIHub();
  }
})();

// === App-like Navigation (mobile drawer + desktop sidebar) ===
(function(){
  function ensureAnchors(){
    const map = [
      ['start', '#hero'],
      ['problem', '#dor'],
      ['cause', '#causa'],
      ['solution', '#solucao'],
      ['results', '#prova'],
      ['plans', '#planos']
    ];
    map.forEach(([id, sel]) => {
      if(document.getElementById(id)) return;
      const el = document.querySelector(sel);
      if(!el) return;
      const a = document.createElement('span');
      a.id = id; a.setAttribute('aria-hidden','true'); a.style.position='relative'; a.style.top='-1px';
      el.prepend(a);
    });
  }

  function setActive(hash){
    const links = document.querySelectorAll('#nav-drawer a, #nav-sidebar a');
    links.forEach(a => {
      if(a.getAttribute('href') === hash) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
  }

  function scrollToHash(hash){
    const el = document.querySelector(hash);
    if(!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  function openDrawer(){
    const drawer = document.getElementById('nav-drawer');
    const overlay = document.getElementById('nav-overlay');
    const fab = document.getElementById('nav-fab');
    if(!drawer || !overlay || !fab) return;
    document.body.classList.add('drawer-open');
    drawer.setAttribute('aria-hidden','false');
    overlay.setAttribute('aria-hidden','false');
    fab.setAttribute('aria-expanded','true');
    setTimeout(() => {
      const first = drawer.querySelector('a');
      if(first) first.focus();
    }, 80);
  }

  function closeDrawer(){
    const drawer = document.getElementById('nav-drawer');
    const overlay = document.getElementById('nav-overlay');
    const fab = document.getElementById('nav-fab');
    if(!drawer || !overlay || !fab) return;
    drawer.setAttribute('aria-hidden','true');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('drawer-open');
    fab.setAttribute('aria-expanded','false');
    setTimeout(() => fab.focus(), 180);
  }

  function toggleDrawer(){
    const drawer = document.getElementById('nav-drawer');
    if(!drawer) return;
    const isOpen = drawer.getAttribute('aria-hidden') === 'false';
    isOpen ? closeDrawer() : openDrawer();
  }

  function bindNav(){
    const overlay = document.getElementById('nav-overlay');
    const drawer = document.getElementById('nav-drawer');
    const fab = document.getElementById('nav-fab');
    if(fab) {
      fab.addEventListener('click', toggleDrawer);
      // keyboard activation of FAB
      fab.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDrawer(); }
      });
    }
    if(overlay) overlay.addEventListener('click', closeDrawer);

    if(drawer){
      // focus trap when open
      drawer.addEventListener('keydown', (e)=>{
        if(e.key !== 'Tab') return;
        const focusables = drawer.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
        if(!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length-1];
        if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
      });
      drawer.addEventListener('click', (e)=>{
        const a = e.target.closest('a[href^="#"]');
        if(!a) return;
        e.preventDefault();
        const hash = a.getAttribute('href');
        if(window.location.hash !== hash) history.pushState(null,'',hash);
        setActive(hash);
        scrollToHash(hash);
        closeDrawer();
      });
    }

    const sidebar = document.getElementById('nav-sidebar');
    if(sidebar){
      sidebar.addEventListener('click', (e)=>{
        const a = e.target.closest('a[href^="#"]');
        if(!a) return;
        e.preventDefault();
        const hash = a.getAttribute('href');
        if(window.location.hash !== hash) history.pushState(null,'',hash);
        setActive(hash);
        scrollToHash(hash);
      });
    }

    document.addEventListener('keydown', (e)=>{
      const drawer = document.getElementById('nav-drawer');
      if(!drawer) return;
      const open = drawer.getAttribute('aria-hidden') === 'false';
      if(e.key === 'Escape' && open){
        e.preventDefault();
        closeDrawer();
      }
    });

    window.addEventListener('popstate', ()=>{
      const hash = window.location.hash || '#start';
      setActive(hash);
      scrollToHash(hash);
    });
  }

  function initAppLikeNav(){
    ensureAnchors();
    bindNav();
    // initial state
    const initial = window.location.hash || '#start';
    setActive(initial);
    // desktop scrollspy using original sections
    if('IntersectionObserver' in window){
      const map = [
        ['#hero', '#start'],
        ['#dor', '#problem'],
        ['#causa', '#cause'],
        ['#solucao', '#solution'],
        ['#prova', '#results'],
        ['#planos', '#plans']
      ];
      const pairs = map
        .map(([src, hash]) => ({ el: document.querySelector(src), hash }))
        .filter(x => !!x.el);
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
          if(entry.isIntersecting && entry.intersectionRatio >= 0.4){
            const found = pairs.find(p => p.el === entry.target);
            if(found){
              setActive(found.hash);
              history.replaceState(null,'',found.hash);
            }
          }
        });
      }, { threshold: [0.4] });
      pairs.forEach(p => io.observe(p.el));
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initAppLikeNav, { once: true });
  } else {
    initAppLikeNav();
  }
})();