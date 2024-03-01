export default class CepModel{
  cep: string;
  logradouro: string;
  // numero: string;
  // complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  
  //constructor (cep: string, logradouro: string, numero: string, complemento:string, bairro: string, cidade: string, uf: string) {
  constructor (cep: string, logradouro: string, bairro: string, cidade: string, uf: string) {    
    this.cep = cep;
    this.logradouro = logradouro;
    // this.numero = numero;
    // this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
  }  
}


