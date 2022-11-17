import { Libro } from "src/modules/libros/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'clientes'})
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    name: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { nullable: true })
    github: string;

    @Column('text', { nullable: true })
    twitter: string;


    //Relaciones
    //Uno a muchos
    @OneToMany(
        () => Libro,
        (Libro) => Libro.cliente,
        { cascade: false }
    )
    libros?: Libro[];



}
