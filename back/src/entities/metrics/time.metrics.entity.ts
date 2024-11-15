import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Metrics } from './metrics.entity';
import { User } from '../user.entity';

@Entity({
  name: 'time_metrics',
})
export class TimeMetrics {
  @PrimaryGeneratedColumn('uuid')
  time_metrics_id: string = uuid();

  @Column('float')
  session_starts: number;

  @Column('float')
  session_ends: number;

  @Column('float')
  session_duration: number;

  @Column('timestamp')
  session_start_time: Date;

  @Column('timestamp')
  session_end_time: Date;

  @ManyToOne(() => Metrics, (metrics) => metrics.time_metrics)
  @JoinColumn({ name: 'metrics_id' })
  metrics: Metrics;

  @ManyToOne(() => User, (usuario) => usuario.time_metrics)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
