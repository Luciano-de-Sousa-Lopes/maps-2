import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  content: string = "";
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    (this.name = faker.company.name()),
      (this.catchPhrase = faker.company.catchPhrase()),
      (this.location = {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      });
    this.content = `
        <div style="width: 300px; padding:1rem 2rem;color:blue;background-color:black">
        <h1>${this.name}</h1>
        <h2 style="color:red">${this.catchPhrase}</h2>
        <p  style="font-size:1.5rem;color:orange">Hello I'am the Company component</p>
      </div>  
        `;
  }
}
