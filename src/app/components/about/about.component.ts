import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <section class="about view container">
      <h1>
        About Page
      </h1>
      <p >
        Has autem provincias, quas Orontes ambiens amnis
        imosque pedes Cassii montis illius celsi praetermeans
        funditur in Parthenium mare, Gnaeus Pompeius superato
        Tigrane regnis Armeniorum abstractas dicioni Romanae
        coniunxit.
      </p>
    </section>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
