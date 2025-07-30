    // Formatação do CEP
        document.getElementById('cep').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 5) {
                value = value.substring(0, 5) + '-' + value.substring(5, 8);
            }
            e.target.value = value;
        });

        // Formatação do telefone
        function formatPhone(input) {
            let value = input.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.substring(0, 11);
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{4})/, '($1) $2');
            }
            input.value = value;
        }

        document.getElementById('phone').addEventListener('input', function(e) {
            formatPhone(e.target);
        });

        document.getElementById('whatsapp').addEventListener('input', function(e) {
            formatPhone(e.target);
        });

        // Atualização do label do arquivo com preview
        document.getElementById('storeLogo').addEventListener('change', function(e) {
            const label = document.getElementById('logoLabel');
            const file = e.target.files[0];
            
            if (file) {
                // Verifica se é uma imagem
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        label.innerHTML = `
                            <img src="${e.target.result}" alt="Preview do logo" class="logo-preview">
                            <span class="upload-text">📁 ${file.name}</span>
                            <span class="upload-text" style="font-size: 0.8rem; opacity: 0.7;">Clique para alterar</span>
                        `;
                        label.classList.add('has-image');
                    };
                    
                    reader.readAsDataURL(file);
                } else {
                    // Se não for imagem, mostra apenas o nome do arquivo
                    label.innerHTML = `<span class="upload-text">📁 ${file.name}</span>`;
                    label.classList.remove('has-image');
                }
            } else {
                // Se nenhum arquivo foi selecionado, volta ao estado original
                label.innerHTML = '<span class="upload-text">📁 Clique para selecionar o logo</span>';
                label.classList.remove('has-image');
            }
        });

        // Geração automática do slug da URL
        document.getElementById('storeName').addEventListener('input', function(e) {
            const slug = e.target.value
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim('-');
            document.getElementById('storeSlug').value = slug;
        });

        // Envio do formulário
        document.getElementById('storeForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta todos os dados do formulário
            const formData = new FormData(e.target);
            const storeData = {};
            
            for (let [key, value] of formData.entries()) {
                storeData[key] = value;
            }
            
            // Simula o envio dos dados
            console.log('Dados da loja:', storeData);
            alert('Loja cadastrada com sucesso! Os dados foram enviados para análise.');
        });