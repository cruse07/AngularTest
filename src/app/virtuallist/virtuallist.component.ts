import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeEvent } from 'angular-virtual-list';


export class UserModel {
  id: number;
  name?: string;
  contact?: string;
  address?:string;
}

@Component({
  selector: 'app-virtuallist',
  templateUrl: './virtuallist.component.html',
  styleUrls: ['./virtuallist.component.scss']
})
export class VirtuallistComponent implements OnInit {
  public items: Array<UserModel>=[];
  public scrollList: Array<UserModel>=[];
  protected items$ = new BehaviorSubject<UserModel[]>(null);
  protected buffer: UserModel[] = [];
  protected loading: boolean;
  startingItem:number;
  enditem:number;
  constructor() {
    this.setItem();
  }

  ngOnInit() {
  }
  protected fetchMore(event: ChangeEvent) {
    this.startingItem=event.start+1;
    this.enditem= event.end;
    console.log(event.start);
    console.log(event.end);
    if (event.end == this.buffer.length) 
    return;
    
}


  public setItem() {
    for (var i = 0; i <1000000; i++) {
      var item = new UserModel()
      item.id = i+1;
      item.name = "Name " + (i+1).toString();
      item.contact="+1 650-253-0000";
      item.address=(1600+i+1).toString()+" Amphitheatre Pkwy, Mountain View, CA 94043, United States";
      this.items.push(item);
    }
    this.items$.next(this.items)
    console.log(this.scrollList)
  }
}
