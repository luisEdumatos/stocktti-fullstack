interface Types {
  option: string,
  value: string
}

export class DeviceTypes {
  options: Types[] = [
    {option: 'Desktop', value: 'DESKTOP'},
    {option: 'Notebook', value: 'NOTEBOOK'}
  ];
}
