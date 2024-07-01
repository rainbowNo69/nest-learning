import { Controller, Get, Request,Body, HttpCode, UseFilters } from '@nestjs/common';
import { AaaException, AaaFilter } from 'src/aaa.filter';
import {PostsService} from './posts.service'

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    // @HttpCode(500)
    @Get()
    find(@Body() body){
        // console.log(111,body)
        console.log('posts')
        return this.postsService.sayService()
    }

    @Get('useExceptionFilter')
    @UseFilters(AaaFilter)
    useExceptionFilter(){
        throw new AaaException('aaa','bbb')
        return 111
    }
}
