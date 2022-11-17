import { Cliente } from "src/modules/clientes/entities/cliente.entity";
import { Entity, PrimaryGeneratedColumn, Column, CannotGetEntityManagerNotConnectedError, OneToOne, ManyToOne } from "typeorm";

@Entity({ name: 'libros' })
export class Libro {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    title: string;

    @Column('text', { unique: true })
    isbn: string;

    @Column('int', {default:0})
    pageCount: number;

    @Column('text', { unique: true })
    publishedDate: string;

    @Column('text', { unique: true })
    thumbnailUrl: string;

    @Column('text', {nullable:true })
    shortDescription: string;

    @Column('text', { unique: true })
    longDescription: string;

    @Column('text', { unique: true })
    status: string;


    //Relaciones
    //Muchos a uno
    @ManyToOne(
        () => Cliente,
        (cliente) => cliente.libros,
        { cascade: false }
    )
    cliente?: Cliente;

}


// {
//     "name": "Stilton: En el reino de la fantasía: ¡Libro con olores! (Geronimo Stilton)",
//     "editorial": "PLANETA S. A., EDITORIAL",
//     "isbn": "8408060996",
//     "pageCount": "384",
//     "publishedDate": "3 noviembre 2005",
//     "thumbnailUrl": "https://www.amazon.es/Stilton-En-reino-fantas%C3%ADa-Geronimo/dp/8408060996",
//     "longDescription": "Nacido en Ratonia (Isla de los Ratones), Geronimo Stilton es licenciado en Ratología de la Literatura Ratónica y en Filosofía Arqueorratónica Comparada. Desde hace veinte años dirige El Eco del Roedor, el periódico con más difusión de Ratonia.Ha sido galardonado con el premio Ratitzer por su reportaje El misterio del tesoro desaparecido.Geronimo obtuvo también el premio Andersen 2001 como personaje del año y uno de sus libros ganó el premio eBook Award 2002 como mejor libro electrónico de literatura juvenil.En su tiempo libre, Stilton colecciona cortezas de parmesano del Renacimiento, juega al golf, pero sobre todo adora contarle cuentos a su sobrino Benjamín...",
//     "status": "PUBLISH"
// }