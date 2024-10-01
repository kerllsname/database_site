import { NativeSelect } from '@mantine/core';
import { useState } from 'react';

function InputSelect() {
  const [selectedValue, setValue] = useState('');

  return (
    <NativeSelect
      value={selectedValue}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={['По типу', 'По организационной структуре', 'По подчинению']}
      w={300}
      radius={10}
    />
  );
}

export default InputSelect;
