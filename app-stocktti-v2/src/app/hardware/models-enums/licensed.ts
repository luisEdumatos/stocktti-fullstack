interface Licensed {
  label: string,
  value: boolean
}

export class IsLicensed {
  options: Licensed[] = [
    {label: 'Sim', value: true},
    {label: 'Não', value: false}
  ];
}
