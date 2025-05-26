document.addEventListener('DOMContentLoaded', function() {
    // Elementos das telas
    const screens = {
        screen1: document.getElementById('screen1'),
        screen2: document.getElementById('screen2'),
        screen3: document.getElementById('screen3'),
        screen4: document.getElementById('screen4'),
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
    
    // Elementos do formulário
    const productsContainer = document.getElementById('productsContainer');
    const citySelect = document.getElementById('city');
    const storeSelect = document.getElementById('store');
    const whatsappInput = document.getElementById('whatsapp');
    // Checkbox do termo de adesão
    const termsCheckbox = document.getElementById('terms');
    
    // Dados dos produtos (pode ser substituído por uma chamada API se necessário)
    const products = [
        { id: 1, name: 'Bepantriz 50mg Pomada 30g De R$27,37 Por R$ 9,39 ', image: 'images/produtos/produto1.webp' },
        { id: 2, name: 'Produto 2', image: 'images/produtos/produto2.webp' },
        { id: 3, name: 'Produto 3', image: 'images/produtos/produto3.webp' },
        { id: 4, name: 'Produto 4', image: 'images/produtos/produto4.webp' },
        { id: 5, name: 'Produto 5', image: 'images/produtos/produto5.webp' },
        { id: 6, name: 'Produto 6', image: 'images/produtos/produto6.webp' },
        { id: 7, name: 'Produto 7', image: 'images/produtos/produto7.webp' },
        { id: 8, name: 'Produto 8', image: 'images/produtos/produto8.webp' }
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
    
    // Variáveis para armazenar as seleções do usuário
    let selectedProducts = [];
    let selectedCity = '';
    let selectedStore = '';
    let whatsapp = '';
    
    // Inicialização - Carrega os produtos
    function loadProducts() {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
            `;
            
            productCard.addEventListener('click', () => toggleProductSelection(product.id, productCard));
            productsContainer.appendChild(productCard);
        });
    }
    
    // Alternar seleção de produto
    function toggleProductSelection(productId, productCard) {
        const index = selectedProducts.indexOf(productId);
        
        if (index === -1) {
            // Verifica se já selecionou o máximo permitido
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
        
        // Ativa/desativa o botão de avançar conforme a seleção
        toScreen3Btn.disabled = selectedProducts.length === 0;
    }
    
    // Navegação entre telas
    function navigateTo(screenToShow) {
        // Esconde todas as telas
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Mostra a tela solicitada
        screens[screenToShow].classList.add('active');
    }
    
    // Event listeners para navegação
    startQuizBtn.addEventListener('click', () => navigateTo('screen2'));
    backToScreen1Btn.addEventListener('click', () => navigateTo('screen1'));
    toScreen3Btn.addEventListener('click', () => navigateTo('screen3'));
    backToScreen2Btn.addEventListener('click', () => navigateTo('screen2'));
    toScreen4Btn.addEventListener('click', () => navigateTo('screen4'));
    backToScreen3Btn.addEventListener('click', () => navigateTo('screen3'));
    
    // Configuração do seletor de cidades/lojas
    citySelect.addEventListener('change', function() {
        const city = this.value;
        selectedCity = city;
        
        // Limpa e desabilita o seletor de lojas
        storeSelect.innerHTML = '<option value="" selected disabled>Selecione uma loja</option>';
        storeSelect.disabled = !city;
        
        // Preenche as lojas da cidade selecionada
        if (city) {
            storesByCity[city].forEach(store => {
                const option = document.createElement('option');
                option.value = store;
                option.textContent = store;
                storeSelect.appendChild(option);
            });
            
            storeSelect.disabled = false;
        }
        
        // Atualiza o estado do botão de avançar
        toScreen4Btn.disabled = !city;
    });
    
    storeSelect.addEventListener('change', function() {
        selectedStore = this.value;
    });
    
    // Validação do WhatsApp
    whatsappInput.addEventListener('input', function() {
        // Formata o número enquanto o usuário digita
        let value = this.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.substring(0, 11);
        }
        
        if (value.length > 0) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            if (value.length > 10) {
                value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            }
        }
        
        this.value = value;
        validateWhatsappAndTerms();
    });

    // Validação do termo de adesão
    if (termsCheckbox) {
        termsCheckbox.addEventListener('change', validateWhatsappAndTerms);
    }

    // Habilita o botão de envio apenas se ambos estiverem ok
    function validateWhatsappAndTerms() {
        const whatsappValid = whatsappInput.value.replace(/\D/g, '').length === 11;
        const termsChecked = termsCheckbox && termsCheckbox.checked;
        submitQuizBtn.disabled = !(whatsappValid && termsChecked);
    }

    // Chama validação também ao carregar a página para garantir estado correto
    validateWhatsappAndTerms();

    // Envio dos dados para o Google Sheets via AppSheet
    submitQuizBtn.addEventListener('click', function() {
        whatsapp = whatsappInput.value;
        
        // Validação simples
        if (!whatsapp || whatsapp.replace(/\D/g, '').length < 11) {
            alert('Por favor, informe um número de WhatsApp válido.');
            return;
        }

        // Validação do termo de adesão
        if (!termsCheckbox || !termsCheckbox.checked) {
            alert('Você deve concordar com o termo de adesão para enviar.');
            return;
        }

        // Prepara os dados para envio
        const formData = {
            products: selectedProducts.join(', '),
            city: selectedCity,
            store: selectedStore,
            whatsapp: whatsapp,
            timestamp: new Date().toISOString()
        };
        
        // Simulação de envio (substitua pela integração real com AppSheet)
        console.log('Dados a serem enviados:', formData);
        sendToAppSheet(formData);
        
        // Mostra tela de confirmação
        navigateTo('confirmationScreen');
    });
    
    // Função para enviar dados ao AppSheet (via Google Sheets)
    function sendToAppSheet(data) {
        const webhookUrl = 'https://script.google.com/macros/s/AKfycbwrVWk9jDcQw-y3EIkvvxXwvNWh4JebcFRfhPlBx8G0hTotHg1T2yqzq1UxkjwSDKQiuQ/exec';

        // Monta os dados em formato x-www-form-urlencoded (como um form mesmo)
        const formBody = Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');

        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody
        })
        .then(res => {
            // Você pode checar res.ok/res.status, mas como Apps Script retorna vazio, só navega para tela final
            navigateTo('confirmationScreen');
        })
        .catch(err => {
            alert("Erro ao enviar dados! Tente novamente.\n" + err);
        });
    }
    // Atualize o evento de envio para NÃO chamar form.submit
    submitQuizBtn.addEventListener('click', function(e) {
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

        const formData = {
            products: selectedProducts.join(', '),
            city: selectedCity,
            store: selectedStore,
            whatsapp: whatsapp,
            timestamp: new Date().toISOString()
        };

        sendToAppSheet(formData);

        // NÃO chame navigateTo('confirmationScreen') aqui! Só depois do fetch OK!
    });

// ===================== TERMO DE ADESÃO - MODAL PDF.js =====================

const PDF_URL = "https://www.dropbox.com/scl/fi/x5fqeeub9ao70166nt4xm/termo_adesao_cliente_premium_novo.pdf?rlkey=lvmvtqx1a5g2vpxrf7wpu3wei&st=m2fov8ge&raw=1";

// Teste defensivo
if (typeof window.pdfjsLib === "undefined") {
  alert("PDF.js não foi carregado!");
} else {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.worker.min.js";
}

function renderPDF(url, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  pdfjsLib.getDocument(url).promise.then(pdf => {
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      pdf.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale: 1.2 });
        const canvas = document.createElement("canvas");
        container.appendChild(canvas);
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const context = canvas.getContext("2d");
        page.render({
          canvasContext: context,
          viewport: viewport
        });
      });
    }
  }).catch(err => {
    container.innerHTML = `<p style="color:red">Não foi possível abrir o PDF.<br>${err.message}</p>`;
  });
}

const openTermoBtn = document.getElementById('openTermo');
const pdfModal = document.getElementById('pdfModal');
const pdfjsViewer = document.getElementById('pdfjs-viewer');
const closeModalBtn = document.getElementById('closeModal');

if (openTermoBtn && pdfModal && pdfjsViewer && closeModalBtn) {
  openTermoBtn.onclick = function(e) {
    e.preventDefault();
    pdfModal.classList.add('active');
    document.body.classList.add('modal-open'); // BLOQUEIA SCROLL DO BODY
    renderPDF(PDF_URL, 'pdfjs-viewer');
  };
  closeModalBtn.onclick = function() {
    pdfModal.classList.remove('active');
    document.body.classList.remove('modal-open'); // LIBERA SCROLL DO BODY
    pdfjsViewer.innerHTML = "";
  };
  pdfModal.onclick = function(e) {
    if (e.target === this) {
      pdfModal.classList.remove('active');
      document.body.classList.remove('modal-open'); // LIBERA SCROLL DO BODY
      pdfjsViewer.innerHTML = "";
    }
  };
}


    // Inicializa o quiz
    loadProducts();
});