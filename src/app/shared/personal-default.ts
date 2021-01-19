interface IPersonalDefault{
  name: string,
  birthPlace?: string,
  birthDate?: Date,
  motherName?: string,
  job?: string
}

export class PersonalDefault implements IPersonalDefault{


  constructor(
    public name: string,
    public birthPlace: string,
    public birthDate: Date,
    public motherName: string,
    public job: string,){}

}
