import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({type: 'text'})
  name: string;

  @Column({type: 'decimal', precision: 10, scale: 2})
  price: number;

  @Column({type: 'int'})
  quantity: number;

  @Column({type: 'timestamp'})
  created_at: Date;

  @Column({type: 'timestamp'})
  updated_at: Date;
}


//tsConfig.json         "strictPropertyInitialization": false,
