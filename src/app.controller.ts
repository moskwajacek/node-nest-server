import {Body, Controller, Get, NotFoundException, Param, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private contacts = [
    {id: 0, name: 'Piotr'},
    {id: 1, name: 'Paweł'},
    {id: 2, name: 'Adam'},
  ];

  @Get('contacts')
  getContacts(@Query('q') query) {
    if (query) {
      const queryReq = new RegExp(query, 'i');
      return this.contacts.filter(row => row.name.search(queryReq) >= 0);
    }
    return this.contacts;
  }

  @Get('contacts/:id')
  getContact(@Param('id') id: string) {
    const contact = this.contacts.find(c => c.id === parseInt(id, 10));
    if (contact) {
      return contact;
    } else {
      throw new NotFoundException('Contact not found');
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('contacts')
  postContacts(@Body() data) {
    const contact = {
      name: '',
      ...data,
      id: this.contacts.length,
    };
    this.contacts.push(contact);
    return contact;
  }
}
