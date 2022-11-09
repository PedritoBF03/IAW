import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDTO } from './dto/create-car.dto';
import { ICar } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';


@Injectable()
export class CarsService {
    private cars:ICar[] =[
        {
            id: uuid(),
            brand: 'Seat',
            model: 'Ibiza',
        },
        {
            id: uuid(),
            brand: 'Seat',
            model: 'Toledo',
        },
        {
            id: uuid(),
            brand: 'Lamborghini',
            model: 'Huracan',
        },
        {
            id: uuid(),
            brand: 'Peugeut',
            model: '307',
        },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        console.log(id);
        const car = this.cars.find(car => car.id === id);
        if(!car){
            throw new NotFoundException(`Car with id '${ id }' not found `)
        }
        return car;
    }

    create (carDTO: CreateCarDTO){
        carDTO.brand = carDTO.brand.toUpperCase();
        const ultimo = this.cars[this.cars.length -1];
        const newId = +ultimo.id + 1;
        const car: ICar = {
            id: uuid(),
            ...carDTO
        }

        this.cars.push(car);
        return `Insertar el ${car.brand}`;
    }

    delete (id: string){
        // const posicion = +id - 1;
        // this.cars = this.cars.slice(posicion,1);

        this.cars = this.cars.filter(car => car.id != id);
        return `El coche ${id} ha sido eliminado de la BD`
    }

    update (id: string, dataCar: ICar){
        let carDB = this.findOneById(id);

        // console.log(...carDB);
        // console.log(...dataCar);        

        // if (dataCar.brand){
        //     carDB.brand = dataCar.brand;
        // }
        // if (dataCar.model){
        //     carDB.model = dataCar.model;
        // }
        
        carDB = {
            ...carDB,
            ...dataCar,
            //id
        }

        return carDB;

    }
    
}
