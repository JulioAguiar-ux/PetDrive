import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('/usuarios')
export class UsuarioController {

  constructor(private readonly service: UsuarioService) {}

  
  @Get()
  findAll() {
    return this.service.findAll();
  }

 
  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }


  @Post()
  create(@Body() usuario: Usuario) {
    return this.service.create(usuario);
  }

  @Put()
  update(@Body() usuario: Usuario) {
    return this.service.update(usuario);
  }

 
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}