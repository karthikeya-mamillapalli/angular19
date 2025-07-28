import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { StyleBindingComponent } from "./components/style-binding/style-binding.component";
import { ClassBindingComponent } from "./components/class-binding/class-binding.component";
import { EventBindingComponent } from "./components/event-binding/event-binding.component";
import { TempRefVariablesComponent } from "./components/temp-ref-variables/temp-ref-variables.component";
import { TwoWayDataBindingComponent } from "./components/two-way-data-binding/two-way-data-binding.component";
import { IfComponent } from "./components/if/if.component";
import { SwitchComponent } from "./components/switch/switch.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, InterpolationComponent, PropertyBindingComponent, StyleBindingComponent, ClassBindingComponent, EventBindingComponent, TempRefVariablesComponent, TwoWayDataBindingComponent, IfComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_19';
}
