import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try{
      const {name, email} = request.body;
      const userCreatead = this.createUserUseCase.execute({name, email})
      return response.status(201).json(userCreatead).send()
    }catch(e){
      console.log(e);
      return response.status(400).json({error: 'Email Already Exists'})
    }
  }
}

export { CreateUserController };
