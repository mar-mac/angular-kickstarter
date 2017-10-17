import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent   } from './components/public/home/home.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { SignInComponent } from './components/public/sign-in/sign-in.component';
import { SignOutComponent } from './components/public/sign-out/sign-out.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { PersonalinfoComponent } from './components/auth/personalinfo/personalinfo.component';
import { NotificationsComponent } from './components/auth/notifications/notifications.component';
import { MessagesComponent } from './components/auth/messages/messages.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent            },
  { path: 'signup',         component: SignUpComponent          },
  { path: 'signin',         component: SignInComponent          },
  { path: 'signout',        component: SignOutComponent         },
  { path: 'dashboard',      component: DashboardComponent       },
  { path: 'personalinfo',   component: PersonalinfoComponent    },
  { path: 'notifications',  component: NotificationsComponent   },
  { path: 'messages',       component: MessagesComponent        },
  { path: '**',             component: SignInComponent          }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
