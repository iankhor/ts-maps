import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    const { companyName, catchPhrase } = faker.company;
    const { longitude, latitude } = faker.address;

    this.companyName = companyName();
    this.catchPhrase = catchPhrase();
    this.location = {
      lat: parseFloat(latitude()),
      lng: parseFloat(longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Compnay Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
