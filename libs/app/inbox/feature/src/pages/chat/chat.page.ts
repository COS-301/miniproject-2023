import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPageComponent implements OnInit {
  name = 'Sender';
  message!: string;
  isLoading = false;
  currentUserId = 1;
  chats = [
    { id: 1, sender: 1, message: 'hi' },
    { id: 2, sender: 2, message: 'hey' }
  ];

  constructor() {
    // do nothing.
  }

  ngOnInit() {
    console.log('');
  }

  sendMessage() {
    // do nothing.
  }
}
