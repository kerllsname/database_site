import { NativeSelect } from '@mantine/core';

function InputSelect(props: { handleChange: (value: string) => void }) {
  return (
    <NativeSelect
      defaultValue="type"
      onChange={(event) => props.handleChange(event.currentTarget.value)}
      data={[
        { label: 'По типу', value: 'type' },
        { label: 'По отделению', value: 'department' },
        { label: 'По подчинению', value: 'own' },
      ]}
      w={300}
      radius={10}
    />
  );
}

export default InputSelect;
