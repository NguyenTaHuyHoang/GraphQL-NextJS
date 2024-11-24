import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createUserInput {
  @Field()
  userName: string;

  @Field({ nullable: true })
  displayName: string;
}
