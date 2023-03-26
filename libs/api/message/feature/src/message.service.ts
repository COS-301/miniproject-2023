import {Injectable} from "@nestjs/common";
import {CommandBus} from "@nestjs/cqrs";
import {
  SendMessageCommand,
  ISendMessageRequest,
  ISendMessageResponse,
	IDeleteMessageRequest,
	DeleteMessageCommand,
	IDeleteMessageResponse
} from "@mp/api/message/util";

@Injectable()
export class MessageService {
  constructor(private readonly commandBus: CommandBus) {}

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
}
