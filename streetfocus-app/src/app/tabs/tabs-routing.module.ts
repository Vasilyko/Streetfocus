import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news/news.module').then(m => m.NewsPageModule)
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(m => m.ContactPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
