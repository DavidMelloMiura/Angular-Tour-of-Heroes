import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []; /* Array de mensagens do tipo string */

  add(message: string) { /* Metodo para adicionar mensagensna no array messages acima */
    this.messages.push(message); /* messages recebe um push de message */
  }

  clear() { /* limpar mensagens */
    this.messages = []; /* Messages fica [] vazio */
  }

  constructor() { }
}
