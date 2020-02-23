import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeEvent } from 'angular-virtual-list';


export class UserModel {
  id: number;
  name?: string;
  age?: number;
}

@Component({
  selector: 'app-virtuallist',
  templateUrl: './virtuallist.component.html',
  styleUrls: ['./virtuallist.component.scss']
})
export class VirtuallistComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  
  @ViewChild('theader') head:ElementRef;

  @Input()
  public items: Array<UserModel>=[];
  public scrollList: Array<UserModel>=[];
  protected items$ = new BehaviorSubject<UserModel[]>(null);
  protected buffer: UserModel[] = [];
  protected loading: boolean;
  constructor() {
    this.setItem();
  }

  ngOnInit() {
  }
  // ngAfterContentInit(){
  //   var itemPerView = (this.head.nativeElement.scrollHeight/20);
  //   this.scrollList= this.items.splice(0, itemPerView);
  //   console.log(this.scrollList);
  // }
  protected fetchMore(event: ChangeEvent) {
    if (event.end !== this.buffer.length) return;
    this.loading = true;
    // this.fetchNextChunk(this.buffer.length, 5).then(chunk => {
    //   this.buffer = this.buffer.concat(chunk);
    //   this.items$.next(this.buffer);
    //   this.loading = false;
    // }, () => this.loading = false);
  }


  protected fetchNextChunk(skip: number, limit: number): Promise<UserModel[]> {
    return new Promise((resolve, reject) => {

    });
  }
  
  public setItem() {
    for (var i = 0; i <= 100000; i++) {
      var item = new UserModel()
      item.id = i+1;
      item.name = "Name " + (i+1).toString();
      item.age=1.5*(i+1);
      this.items.push(item);
     // this.scrollList.push(item)
      // this.buffer.push(item)
    }
    this.items$.next(this.items)
    console.log(this.scrollList)
  }
}
