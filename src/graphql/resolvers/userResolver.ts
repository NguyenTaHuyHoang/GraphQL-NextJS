import {
  Args,
  Int,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../models/user';
import { mockUsers } from '../__mocks__/mockUsers';
import { UserSetting } from '../models/userSetting';
import { mockUserSettings } from '../__mocks__/mockUserSettings';
import { createUserInput } from '../utils/createUserInput';

export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true }) // Đưa ra null thay vì báo lỗi khi không  tồn tại id
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    // console.log(User);
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserInput') createUserData: createUserInput) {
    const { userName, displayName } = createUserData;
    const newUser = { userName, displayName, id: ++incrementalId };
    mockUsers.push(newUser);
    return newUser;
  }
}
