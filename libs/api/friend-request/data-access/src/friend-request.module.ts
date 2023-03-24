import {Module}  from '@nestjs/common'; 
import { FriendRequestRepository } from './friend-request.repository';   

@Module( { 

    providers : [FriendRequestRepository], 
    exports: [FriendRequestRepository],
})

export class FriendRequestModule{};