import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MenubindService } from 'src/app/services/menubind.service';
import { LogoutserviceService } from 'src/app/services/logout/logoutservice.service';
import { Emitters } from 'src/app/emitterss/emitter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
 
  mobileQuery: MediaQueryList;


  // fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from(
  //   {length: 50},
  //   () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  // );

  private _mobileQueryListener: () => void;
  fillerNav:any[]=[];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private menu :MenubindService,private logout:LogoutserviceService,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.menu.getMenuData().subscribe(
      (result: any) => {
        console.log('Data retrieved:', result);
        result.forEach((element:any) => {
          this.fillerNav.push(element)
        });
       
      },
      (error) => {
        console.error('Data retrieval error:', error);
      }
    );
  }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  logoutevent(){
    
    this.logout.Getlogoutdata().subscribe((result)=>{
      console.log(result)
     Emitters.authEmitter.emit(false)
     localStorage.removeItem('authenticated');
     localStorage.removeItem('role');


    this.router.navigate(['home']);
    },
    (error)=>{
console.log(error)
    })
    
   }
  
  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}

