import { faker } from '@faker-js/faker'
import { User } from './User.interface';

const name = faker.name.firstName();
const surname = faker.name.lastName();
export const user:User = {
  name: name,
  surname: surname,
  username: faker.internet.userName(name, surname),
  email: faker.internet.email(name, surname),
  password: 'aVeryStr0ngP@swd_',
};
