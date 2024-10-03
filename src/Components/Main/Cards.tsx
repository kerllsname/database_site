import CardsByDepartmentComponent from './CardsByDepartment';
import CardsByParentComponent from './CardsByParent';
import CardsByTypeComponent from './CardsByType';
import { Organisation } from './MainComponent';

function ShowCards(props: {
  selectedValue: string;
  isSearchActive: boolean;
  initOrgs: Organisation[];
  updatedOrgs: Organisation[];
}) {
  if (props.isSearchActive) {
    if (props.selectedValue === 'type')
      return <CardsByTypeComponent orgs={props.updatedOrgs} />;
    else if (props.selectedValue === 'department')
      return <CardsByDepartmentComponent orgs={props.updatedOrgs} />;
    else if (props.selectedValue === 'parent')
      return (
        <CardsByParentComponent
          initOrgs={props.initOrgs}
          updatedOrgs={props.updatedOrgs}
          isSearchActive={props.isSearchActive}
        />
      );
  } else {
    if (props.selectedValue === 'type')
      return <CardsByTypeComponent orgs={props.initOrgs} />;
    else if (props.selectedValue === 'department')
      return <CardsByDepartmentComponent orgs={props.initOrgs} />;
    else if (props.selectedValue === 'parent')
      return (
        <CardsByParentComponent
          initOrgs={props.initOrgs}
          updatedOrgs={props.updatedOrgs}
          isSearchActive={props.isSearchActive}
        />
      );
  }
}

export default ShowCards;
