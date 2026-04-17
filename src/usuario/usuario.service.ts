import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private repository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Usuario | null> {
    return this.repository.findOneBy({ id });
  }

  create(usuario: Usuario): Promise<Usuario> {
    return this.repository.save(usuario);
  }

  update(usuario: Usuario): Promise<Usuario> {
    return this.repository.save(usuario);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
