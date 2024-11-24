import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './graphql/resolvers/userResolver';
import { UserSettingsResolver } from './graphql/resolvers/userSettingsResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/models/user';
import { UserSetting } from './graphql/models/userSetting';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser123 ',
      database: 'graphql_tutorial',
      entities: [User, UserSetting],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [UserResolver, UserSettingsResolver],
})
export class AppModule {}
