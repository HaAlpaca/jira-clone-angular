import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { ReactiveFormsModule } from '@angular/forms';

const JiraControlComponents = [
  AvatarComponent,
  BreadcrumbsComponent,
  ButtonComponent,
  InputComponent,
  SvgIconComponent,
  SvgDefinitionsComponent,
];

@NgModule({
  declarations: [JiraControlComponents],
  exports: [JiraControlComponents],
  imports: [CommonModule, ReactiveFormsModule],
})
export class JiraControlModule {}
