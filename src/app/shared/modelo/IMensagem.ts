export abstract class IMensagem {
  abstract info(mensagem: string): void;
  abstract sucesso(mensagem: string): void;
  abstract erro(mensagem: string): void;
  public alert(mensagem:string):void{
    window.alert(mensagem);
  };
}
