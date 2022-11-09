import { Controller, Get, Param, Delete, Patch, Body, Post, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { ICar } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
      //     @Get('listar')
     //     getAllCars(){
       //         return ['Honda','Peugout','Jeep','Mercedes']
      //     }
        
      constructor(private readonly carsService : CarsService){
        
      }
        
    //   private cochel = ['Honda','Peugout','Jeep','Mercedes']
        
      //Listar todos los coches
     @Get()
     getAllCars(){
         return this.carsService.findAll();
     }
        
        
    //Detalles de un coche
     @Get(':id/:name')
     detalleCars( @Param('id', ParseIntPipe) id: string, @Param('name') name:string ){
         return `Detalles del coche ${id}, ${name}`
     }
        
     
     //Añadir nuevo coche
     @Post()
     create( @Body() dataCreateDTO: CreateCarDTO ){
        return this.carsService.create(dataCreateDTO);
     }
        
        
     //Borrar un coche
     @Delete(':id')
     deleteCars( @Param('id', ParseUUIDPipe) id: string ){
        return this.carsService.delete(id);
     }
     
      //Actualizar un coche
     @Patch(':id')
     updateCars( @Param('id') id: string,
                 @Body() dataCar: ICar ){
     return 'Actualizado con exito';
    }
    //Detalles de un coche
    @Get(':id')
    getById( @Param('id') id: string ){
        return this.carsService.findOneById(id);
    }
        
}
