import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, NavbarComponent } from './features/components/layout';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, ],
  template: `
  
  <div class="flex min-h-screen flex-col justify-between ">
<app-navbar></app-navbar>
<!-- <div class="w-11/12 mx-auto pt-12"> -->
<router-outlet></router-outlet>
<!-- </div> -->
<app-footer></app-footer>
</div>  
  
  `,
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

 cdr = inject(ChangeDetectorRef);

  x (){
    this.cdr.detectChanges()
  }
}
