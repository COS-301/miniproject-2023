import {Injectable} from "@nestjs/common";
import {CommandBus} from "@nestjs/cqrs";
import {
  SendMessageCommand,
  ISendMessageRequest,
  ISendMessageResponse,
	IDeleteMessageRequest,
	DeleteMessageCommand,
	IDeleteMessageResponse,
	ICreateConversationRequest,
	ICreateConversationResponse,
	CreateConversationCommand
} from "@mp/api/message/util";

import {AuthService} from 'libs/api/auth/feature/src/auth.service'

@Injectable()
export class MessageService {
  currentUserID: string = '';
  constructor(private readonly commandBus: CommandBus, public auth: AuthService) {
    
  }

  async sendMessage(
    request: ISendMessageRequest
  ): Promise<ISendMessageResponse> {
    return await this.commandBus.execute<
      SendMessageCommand,
      ISendMessageResponse
    >(new SendMessageCommand(request));
  }

  async deleteMessage(
    request: IDeleteMessageRequest
  ): Promise<IDeleteMessageResponse> {
    return await this.commandBus.execute<
      DeleteMessageCommand,
      IDeleteMessageResponse
    >(new DeleteMessageCommand(request));
  }

  async createConversation(
    request: ICreateConversationRequest
  ): Promise<ICreateConversationResponse> {
    return await this.commandBus.execute<
    CreateConversationCommand,
    ICreateConversationResponse
   >(new CreateConversationCommand(request));
  }

  getID(){
    this.currentUserID = this.auth.getId();
  }
}

