import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './userSetting';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  userName?: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field()
  settings?: UserSetting;
}
