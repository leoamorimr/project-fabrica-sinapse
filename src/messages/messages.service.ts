import { Injectable } from '@nestjs/common';

type Message = {
  id: number;
  name: string;
  lastName?: string;
};

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
}
