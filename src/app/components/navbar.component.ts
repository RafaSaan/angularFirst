import { Component } from '@angular/core';
import { navList } from '../types/navbar';
import { NgFor, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'main-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [NgFor, RouterLink, RouterLinkActive, MatIconModule, NgStyle,]
})


export class Navbar {
  title = 'navbar';
  navList = navList;
}