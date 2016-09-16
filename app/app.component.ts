import { Component } from '@angular/core';
import { NavBtn } from './navbtn.component';

@Component({
    selector: 'my-app',
    template: `
    <div class="main">
        <div class="row clearfix" id="uiselect1">
        <!--// UI SELECT FIRST INSTANCE START //-->
            <nav-btn></nav-btn>
         <div class="col col1">
         </div>
        <!--// UI SELECT FIRST INSTANCE END //-->

        <!--// UI SELECT SECOND INSTANCE START //-->
         <div class="col col2">

         </div>
         <!--// UI SELECT SECOND INSTANCE END //-->
        </div>
    </div>
    `,
    styleUrls: ['app/css/app.component.css']

})

export class AppComponent {

}
