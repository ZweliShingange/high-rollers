import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from "@taiga-ui/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot],
  template: `<tui-root><router-outlet /></tui-root>`,
})
export class AppComponent {
  title = 'high-rollers';
}
