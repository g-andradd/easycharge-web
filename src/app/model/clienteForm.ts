export interface ClienteForm {
    nome: string;
    telefone: string;
    email: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    profissao: string;
    renda: number;
    status: string;
}