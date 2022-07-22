import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    this.users.push(newUser);
    return newUser;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return this.users.find(u => u.id == id);
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return this.users.find(u => u.email == email);
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const userExists = this.findById(receivedUser.id);
    if(!userExists){
      throw new Error('user do not exists');
    }
    userExists.admin = true;
    userExists.updated_at = new Date();
    return userExists;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
