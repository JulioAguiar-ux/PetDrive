import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

@Injectable()
export class CategoriaService {
  findByNome(nome: string): Promise<Categoria[]> {
      throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id });

    if (!categoria) {
      throw new HttpException("Categoria não encontrada!", HttpStatus.NOT_FOUND);
    }
    return categoria;
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<Categoria> {
    if (!categoria.id) {
      throw new HttpException("ID é obrigatório", HttpStatus.BAD_REQUEST);
    }
    const existente = await this.findById(categoria.id);

    return this.categoriaRepository.save({
      ...existente,
      ...categoria,
    });
  }

  async delete(id: number) {
    const categoria = await this.findById(id);

    if (!categoria) {
      throw new NotFoundException("Categoria não encontrada!");
    }
    return await this.categoriaRepository.delete(id);
  }
}