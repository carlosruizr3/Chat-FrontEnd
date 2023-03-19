import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.page.html',
  styleUrls: ['./new-chat.page.scss'],
})
export class NewChatPage implements OnInit {

  users;
  constructor(private dummy: DummyService) {
    this.users = this.dummy.posts;
  }

  ngOnInit() {
  }

}
