interface IPersonalLocation{
  place: string,
  stabel: boolean,
  zipCode?: string,
  street?: string,
}

export class PersonLocation implements IPersonalLocation {
  constructor(
    public place: string,
    public stabel: boolean,
    public zipCode?: string,
    public street?: string,
  ) {}
}
