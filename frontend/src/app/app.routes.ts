import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { EntryComponent } from './entry-component/entry-component';
import { DetailComponent } from './detail-component/detail-component';
import { EditComponent } from './edit-component/edit-component';
import { InfoComponent } from './info-component/info-component';
import { NewComponent } from './new-component/new-component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home - REQS"
    },
    {
        path: "info",
        component: InfoComponent,
        title: "Informationen - REQS"
    },
    {
        path: "entry",
        component: EntryComponent,
        title: "Einträge - REQS"
    },
    {
        path: "new",
        component: NewComponent,
        title: "Neuer Eintrag - REQS"
    },
    {
        path: "detail/:id",
        component: DetailComponent,
        title: "Eintrag Detailansicht - REQS"
    },
    {
        path: "edit/:id",
        component: EditComponent,
        title: "Eintrag bearbeiten - REQS"
    }
];