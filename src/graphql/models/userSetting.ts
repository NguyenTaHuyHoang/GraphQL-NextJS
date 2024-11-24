import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSetting {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  receiveNotifications?: boolean;

  @Column()
  @Field({ defaultValue: false })
  receiveEmails?: boolean;
}
