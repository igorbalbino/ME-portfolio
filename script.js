$(document).ready(function() {
    // Language translations
    const translations = {
        pt: {
            "hero.title": "Transformando ideias em soluções digitais",
            "hero.subtitle": "Combinando ciência de dados, desenvolvimento de software e expertise multidisciplinar para criar soluções inovadoras.",
            "hero.cta": "Vamos conversar",
            "about.title": "Sobre Mim",
            "about.p1": "Olá, eu sou Igor Balbino, um profissional multidisciplinar com formação em Análise e Desenvolvimento de Sistemas e pós-graduação em Ciência de Dados.",
            "about.p2": "Com 5 anos de experiência em programação e 2 anos em análise de redes, trago uma abordagem única que combina conhecimento técnico aprofundado com habilidades de comunicação em múltiplos idiomas.",
            "about.p3": "Minha paixão por tecnologia vai além do desenvolvimento tradicional - sou entusiasta de ferramentas de IA, edição de imagens e sempre busco aprender novas metodologias para oferecer soluções inovadoras.",
            "about.p4": "Além do mundo digital, tenho conhecimentos sólidos em nutrição e fitness, demonstrando minha capacidade de dominar diversos campos do conhecimento.",
            "skills.title": "Habilidades & Experiência",
            "skills.education": "Formação Acadêmica",
            "skills.education1": "Pós-graduação em Ciência de Dados - Descomplica",
            "skills.education2": "Tecnólogo em Análise e Desenvolvimento de Sistemas - UNOPAR",
            "skills.languages": "Idiomas",
            "skills.lang1": "Português: Nativo",
            "skills.lang2": "Inglês: Fluente (C1)",
            "skills.lang3": "Italiano, Japonês, Espanhol: Intermediário",
            "skills.lang4": "Francês: Básico",
            "skills.tech": "Tecnologias & Ferramentas",
            "skills.tech1": "Programação: 5 anos de experiência",
            "skills.tech2": "Análise de Redes: 2 anos de experiência",
            "skills.tech3": "Ferramentas de IA: LeonardoAI, SeaArt, Runway, InvideoAI",
            "skills.tech4": "Desenvolvimento: Web, Mobile, Desktop, Embarcados",
            "skills.other": "Outros Conhecimentos",
            "skills.other1": "Data Science & Business Intelligence",
            "skills.other2": "Edição de Imagens",
            "skills.other3": "Nutrição e Musculação",
            "projects.title": "Projetos & Empreendimentos",
            "projects.creatio1": "Empresa guarda-chuva que engloba diversos projetos e serviços nas áreas de tecnologia e educação.",
            "projects.creatio2": "Serviços oferecidos:",
            "projects.creatio3": "Desenvolvimento de software",
            "projects.creatio4": "Análise de dados e BI",
            "projects.creatio5": "Chatbots e consultoria em TI",
            "projects.fluently1": "Plataforma de ensino de idiomas que aproveita minha experiência multilíngue e habilidades pedagógicas.",
            "projects.fluently2": "Oferece métodos inovadores para aprendizado eficiente de línguas estrangeiras.",
            "projects.nutriunt1": "Projeto que combina meus conhecimentos em nutrição e fitness com tecnologia.",
            "projects.nutriunt2": "Oferece soluções personalizadas para saúde e bem-estar, com base em dados e evidências científicas.",
			"projects.rainbow1": "Harmonia de Cores Fácil: Crie paletas perfeitas com nossa ferramenta intuitiva. Explore combinações e ajuste o brilho para designs impactantes.",
            "projects.rainbow2": "Sua Paleta de Cores Ideal: Descubra e personalize combinações vibrantes em segundos. Eleve seu projeto com a ferramenta de harmonia de cores.",
			"projects.pdf1": "PDF para Texto Instantâneo: Converta e extraia conteúdo de documentos com facilidade. Simplifique a edição e reuso de informações em segundos.",
            "projects.pdf2": "Extração de Texto de PDFs Simplificada: Agilize seu trabalho transformando PDFs em texto editável. Sua solução eficiente para gestão documental.",
			"projects.loca1": "Rastreie ativos e pessoas com precisão via app. Monitore posições instantaneamente para segurança e controle otimizado.",
            "projects.loca2": "Envie dados de localização direto para seu celular. Mantenha-se conectado e informado com nosso localizador inteligente.",
            "contact.title": "Vamos Trabalhar Juntos",
            "contact.name": "Nome",
            "contact.email": "Email",
            "contact.message": "Mensagem",
            "contact.submit": "Enviar Mensagem",
            "footer.copyright": "© 2023 Igor Balbino. Todos os direitos reservados.",
            "modal.success": "Sucesso!",
            "modal.message": "Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.",
            "modal.close": "Fechar"
        },
        en: {
            "hero.title": "Transforming ideas into digital solutions",
            "hero.subtitle": "Combining data science, software development and multidisciplinary expertise to create innovative solutions.",
            "hero.cta": "Let's talk",
            "about.title": "About Me",
            "about.p1": "Hello, I'm Igor Balbino, a multidisciplinary professional with a degree in Systems Analysis and Development and a postgraduate degree in Data Science.",
            "about.p2": "With 5 years of programming experience and 2 years in network analysis, I bring a unique approach that combines deep technical knowledge with multilingual communication skills.",
            "about.p3": "My passion for technology goes beyond traditional development - I'm an enthusiast of AI tools, image editing and always seek to learn new methodologies to offer innovative solutions.",
            "about.p4": "Beyond the digital world, I have solid knowledge in nutrition and fitness, demonstrating my ability to master diverse fields of knowledge.",
            "skills.title": "Skills & Experience",
            "skills.education": "Academic Background",
            "skills.education1": "Postgraduate in Data Science - Descomplica",
            "skills.education2": "Technologist in Systems Analysis and Development - UNOPAR",
            "skills.languages": "Languages",
            "skills.lang1": "Portuguese: Native",
            "skills.lang2": "English: Fluent (C1)",
            "skills.lang3": "Italian, Japanese, Spanish: Intermediate",
            "skills.lang4": "French: Basic",
            "skills.tech": "Technologies & Tools",
            "skills.tech1": "Programming: 5 years of experience",
            "skills.tech2": "Network Analysis: 2 years of experience",
            "skills.tech3": "AI Tools: LeonardoAI, SeaArt, Runway, InvideoAI",
            "skills.tech4": "Development: Web, Mobile, Desktop, Embedded",
            "skills.other": "Other Knowledge",
            "skills.other1": "Data Science & Business Intelligence",
            "skills.other2": "Image Editing",
            "skills.other3": "Nutrition and Bodybuilding",
            "projects.title": "Projects & Ventures",
            "projects.creatio1": "Umbrella company that encompasses various projects and services in technology and education.",
            "projects.creatio2": "Services offered:",
            "projects.creatio3": "Software development",
            "projects.creatio4": "Data analysis and BI",
            "projects.creatio5": "Chatbots and IT consulting",
            "projects.fluently1": "Language learning platform that leverages my multilingual experience and teaching skills.",
            "projects.fluently2": "Offers innovative methods for efficient foreign language learning.",
            "projects.nutriunt1": "Project that combines my knowledge in nutrition and fitness with technology.",
            "projects.nutriunt2": "Provides personalized health and wellness solutions based on data and scientific evidence.",
			"projects.rainbow1": "Easy Color Harmony: Create perfect palettes with our intuitive tool. Explore combinations and adjust brightness for impactful designs.",
            "projects.rainbow2": "Your Ideal Color Palette: Discover and customize vibrant combinations in seconds. Elevate your design with the color harmony tool.",
			"projects.pdf1": "Instant PDF to Text: Convert and extract content from documents with ease. Simplify editing and reusing information in seconds.",
            "projects.pdf2": "Simplified PDF Text Extraction: Speed ​​up your work by transforming PDFs into editable text. Your efficient solution for document management.",
			"projects.loca1": "Track assets and people accurately via app. Monitor positions instantly for safety and optimized control.",
            "projects.loca2": "Send location data directly to your phone. Stay connected and informed with our smart locator.",
            "contact.title": "Let's Work Together",
            "contact.name": "Name",
            "contact.email": "Email",
            "contact.message": "Message",
            "contact.submit": "Send Message",
            "footer.copyright": "© 2023 Igor Balbino. All rights reserved.",
            "modal.success": "Success!",
            "modal.message": "Your message has been sent successfully. I'll contact you soon.",
            "modal.close": "Close"
        },
        es: {
			"hero.title": "Transformando ideas en soluciones digitales",
			"hero.subtitle": "Combinando ciencia de datos, desarrollo de software y experiencia multidisciplinaria para crear soluciones innovadoras.",
			"hero.cta": "Hablemos",
			"about.title": "Sobre Mí",
			"about.p1": "Hola, soy Igor Balbino, un profesional multidisciplinario con formación en Análisis y Desarrollo de Sistemas y posgrado en Ciencia de Datos.",
			"about.p2": "Con 5 años de experiencia en programación y 2 años en análisis de redes, ofrezco un enfoque único que combina conocimiento técnico profundo con habilidades de comunicación en varios idiomas.",
			"about.p3": "Mi pasión por la tecnología va más allá del desarrollo tradicional: soy entusiasta de las herramientas de IA, edición de imágenes y siempre busco aprender nuevas metodologías para ofrecer soluciones innovadoras.",
			"about.p4": "Más allá del mundo digital, tengo conocimientos sólidos en nutrición y fitness, demostrando mi capacidad para dominar diversos campos del conocimiento.",
			"skills.title": "Habilidades y Experiencia",
			"skills.education": "Formación Académica",
			"skills.education1": "Posgrado en Ciencia de Datos - Descomplica",
			"skills.education2": "Tecnólogo en Análisis y Desarrollo de Sistemas - UNOPAR",
			"skills.languages": "Idiomas",
			"skills.lang1": "Portugués: Nativo",
			"skills.lang2": "Inglés: Fluido (C1)",
			"skills.lang3": "Italiano, Japonés, Español: Intermedio",
			"skills.lang4": "Francés: Básico",
			"skills.tech": "Tecnologías y Herramientas",
			"skills.tech1": "Programación: 5 años de experiencia",
			"skills.tech2": "Análisis de Redes: 2 años de experiencia",
			"skills.tech3": "Herramientas de IA: LeonardoAI, SeaArt, Runway, InvideoAI",
			"skills.tech4": "Desarrollo: Web, Mobile, Desktop, Embebidos",
			"skills.other": "Otros Conocimientos",
			"skills.other1": "Ciencia de Datos & Business Intelligence",
			"skills.other2": "Edición de Imágenes",
			"skills.other3": "Nutrición y Musculación",
			"projects.title": "Proyectos & Emprendimientos",
			"projects.creatio1": "Empresa paraguas que engloba diversos proyectos y servicios en tecnología y educación.",
			"projects.creatio2": "Servicios ofrecidos:",
			"projects.creatio3": "Desarrollo de software",
			"projects.creatio4": "Análisis de datos y BI",
			"projects.creatio5": "Chatbots y consultoría TI",
			"projects.fluently1": "Plataforma de enseñanza de idiomas que aprovecha mi experiencia multilingüe y habilidades pedagógicas.",
			"projects.fluently2": "Ofrece métodos innovadores para aprendizaje eficiente de lenguas extranjeras.",
			"projects.nutriunt1": "Proyecto que combina mis conocimientos en nutrición y fitness con tecnología.",
			"projects.nutriunt2": "Ofrece soluciones personalizadas para salud y bienestar, basadas en datos y evidencia científica.",
			"projects.rainbow1": "Armonía de colores sencilla: Crea paletas perfectas con nuestra herramienta intuitiva. Explora combinaciones y ajusta el brillo para lograr diseños impactantes.",
            "projects.rainbow2": "Tu paleta de colores ideal: Descubre y personaliza combinaciones vibrantes en segundos. Realza tu diseño con la herramienta de armonía de colores.",
			"projects.pdf1": "PDF a texto al instante: Convierte y extrae contenido de documentos fácilmente. Simplifica la edición y reutilización de información en segundos.",
            "projects.pdf2": "Extracción de texto PDF simplificada: Agilice su trabajo transformando archivos PDF en texto editable. Su solución eficiente para la gestión de documentos.",
			"projects.loca1": "Rastrea activos y personas con precisión mediante la app. Supervisa las posiciones al instante para mayor seguridad y control optimizado.",
            "projects.loca2": "Envía datos de ubicación directamente a tu teléfono. Mantente conectado e informado con nuestro localizador inteligente.",
			"contact.title": "Trabajemos Juntos",
			"contact.name": "Nombre",
			"contact.email": "Email",
			"contact.message": "Mensaje",
			"contact.submit": "Enviar Mensaje",
			"footer.copyright": "© 2023 Igor Balbino. Todos los derechos reservados.",
			"modal.success": "¡Éxito!",
			"modal.message": "Tu mensaje ha sido enviado con éxito. Me pondré en contacto pronto.",
			"modal.close": "Cerrar"
		},
		it: {
			"hero.title": "Trasformare idee in soluzioni digitali",
			"hero.subtitle": "Combinando data science, sviluppo software e competenze multidisciplinari per creare soluzioni innovative.",
			"hero.cta": "Parliamo",
			"about.title": "Su di Me",
			"about.p1": "Ciao, sono Igor Balbino, un professionista multidisciplinare con laurea in Analisi e Sviluppo di Sistemi e specializzazione in Data Science.",
			"about.p2": "Con 5 anni di esperienza in programmazione e 2 anni in analisi di rete, offro un approccio unico che combina conoscenze tecniche avanzate con capacità di comunicazione in più lingue.",
			"about.p3": "La mia passione per la tecnologia va oltre lo sviluppo tradizionale: sono appassionato di strumenti di IA, editing di immagini e cerco sempre di apprendere nuove metodologie per offrire soluzioni innovative.",
			"about.p4": "Oltre al mondo digitale, ho solide conoscenze in nutrizione e fitness, dimostrando la mia capacità di padroneggiare diversi campi del sapere.",
			"skills.title": "Competenze & Esperienza",
			"skills.education": "Formazione",
			"skills.education1": "Specializzazione in Data Science - Descomplica",
			"skills.education2": "Tecnologo in Analisi e Sviluppo di Sistemi - UNOPAR",
			"skills.languages": "Lingue",
			"skills.lang1": "Portoghese: Madrelingua",
			"skills.lang2": "Inglese: Fluente (C1)",
			"skills.lang3": "Italiano, Giapponese, Spagnolo: Intermedio",
			"skills.lang4": "Francese: Base",
			"skills.tech": "Tecnologie & Strumenti",
			"skills.tech1": "Programmazione: 5 anni di esperienza",
			"skills.tech2": "Analisi di Rete: 2 anni di esperienza",
			"skills.tech3": "Strumenti IA: LeonardoAI, SeaArt, Runway, InvideoAI",
			"skills.tech4": "Sviluppo: Web, Mobile, Desktop, Embedded",
			"skills.other": "Altre Conoscenze",
			"skills.other1": "Data Science & Business Intelligence",
			"skills.other2": "Editing di Immagini",
			"skills.other3": "Nutrizione e Bodybuilding",
			"projects.title": "Progetti & Iniziative",
			"projects.creatio1": "Azienda ombrello che comprende vari progetti e servizi in tecnologia e educazione.",
			"projects.creatio2": "Servizi offerti:",
			"projects.creatio3": "Sviluppo software",
			"projects.creatio4": "Analisi dati e BI",
			"projects.creatio5": "Chatbots e consulenza IT",
			"projects.fluently1": "Piattaforma di insegnamento linguistico che sfrutta la mia esperienza multilingue e abilità pedagogiche.",
			"projects.fluently2": "Offre metodi innovativi per l'apprendimento efficiente di lingue straniere.",
			"projects.nutriunt1": "Progetto che combina le mie conoscenze in nutrizione e fitness con la tecnologia.",
			"projects.nutriunt2": "Offre soluzioni personalizzate per salute e benessere, basate su dati ed evidenze scientifiche.",
			"projects.rainbow1": "Armonia di colori facile: crea palette perfette con il nostro strumento intuitivo. Esplora le combinazioni e regola la luminosità per design d'impatto.",
            "projects.rainbow2": "La tua palette di colori ideale: scopri e personalizza combinazioni vivaci in pochi secondi. Valorizza il tuo design con lo strumento Armonia colori.",
			"projects.pdf1": "Converti PDF in testo istantaneo: converti ed estrai contenuti dai documenti con facilità. Semplifica la modifica e il riutilizzo delle informazioni in pochi secondi.",
            "projects.pdf2": "Estrazione semplificata del testo dai PDF: velocizza il tuo lavoro trasformando i PDF in testo modificabile. La tua soluzione efficiente per la gestione dei documenti.",
			"projects.loca1": "Traccia con precisione beni e persone tramite l'app. Monitora le posizioni all'istante per una maggiore sicurezza e un controllo ottimale.",
            "projects.loca2": "Invia i dati sulla posizione direttamente al tuo telefono. Rimani connesso e informato con il nostro localizzatore intelligente.",
			"contact.title": "Lavoriamo Insieme",
			"contact.name": "Nome",
			"contact.email": "Email",
			"contact.message": "Messaggio",
			"contact.submit": "Invia Messaggio",
			"footer.copyright": "© 2023 Igor Balbino. Tutti i diritti riservati.",
			"modal.success": "Successo!",
			"modal.message": "Il tuo messaggio è stato inviato con successo. Ti contatterò presto.",
			"modal.close": "Chiudi"
		},
		ja: {
			"hero.title": "アイデアをデジタルソリューションに変える",
			"hero.subtitle": "データサイエンス、ソフトウェア開発、多分野の専門知識を組み合わせて革新的なソリューションを作成します。",
			"hero.cta": "話しましょう",
			"about.title": "私について",
			"about.p1": "こんにちは、私はイゴール・バルビーノです。システム分析開発の学位とデータサイエンスの大学院課程を修了した多分野の専門家です。",
			"about.p2": "5年のプログラミング経験と2年のネットワーク分析経験を持ち、深い技術知識と多言語コミュニケーション能力を組み合わせた独自のアプローチを提供します。",
			"about.p3": "私のテクノロジーへの情熱は伝統的な開発を超えています。AIツールや画像編集に熱心で、革新的なソリューションを提供するために常に新しい方法論を学んでいます。",
			"about.p4": "デジタル世界以外にも、栄養とフィットネスに関する確固たる知識を持ち、さまざまな知識分野を習得できる能力を示しています。",
			"skills.title": "スキルと経験",
			"skills.education": "学歴",
			"skills.education1": "データサイエンス大学院 - Descomplica",
			"skills.education2": "システム分析開発技術者 - UNOPAR",
			"skills.languages": "言語",
			"skills.lang1": "ポルトガル語: 母国語",
			"skills.lang2": "英語: 流暢 (C1)",
			"skills.lang3": "イタリア語、日本語、スペイン語: 中級",
			"skills.lang4": "フランス語: 初級",
			"skills.tech": "技術とツール",
			"skills.tech1": "プログラミング: 5年の経験",
			"skills.tech2": "ネットワーク分析: 2年の経験",
			"skills.tech3": "AIツール: LeonardoAI, SeaArt, Runway, InvideoAI",
			"skills.tech4": "開発: Web、モバイル、デスクトップ、組み込み",
			"skills.other": "その他の知識",
			"skills.other1": "データサイエンスとビジネスインテリジェンス",
			"skills.other2": "画像編集",
			"skills.other3": "栄養とボディビル",
			"projects.title": "プロジェクトと事業",
			"projects.creatio1": "テクノロジーと教育における様々なプロジェクトやサービスを包括する傘型会社。",
			"projects.creatio2": "提供サービス:",
			"projects.creatio3": "ソフトウェア開発",
			"projects.creatio4": "データ分析とBI",
			"projects.creatio5": "チャットボットとITコンサルティング",
			"projects.fluently1": "私の多言語経験と教育スキルを活用した言語学習プラットフォーム。",
			"projects.fluently2": "効率的な外国語学習のための革新的な方法を提供します。",
			"projects.nutriunt1": "栄養とフィットネスの知識をテクノロジーと組み合わせたプロジェクト。",
			"projects.nutriunt2": "データと科学的根拠に基づいた、健康とウェルネスのためのパーソナライズドソリューションを提供します。",
			"projects.rainbow1": "簡単なカラーハーモニー：直感的なツールで完璧なパレットを作成。組み合わせを探索し、明るさを調整してインパクトのあるデザインを作りましょう。",
            "projects.rainbow2": "理想のカラーパレット：鮮やかな組み合わせを数秒で見つけてカスタマイズ。カラーハーモニーツールでデザインをワンランクアップ。",
			"projects.pdf1": "PDFからテキストへの変換：ドキュメントの内容を簡単に変換・抽出。編集と情報の再利用が数秒で簡単に行えます。",
            "projects.pdf2": "簡素化されたPDFテキスト抽出：PDFを編集可能なテキストに変換することで作業をスピードアップ。効率的なドキュメント管理ソリューションです。",
			"projects.loca1": "アプリで資産と人を正確に追跡。位置を瞬時に監視し、安全性と最適な制御を実現します。",
            "projects.loca2": "位置情報データをスマートフォンに直接送信。スマートロケーターで常に接続し、最新情報を入手しましょう。",
			"contact.title": "一緒に働きましょう",
			"contact.name": "名前",
			"contact.email": "メール",
			"contact.message": "メッセージ",
			"contact.submit": "送信",
			"footer.copyright": "© 2023 イゴール・バルビーノ。全著作権所有。",
			"modal.success": "成功！",
			"modal.message": "メッセージは正常に送信されました。すぐに連絡します。",
			"modal.close": "閉じる"
		}
	};
	
	// Função para mudar idioma
    function changeLanguage(lang) {
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            $(this).text(translations[lang][key] || translations['pt'][key]);
        });
    }

    // Seletor de idioma
    $('#language-selector').change(function() {
        const lang = $(this).val();
        changeLanguage(lang);
    });

    // Animação de scroll para seções
    function checkScroll() {
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            
            if (scrollTop > sectionTop - windowHeight + 200) {
                $(this).addClass('visible');
            }
        });
    }

    // Formulário de contato
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        // Simulação de envio (substitua por AJAX real)
        $('#success-modal').removeClass('hidden');
        
        // Reset do formulário
        this.reset();
    });

    // Fechar modal
    $('#close-modal').click(function() {
        $('#success-modal').addClass('hidden');
    });

    // Inicializações
    checkScroll();
    $(window).scroll(checkScroll);
    
    // Verifica se há hash na URL (para links âncora)
    if (window.location.hash) {
        $(window).on('load', function() {
            setTimeout(function() {
                const target = $(window.location.hash);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                }
            }, 100);
        });
    }

    // Efeito hover na foto de perfil
    $('#profile-img').hover(
        function() {
            $(this).css('transform', 'rotate(5deg) scale(1.1)');
        },
        function() {
            $(this).css('transform', '');
        }
    );

    // Carrega o idioma do navegador ou padrão (pt)
    const userLang = navigator.language || navigator.userLanguage; 
    const defaultLang = ['pt', 'en', 'es', 'it', 'ja'].includes(userLang.substr(0,2)) ? userLang.substr(0,2) : 'pt';
    $('#language-selector').val(defaultLang);
    changeLanguage(defaultLang);
});