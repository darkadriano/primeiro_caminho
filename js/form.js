/**
 * js/form.js
 * Camada de Interação, Hidratação e Validação do Formulário.
 */
import { salvarCandidato, obterCandidato } from './storage.js';

export function inicializarFormularioCadastro() {
    const form = document.querySelector('form');
    if (!form) return;

    // Hidratação: Preenche os campos caso existam dados salvos
    const candidato = obterCandidato();
    if (candidato) {
        const campos = [
            'nome_completo', 'cpf', 'email', 'telefone', 
            'data_nascimento', 'cep', 'logradouro', 'numero', 'cidade'
        ];
        campos.forEach(campo => {
            if (candidato[campo] && form.elements[campo]) {
                form.elements[campo].value = candidato[campo];
            }
        });
    }

    // Interceptação da submissão
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            nome_completo: form.elements['nome_completo']?.value || '',
            cpf: form.elements['cpf']?.value || '',
            email: form.elements['email']?.value || '',
            telefone: form.elements['telefone']?.value || '',
            data_nascimento: form.elements['data_nascimento']?.value || '',
            cep: form.elements['cep']?.value || '',
            logradouro: form.elements['logradouro']?.value || '',
            numero: form.elements['numero']?.value || '',
            cidade: form.elements['cidade']?.value || '',
            data_cadastro: new Date().toISOString()
        };

        salvarCandidato(formData);

        // Feedback assíncrono com SweetAlert2 ou fallback nativo
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: 'Inscrição Concluída!',
                text: 'Os seus dados foram gravados com sucesso no navegador.',
                icon: 'success',
                confirmButtonText: 'Prosseguir',
                confirmButtonColor: '#10B981'
            });
        } else {
            alert('Cadastro realizado com sucesso! Seus dados foram salvos no dispositivo.');
        }
    });
}
