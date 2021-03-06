import { JsonController, Get, Param, Put, Body, HttpCode, Post, NotFoundError } from 'routing-controllers'
import Page from './entity'

@JsonController()
export default class PageController {

    @Get('/pages/:id')
    getPage(
      @Param('id') id: number
    ) {
      return Page.findOne(id)
    }

    @Get('/pages')
    async allPages(){
        const pages = await Page.find()
        return { pages }
    }

    @Put('/pages/:id')
    async updatePage(
        @Param('id') id: number,
        @Body() update: Partial<Page>
    ){
        // console.log(`Incoming PUT body param:`, update)
        const page= await Page.findOne(id)
        if(!page) {
            throw new NotFoundError('Page not found')
        }
        return Page.merge(page, update).save()
    }

    @Post('/pages')
    @HttpCode(201)
    createPage(
      @Body() page: Page
    ) {
      return page.save()
    }

}