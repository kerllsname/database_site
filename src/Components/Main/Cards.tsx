import CardsByDepartmentComponent from './CardsByDepartment';
import CardsByTypeComponent from './CardsByType';
import { Organisation } from './MainComponent';

function ShowCards(props: { selectedValue: string; data: Organisation[] }) {
  if (props.selectedValue === 'type')
    return <CardsByTypeComponent orgs={props.data} />;
  else if (props.selectedValue === 'department')
    return <CardsByDepartmentComponent orgs={props.data} />;
}

export default ShowCards;
