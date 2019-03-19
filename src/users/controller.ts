import { JsonController, Get, Param, Put, Body, HttpCode, Post, NotFoundError } from 'routing-controllers'
import User from './entity'

@JsonController()
export default class UserController {

    @Get('/users/:id')
    getUser(
      @Param('id') id: number
    ) {
      return User.findOne(id)
    }

    @Get('/users')
    async allPages(){
        const users = await User.find()
        return { users }
    }

    @Put('/users/:id')
    async updateUser(
        @Param('id') id: number,
        @Body() update: Partial<User>
    ){
        const page= await User.findOne(id)
        if(!page) {
            throw new NotFoundError('User not found')
        }
        return User.merge(page, update).save()
    }

    @Post('/users')
    @HttpCode(201)
    async createUser(
      @Body() user: User
    ) {
        const {password, ...rest} = user
        const entity = User.create(rest)
        await entity.setPassword(password)
        return entity.save()
    }

}