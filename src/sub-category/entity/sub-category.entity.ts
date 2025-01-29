import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from 'src/category/entity/category.entity';
import { User } from 'src/users/entity/user.entity';
@Entity('sub-category')
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 250, nullable: true })
  slug: string;

  @Column({ length: 255 })
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @ManyToOne(() => Category, (category) => category.subCategories, {
    eager: true,
    onDelete: 'CASCADE',
  })
  category: Category;

  @ManyToOne(() => User, (user) => user.subCategories, {
    eager: true,
    onDelete: 'CASCADE',
  })
  created_by: User;
}
