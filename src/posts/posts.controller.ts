import { Controller, Get, Request,Body, HttpCode } from '@nestjs/common';
import {PostsService} from './posts.service'

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    // @HttpCode(500)
    @Get()
    find(@Body() body){
        // console.log(111,body)
        return this.postsService.sayService()
    }
}
