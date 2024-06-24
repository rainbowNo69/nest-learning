import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    sayService(){
        return {
            msg:'postsService'
        }
    }
}
