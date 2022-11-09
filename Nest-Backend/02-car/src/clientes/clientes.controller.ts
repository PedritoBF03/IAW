import { Controller, Get } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {

    private clientes1 = ['Juan', 'Pedro', 'Cristobal']

    //Listar todos los clientes
    @Get('listar')
    getAllCars(){
        return this.clientes1;
    }


    //Detalles de un cliente
    @Get('detalle')
    detalleCars(){
        return 'Detalles de un cliente';
    }


    //Añadir nuevo cliente
    @Get('new')
    newCliente(){
        return 'Creado con exito';
    }


    //Boorar un cliente
    @Get('delete')
    deleteCliente(){
        return 'Borrado con exito';
    }


    //Actualizar un coche
    @Get('update')
    updateCliente(){
        return 'Actualizado con exito';
    }
    
}
