import { DynamicEnvironment } from './dynamic-environment';

class Environment extends DynamicEnvironment {

  public appconfig="./assets/appsettings.testing.json";
  public production: boolean;
  constructor() {
    super();
    this.production = false;
  }
}

export const environment = new Environment();
