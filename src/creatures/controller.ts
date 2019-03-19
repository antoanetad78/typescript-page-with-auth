import { JsonController, Get, Param, Body, HttpCode, Post} from 'routing-controllers'

import Creature from './entity'


@JsonController()

export default class CreatureController {

    @Get('/creatures')
    async allPages(){
        const creatures = await Creature.find()
        return { creatures }
    }

    @Get('/creatures/:id')
    getCreature(
        @Param('id') id:number
        ) {
            // if(!id) {throw new NotFoundError('No creature with that id')}
            return Creature.findOne(id)
        }

    @Post('/creatures')
    @HttpCode(201)
    addCreature(
        @Body() creature: Creature
        )   {
        creature.save()
    }
}