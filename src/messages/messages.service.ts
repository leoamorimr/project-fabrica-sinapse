import { MessageDTO } from './message.dto';
import { Message } from './message';
import { Injectable } from '@nestjs/common';

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
    const message = this.messages.find((msg) => msg?.id === id);

    if (!message) throw new Error(`Message not found with ID: ${id}`);

    return message;
  }

  create(messageDTO: MessageDTO) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messageDTO,
    };
    this.messages.push(message);
    return this.messages;
  }

  async update(id: number, messageDTO: MessageDTO) {
    const idx = this.messages.findIndex((msg) => msg?.id === id);

    if (idx < 0) throw new Error(`Message Not Found with ID: ${id}`);

    const message: Message = {
      id,
      ...messageDTO,
    };

    this.messages[idx] = message;

    return this.messages;
  }

  async deleteById(id: number) {
    const idx = this.messages.findIndex((message) => message?.id === id);

    if (idx < 0) throw new Error(`Message Not Found with ID: ${id}`);

    this.messages.splice(idx, 1);

    return this.messages;
  }
}
