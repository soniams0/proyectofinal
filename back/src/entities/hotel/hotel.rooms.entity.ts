import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { RoomType } from './roomsType.entity';
import { Hotel } from './hotel.entity';

@Entity({
  name: 'rooms',
})
export class Room {
  @PrimaryGeneratedColumn('uuid')
  room_id: string = uuid();

  @Column()
  type: string;

  @ManyToOne(() => RoomType, (room_type) => room_type.rooms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'room_type_id' })
  room_type!: RoomType;

  @ManyToOne(() => Hotel, (hotel) => hotel.room, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hotel_id' })
  hotel!: Hotel;
}
