document.addEventListener('DOMContentLoaded', function () {
    // Elementos das telas
    const screens = {
        screen1: document.getElementById('screen1'),
        screen2: document.getElementById('screen2'),
        screen3: document.getElementById('screen3'),
        screen4: document.getElementById('screen4'),
        suggestionScreen: document.getElementById('suggestionScreen'),
        confirmationScreen: document.getElementById('confirmationScreen')
    };

    // Botões de navegação
    const startQuizBtn = document.getElementById('startQuiz');
    const backToScreen1Btn = document.getElementById('backToScreen1');
    const toScreen3Btn = document.getElementById('toScreen3');
    const backToScreen2Btn = document.getElementById('backToScreen2');
    const toScreen4Btn = document.getElementById('toScreen4');
    const backToScreen3Btn = document.getElementById('backToScreen3');
    const submitQuizBtn = document.getElementById('submitQuiz');
    const backToScreen4Btn = document.getElementById('backToScreen4');
    const finishQuizBtn = document.getElementById('finishQuiz');
    const userMessageInput = document.getElementById('userMessage');

    // Elementos do formulário
    const productsContainer = document.getElementById('productsContainer');
    const citySelect = document.getElementById('city');
    const storeSelect = document.getElementById('store');
    const whatsappInput = document.getElementById('whatsapp');
    const termsCheckbox = document.getElementById('terms');

    // Modal Termo de Adesão
    const openTermoBtn = document.getElementById('openTermo');
    const pdfModal = document.getElementById('pdfModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Dados dos produtos
    const products = [
        { id: 1, desc: 'Kit Eudora Eau de Parfum 35ml + Hidratante Corporal', priceFrom: '183,99', priceTo: '149,00', image: 'images/produtos/produto1.png' },
        { id: 2, desc: 'Perfume Paris Elysees Billion 100ml Exclusive Edition', priceFrom: ' 89,90 ', priceTo: ' 75,90 ', image: 'images/produtos/produto2.png' },
        { id: 3, desc: 'Mon Bourjois La Formidable Eau de Parfum', priceFrom: '114,00', priceTo: '95,90', image: 'images/produtos/produto3.png' },
        { id: 4, desc: 'Aparador de pelos WAHL Multigroomer Trim Total', priceFrom: '199,90', priceTo: '179,90', image: 'images/produtos/produto4.png' },
        { id: 5, desc: 'Kit Eudora Velvet Authentic 100ml', priceFrom: '162,99', priceTo: '129,90', image: 'images/produtos/produto5.png' },
        { id: 6, desc: 'David Beckham Bold Instinct Eau de Parfum', priceFrom: '155,01', priceTo: '129,00', image: 'images/produtos/produto6.png' },
        { id: 7, desc: 'Copo Term Stanley 519ml Quencher', priceFrom: '269,90', priceTo: '229,00', image: 'images/produtos/produto7.png' },
        { id: 8, desc: 'Secador Gama New Lumina Therapy Biv', priceFrom: '471,99', priceTo: '399,00', image: 'images/produtos/produto8.png' }
    ];
    // Mapeamento de cidades e lojas
    const storesByCity = {
        "CARATINGA": [
            "LOJA ESPERA FELIZ - RUA DOM CARLOTO",
            "LOJA RAUL SOARES - RUA RAUL SOARES",
            "LOJA RODOVIARIA - RUA MIGUEL DE CASTRO",
            "LOJA PRAÇA CONCEIÇÃO - RUA CAPITÃO PAIVA",
            "LOJA MOACIR MATOS - RUA MOACIR MATOS",
            "LOJA OLEGÁRIO - PRAÇA CESÁRIO ALVIM",
            "LOJA CARATINGA BR - AV PRESIDENTE TANCREDO NEVES",
            "LOJA PRACA DA ESTACAO - AV GETULIO VARGAS",
            "LOJA CALOGERAS - PRAÇA CALOGERAS"
        ],
        "GOV VALADARES": [
            "LOJA CHISTE - RUA ISRAEL PINHEIRO 1",
            "LOJA MERCADO - EM FRENTE AO MERCADO MUNICIPAL",
            "LOJA IBITURUNA - RUA JOÃO PINHEIRO",
            "LOJA PEROLA - RUA VALE FORMOSO",
            "LOJA BELVICK - RUA MARECHAL FLORIANO",
            "LOJA JK - AV JK PROXIMO AO SANTANDER",
            "LOJA VILA ISA - RUA PAULO DESLANDES",
            "LOJA PEÇANHA - RUA ISRAEL PINHEIRO 3",
            "LOJA MINAS GERAIS - AV MINAS GERAIS",
            "LOJA SANTA RITA - AV WENCESLAU BRAZ",
            "LOJA LOURDES - RUA ISRAEL PINHEIRO 4",
            "LOJA ILHA - PRAÇA JÚLIO SOARES",
            "LOJA SÃO LUCAS - AV SETE DE SETEMBRO",
            "LOJA POSTO - AV DR RAIMUNDO MONTEIRO REZENDE",
            "LOJA SANTO AGOSTINHO - RUA JOSÉ IVAIR FERREIRA",
            "LOJA SAO RAIMUNDO - AV ENG ROBERTO LASSANCE",
            "LOJA SAO PEDRO - RUA ISRAEL PINHEIRO 5",
            "LOJA MIRANTE - AV RIO BAHIA",
            "LOJA PRACA DO EMIGRANTE - PRAÇA DO SHOPPING",
            "LOJA AVENIDA BRASIL 2 - AV BRASIL IV",
            "LOJA CASTANHEIRAS - AV PECUARISTA CARLOS MACHADO"
        ],
        "TEOFILO OTONI": [
            "LOJA MATRIZ - PRÓXIMO A MAGAZINE LUIZA",
            "LOJA GETULIO VARGAS - AO LADO DO CHIQUINHOS",
            "LOJA DROGALAR - DE FRENTE AO BANCO MERCOSUL",
            "LOJA FEIRINHA - PRÓXIMO AO EPA",
            "LOJA BELA VISTA - 24H",
            "LOJA AVENIDA - AO LADO DA PREFEITURA",
            "LOJA PRAÇA TIRADENTES - EM FRENTE DA PRAÇA",
            "LOJA SÃO JACINTO - PRAÇA DO SÃO JACINTO",
            "LOJA FRANCISCO SA - AV FRANCISCO SÁ",
            "LOJA DUQUE DE CAXIAS - EM FRENTE A PRAÇA DA CEMIG",
            "LOJA MC DONALD - ANTIGO MCDONALD",
            "LOJA RIO BAHIA - DE FRENTE AO TIA TECA",
            "LOJA SAO CRISTOVAO - BAIRRO SÃO CRISTÓVÃO",
            "LOJA SAFRA - ANTIGO SAFRA",
            "LOJA RUA DAS FLORES - PRÓXIMO A RODOVIÁRIA"
        ],
        "IPATINGA": [
            "LOJA IPATINGA - AV 28 DE ABRIL",
            "LOJA BOM JARDIM - AV DAS FLORES",
            "LOJA CIDADE NOBRE - AV SIMON BOLÍVIA",
            "LOJA BOM RETIRO - AV FERNANDO DE NORONHA",
            "LOJA HORTO - AV CASTELO BRANCO",
            "LOJA AVENIDA BRASIL - AV BRASIL",
            "LOJA IPATINGA 2 - AV 28 DE ABRIL 2",
            "LOJA IGREJA - AV 28 DE ABRIL 3",
            "LOJA CANAA - AV SELIM JOSÉ DE SALES",
            "LOJA IGUACU - AV BRASIL 2",
            "LOJA CANAA 2 - AV SELIM JOSÉ DE SALES 2",
            "LOJA POSTO BONANZA - RUA CLAUDIO MOURA",
            "LOJA SHOPPING - SHOPPING ANDAR 1 LJ 89",
            "LOJA CIDADE NOBRE 2 - AV MONTEIRO LOBATO",
            "LOJA ROTATORIA - AV CARLOS CHAGAS",
            "LOJA BETHANIA - AV ALBERTO GIOVANINI",
            "LOJA CANAA 3 - AV MINAS GERAIS",
            "LOJA HORTO 2 - RUA JACARANDA",
            "LOJA IGUACU 2 - AV BRASIL 3",
            "LOJA CARAVELAS - AV GETULIO VARGAS 3",
            "LOJA VENEZA - AV LONDRINA",
            "LOJA CANAANZINHO - AV GALILEIA",
            "LOJA MACAPA - AV MACAPÁ",
            "LOJA BOM RETIRO 2 - AV FERNANDO DE NORONHA 2"
        ],
        "ALMENARA": [
            "ALMENARA - RUA ARGEMIRO DE AGUILAR",
            "ALMENARA 2 - AVENIDA OLINDO DE MIRANDA"
        ]
    };

    // Variáveis do usuário
    let selectedProducts = [];
    let selectedCity = '';
    let selectedStore = '';
    let whatsapp = '';
    let userMessage = '';

    // Inicialização - Carrega os produtos
    function loadProducts() {
        productsContainer.innerHTML = '';
        products.forEach(prod => {
            const productHtml = `
                <div class="product-card">
                    <img src="${prod.image}" alt="${prod.desc}">
                    <p class="product-desc">${prod.desc}</p>
                    <div class="product-prices">
                        <span class="price-de">de R$ ${prod.priceFrom}</span>
                        <span class="price-por">por R$ ${prod.priceTo}</span>
                    </div>
                </div>
            `;
            productsContainer.innerHTML += productHtml;
        });
    }

    // Alternar seleção de produto
    function toggleProductSelection(productId, productCard) {
        const index = selectedProducts.indexOf(productId);

        if (index === -1) {
            if (selectedProducts.length >= 2) {
                alert('Você só pode selecionar no máximo 2 produtos.');
                return;
            }
            selectedProducts.push(productId);
            productCard.classList.add('selected');
        } else {
            selectedProducts.splice(index, 1);
            productCard.classList.remove('selected');
        }
        toScreen3Btn.disabled = selectedProducts.length === 0;
    }

    // Navegação entre telas
    function navigateTo(screenToShow) {
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
        });
        screens[screenToShow].classList.add('active');
    }

    // Event listeners para navegação
    startQuizBtn && startQuizBtn.addEventListener('click', () => navigateTo('screen2'));
    backToScreen1Btn && backToScreen1Btn.addEventListener('click', () => navigateTo('screen1'));
    toScreen3Btn && toScreen3Btn.addEventListener('click', () => navigateTo('screen3'));
    backToScreen2Btn && backToScreen2Btn.addEventListener('click', () => navigateTo('screen2'));
    toScreen4Btn && toScreen4Btn.addEventListener('click', () => navigateTo('screen4'));
    backToScreen3Btn && backToScreen3Btn.addEventListener('click', () => navigateTo('screen3'));
    backToScreen4Btn && backToScreen4Btn.addEventListener('click', () => navigateTo('screen4'));

    // Sugestão: Botão finalizar só está ativo na tela de sugestão
    finishQuizBtn && finishQuizBtn.addEventListener('click', function () {
        // Desabilita o botão imediatamente e muda o texto
        finishQuizBtn.disabled = true;
        finishQuizBtn.textContent = "Enviando...";
        finishQuizBtn.classList.add('disabled');

        userMessage = userMessageInput ? userMessageInput.value : '';
        const formData = {
            products: selectedProducts.join(', '),
            city: selectedCity,
            store: selectedStore,
            whatsapp: whatsapp,
            userMessage: userMessage,
            timestamp: new Date().toISOString()
        };
        sendToAppSheet(formData);
        // Não reabilite o botão, pois após o envio você vai para a tela de confirmação!
    });

    // Configuração do seletor de cidades/lojas
    citySelect && citySelect.addEventListener('change', function () {
        const city = this.value;
        selectedCity = city;
        storeSelect.innerHTML = '<option value="" selected disabled>Selecione uma loja</option>';
        storeSelect.disabled = !city;
        if (city) {
            storesByCity[city].forEach(store => {
                const option = document.createElement('option');
                option.value = store;
                option.textContent = store;
                storeSelect.appendChild(option);
            });
            storeSelect.disabled = false;
        }
        toScreen4Btn.disabled = !city;
    });

    storeSelect && storeSelect.addEventListener('change', function () {
        selectedStore = this.value;
    });

    // Validação do WhatsApp
    whatsappInput && whatsappInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);
        if (value.length > 0) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            if (value.length > 10) value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        }
        this.value = value;
        validateWhatsappAndTerms();
    });

    // Validação do termo de adesão
    termsCheckbox && termsCheckbox.addEventListener('change', validateWhatsappAndTerms);

    function validateWhatsappAndTerms() {
        const whatsappValid = whatsappInput.value.replace(/\D/g, '').length === 11;
        const termsChecked = termsCheckbox && termsCheckbox.checked;
        submitQuizBtn.disabled = !(whatsappValid && termsChecked);
    }

    // Chama validação também ao carregar a página para garantir estado correto
    validateWhatsappAndTerms();

    // Botão "Enviar" da tela 4: só navega para a tela de sugestão, não envia dados ainda!
    submitQuizBtn && submitQuizBtn.addEventListener('click', function (e) {
        e.preventDefault();
        whatsapp = whatsappInput.value;
        if (!whatsapp || whatsapp.replace(/\D/g, '').length < 11) {
            alert('Por favor, informe um número de WhatsApp válido.');
            return;
        }
        if (!termsCheckbox || !termsCheckbox.checked) {
            alert('Você deve concordar com o termo de adesão para enviar.');
            return;
        }
        navigateTo('suggestionScreen');
    });

    // Função para enviar dados ao AppSheet
    function sendToAppSheet(data) {
        const webhookUrl = 'https://script.google.com/macros/s/AKfycbxiRYejjQ6XB7pj46RePajI37Xcc2rAIMqciTy_lmkgGcm5bMdFfHiIwP1lhGUtuez6ew/exec';
        const formBody = Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
        fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody
        })
            .then(res => {
                navigateTo('confirmationScreen');
            })
            .catch(err => {
                alert("Erro ao enviar dados! Tente novamente.\n" + err);
            });
    }

    // ===================== TERMO DE ADESÃO - MODAL IFRAME =====================
    console.log("teste");

    if (openTermoBtn && pdfModal && closeModalBtn) {
        openTermoBtn.onclick = function (e) {
            e.preventDefault();
            console.log('Clique no termo de adesão!');
            pdfModal.classList.add('active');
            document.body.classList.add('modal-open');
        };
        closeModalBtn.onclick = function () {
            pdfModal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };
        pdfModal.onclick = function (e) {
            if (e.target === pdfModal) {
                pdfModal.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        };
    } else {
        console.warn('Elementos não encontrados:', openTermoBtn, pdfModal, closeModalBtn);
    }
    // Inicializa o quiz
    loadProducts();
});