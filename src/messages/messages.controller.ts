import { MessagesService } from './messages.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Message } from './message';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll(): Message[] {
    return this.messagesService.findMessages();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Message {
    //Using Pipe to convert the param from string to int (number)
    return this.messagesService.findById(id);
  }

  @Post()
  create(@Body() body: Message) {
    this.messagesService.create(body);
  }
}
