import { MessagesService } from './messages.service';
import { Controller, Get, Param } from '@nestjs/common';

type Message = {
  id: number;
  name: string;
};

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll(): Message[] {
    return this.messagesService.findMessages();
  }

  @Get(':id')
  findById(@Param() params): Message {
    return this.messagesService.findById(+params.id);
  }
}
