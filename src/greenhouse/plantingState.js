export class PlantingState {
    static Unknown = new PlantingState('unknown');
    static Active = new PlantingState('active');
    static Inactive = new PlantingState('inactive');
  
    constructor(name) {
      this.name = name;
    }
  }
  