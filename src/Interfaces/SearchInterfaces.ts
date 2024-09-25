import { Organisation } from '../Components/Main/MainComponent';

export interface initStoreOrgs {
  initOrgs: {
    initOrgs: Organisation[];
  };
}

export interface updatedStoreOrgs {
  updatedOrgs: {
    updatedOrgs: Organisation[];
  };
}
