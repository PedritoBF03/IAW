import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'clientes'})
export class Cliente {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { unique: true } )
    name: string;

    @Column('text', { unique: true } )
    email: string;

    @Column('text', { nullable: true } )
    github: string;

    @Column('text', { nullable: true } )
    twitter: string;
}
