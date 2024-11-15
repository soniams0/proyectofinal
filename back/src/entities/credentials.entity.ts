import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './user.entity';

@Entity({
  name: 'credentials',
})
export class Credentials {
  @PrimaryGeneratedColumn('uuid')
  credential_id: string = uuid();

  @Column({
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 15,
  })
  username: string;

  @Column({
    unique: true,
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'integer',
  })
  password: number;

  @OneToOne(() => User, (user) => user.credential)
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
