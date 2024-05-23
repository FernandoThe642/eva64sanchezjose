import { Routes } from '@angular/router';
import { Component } from '@angular/core';

import { TareasComponent } from './pages/tareas/tareas.component';

export const routes: Routes = [
    {path:'tareas', title:'Tareas', component:TareasComponent}

];
