import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SubCategory } from 'src/sub-category/entity/sub-category.entity';
import { Category } from 'src/category/entity/category.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => SubCategory, (subCategory) => subCategory.created_by)
  subCategories: SubCategory[];

  @OneToMany(() => Category, (category) => category.created_by)
  categories: Category[];
}
