import { Controller, Get } from '@nestjs/common';

@Controller('ventas')
export class VentasController {
    private clientes1 = ['Coche', 'Motor', 'Retrovisor']

    //Listar todas las ventas
    @Get('listar')
    getAllVentas(){
        return this.clientes1;
    }


    //Detalles de una venta
    @Get('detalle')
    detalleVentas(){
        return 'Detalles de una venta';
    }


    //Añadir nueva venta
    @Get('new')
    newVentas(){
        return 'Creado con exito';
    }


    //Boorar una venta
    @Get('delete')
    deleteVentas(){
        return 'Borrado con exito';
    }


    //Actualizar una ventas
    @Get('update')
    updateVentas(){
        return 'Actualizado con exito';
    }
}
