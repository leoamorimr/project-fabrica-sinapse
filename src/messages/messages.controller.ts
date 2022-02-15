import { MessageDTO } from './message.dto';
import { MessagesService } from './messages.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
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
  //Using Pipe to convert the param from string to int (number)
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.messagesService.findById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() message: MessageDTO) {
    return this.messagesService.create(message);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() messageDTO: MessageDTO,
  ) {
    return this.messagesService.update(id, messageDTO).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.messagesService.deleteById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
