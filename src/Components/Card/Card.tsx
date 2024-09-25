import { Card, Text } from '@mantine/core';

function OrgCard(props: { org_name: string; org_type: string }) {
  return (
    <Card w={400} h={150}>
      <Text fw={600}>{props.org_name}</Text>
      <Text c="dimmed" size="small">
        {props.org_type}
      </Text>
    </Card>
  );
}

export default OrgCard;
