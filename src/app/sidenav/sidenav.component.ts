import { Component,  ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { getMatIconNoHttpProviderError } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {
@ViewChild(MatSidenav)
sidenav!:MatSidenav;
play:string="Play";
play1:string="Play1";
play2:string="Play2";
videodisabled:boolean = true;
videodisabled1:boolean = true;
videodisabled2:boolean = true;
constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  myimage:string="assets/logo.png";
video(){
  if(this.play=="Play")
  {
    this.play="Pause",
    this.videodisabled=false
    this.videodisabled1=true
    this.videodisabled2=true

  }
  else
  {

    this.play = "Play",
    this.videodisabled = false
    this.videodisabled1=true
    this.videodisabled2=true
  }

}
video1(){
  if(this.play1=="Play1")
  {
    this.play1="Pause",
    this.videodisabled1=false
    this.videodisabled=true
    this.videodisabled2=true

  }
  else
  {

    this.play1 = "Play1",
    this.videodisabled1 = false
    this.videodisabled=true
    this.videodisabled2=true
  }
}
video2(){
  if(this.play2=="Play2")
  {
    this.play2="Pause",
    this.videodisabled2=false
    this.videodisabled=true
    this.videodisabled1=true


  }
  else
  {

    this.play2 = "Play2",
    this.videodisabled2 = false
    this.videodisabled=true
    this.videodisabled1=true
  }
}
}
