import CepModel from "../Model/CepModel";

export class CepController {
  static ceps: CepModel[] = [];

  static async  fetchCep(cep:string):Promise<void> {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if(!data.erro){
        const cepObj = new CepModel(cep=data.cep, data.logradouro, data.bairro, data.localidade, data.uf);
        this.ceps.push(cepObj);
      } else {
        console.log("Cep not found");
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  static getCeps(): CepModel[] {
    return this.ceps;
  }

}