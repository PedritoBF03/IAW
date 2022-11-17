import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>
  ){

  }

  async create(createClienteDto: CreateClienteDto) {
    try {
      const cliente = this.clienteRepository.create(createClienteDto);
      console.log(cliente);
      await this.clienteRepository.save(cliente);
      return cliente;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
    // return 'This action adds a new cliente';
  }

  findAll() {
    return `This action returns all clientes`;
  }

  findOne(id:string) {
    return this.clienteRepository.findOne({
      where: { 
        id 
      },
      relations: {
        libros: true
      }
    });  
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: string) {
    return `This action removes a #${id} cliente`;
  }
}
