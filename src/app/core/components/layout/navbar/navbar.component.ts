
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FlowbiteService } from '../../../services/flowbite/flowbite.service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
  private platformId = inject(PLATFORM_ID);
   constructor(private flowbiteService: FlowbiteService,public authService:AuthService) {}

  ngOnInit(): void {
   this.authService.userdata.subscribe(data =>{

if(data !=null){

this.isLogin = true;


}
else{
this.isLogin = false ;


}



   })
   if(isPlatformBrowser(this.platformId)){
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
   }
  }
   
}
