import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/userSetting';
import { createUserSettingsInput } from '../utils/createUserSettingsInput';
import { mockUserSettings } from '../__mocks__/mockUserSettings';

@Resolver()
export class UserSettingsResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsInput')
    createUserSettingsData: createUserSettingsInput,
  ) {
    console.log(createUserSettingsData);
    const { userId, receiveNotifications, receiveEmails } =
      createUserSettingsData;
    const newUserSetting = { userId, receiveNotifications, receiveEmails };
    mockUserSettings.push(newUserSetting);
    return createUserSettingsData;
  }
}
