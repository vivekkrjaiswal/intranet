import { NgModule } from '@angular/core';

import { IntranetSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IntranetSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IntranetSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IntranetSharedCommonModule {}
