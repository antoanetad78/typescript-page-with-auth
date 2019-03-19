import { JsonController,  Body, Post } from 'routing-controllers'
import { IsString } from 'class-validator';



class AuthenticatePayload {
    @IsString()
    email!: string
  
    @IsString()
    password!: string
  }
  
  @JsonController()
  export default class LoginController {
  
    @Post('/logins')
    authenticate(
      @Body() {email, password}: AuthenticatePayload
    ) {
      // if user exists
      
      // if password is correct
      // send back a jwt token
      // else: send some HTTP 400 Bad request error
    }
  }