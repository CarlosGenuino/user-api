import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = request.headers.user_id.toString();
    try {
      
      const users = this.listAllUsersUseCase.execute({user_id});
      return response.json(users).send(); 
    }catch(e){
      console.log(e)
      if (e instanceof Error){
        return response.status(400).json({error: 'Unalthorized Request'});
      }
    }
  }
}

export { ListAllUsersController };
