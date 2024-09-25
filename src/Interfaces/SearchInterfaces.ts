import { Organisations } from '../Components/Main/MainComponent';

export interface initStoreOrgs {
  initOrgs: {
    initOrgs: Organisations[];
  };
}

export interface updatedStoreOrgs {
  updatedOrgs: {
    updatedOrgs: Organisations[];
  };
}
