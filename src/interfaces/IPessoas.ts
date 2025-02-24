export default interface Pessoa {
    id: number;
    imagem: string | null;
    nome: string;
    setor: {
      id: number;
      nome: string;
    };
    usuario: string;
    permissao: string;
    status: string;
  }