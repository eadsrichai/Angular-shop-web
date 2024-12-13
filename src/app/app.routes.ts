import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { FoodSizeComponent } from './food-size/food-size.component';
import { TasteComponent } from './taste/taste.component';

export const routes: Routes = [
    {
        path: '',
        component: SignInComponent,
    },
    {
        path: 'foodtype',
        component: FoodTypeComponent,
    },
    {
        path: 'foodSize',
        component: FoodSizeComponent,
    },
    {
        path: 'taste',
        component: TasteComponent
    }
];
