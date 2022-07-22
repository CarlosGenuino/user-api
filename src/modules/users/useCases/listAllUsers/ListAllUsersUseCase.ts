import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    
    if(!user || !user.admin){
      throw new Error("unauthorized access!")
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
