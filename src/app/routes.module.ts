import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageHomeComponent }     from './front/page-home/page-home.component';
import { PageCategoryComponent } from './front/page-category/page-category.component';
import { PagePostComponent }     from './front/page-post/page-post.component';

const appRoutes: Routes = [
    {
        path: 'post/:page',
        component: PagePostComponent
    },
    {
        path: 'category/:name',
        component: PageCategoryComponent
    },
    {
        path: '',
        component: PageHomeComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
        
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}