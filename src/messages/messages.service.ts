import { Injectable } from '@nestjs/common';
import { Message } from './message';

@Injectable()
export class MessagesService {
  messages: Message[] = [
    {
      id: 1,
      name: 'Leonardo',
    },
    {
      id: 2,
      name: 'Thayse',
    },
  ];

  findMessages(): Message[] {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: Message) {
    this.messages.push(message);
  }
}
