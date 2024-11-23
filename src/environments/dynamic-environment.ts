declare var window: any;

export class DynamicEnvironment {

  public get clientRoot() {
    return window.config.clientRoot;
  }
  public get apiUrl() {
    return window.config.apiUrl;
  }

}
