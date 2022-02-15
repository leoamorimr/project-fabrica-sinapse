import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
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

  async findById(id: number): Promise<Message> {
    const message = this.messages.find((msg) => msg.id === id);
    if (!message) throw new Error(`Message not found with ID: ${id}`);
    return message;
  }

  create(message: Message) {
    this.messages.push(message);
  }

  update(id: number, message: Message): Promise<Message> {
    const index = this.messages.findIndex((msg) => msg.id === id);
    this.messages[index] = message;
    return message[index];
  }

  deleteById(id: number) {
    const msgIdx = this.messages.findIndex((message) => message.id === id);
    delete this.messages[msgIdx];
    return true;
  }
}
