import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  content: string = "";
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.content = this.content = `
    <div style="width: 300px; padding:1rem 2rem;color:blue;background-color:black">
    <h1>${this.name}</h1>
    <p style="font-size:1.5rem;color:orange">Hello I'am the User component</p>
  </div>  
    `;
  }
}
