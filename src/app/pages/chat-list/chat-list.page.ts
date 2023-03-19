import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SocketService } from '../chat/socket.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  public user_id1:any;
  public user_id2:any;
  //users;
  plt;
  public users: any;

  constructor( public dummy: DummyService, private router: Router, private userService: UserService, private socketService: SocketService) {

    this.plt = localStorage.getItem('platform');
    this.users = this.dummy.posts;
  }

  ngOnInit() {
    this.findUser();
    //this.findRoom();
  }


  async findUser() {
    const query: any = await this.userService.findUser();
    console.log(query.data)
    this.users = query.data;
  }

  async findRoom() {
    this.user_id1 = localStorage.getItem('user_id1')
    console.log(this.user_id1)

    this.user_id2 = localStorage.getItem('user_id2')
    console.log(this.user_id2)

    const query: any = await this.userService.findRoom(this.user_id1,this.user_id2);
    console.log(query.data) 
  }

  //async findUser() {
  //  const query: any = await this.userService.findUser();
  //  console.log(query.data)
  //  const user_id =query.data.user_id
  //  localStorage.getItem('user_id')
  //  const queryUser = this.users.filter((user:any) => user.id === this.users.id );
  //}

  //async update(id: any) {
  //  console.log("ID", id)
  //  this.router.navigate(['admin/list_about/update_about', id]);
  //}

  //async eliminar(id: any) {
  //  const query: any = await this.userService.eliminarAbouts(id);
  //  console.log(query);
  //}

  openProfileModel() {
    this.router.navigate(['/profile']);
  }

  goToNewChat() {
    this.router.navigate(['/new-chat']);
  }

  goToChats(user_id:number) {
    this.user_id2 = user_id;
    localStorage.setItem('user_id2', this.user_id2.toString());  
    this.findRoom()
    this.router.navigate(['/chat']);
  }

  handleSubmit(name: string) {
    const state = { name: name };
    this.router.navigate(['/chat'], { state: state });

  }
}