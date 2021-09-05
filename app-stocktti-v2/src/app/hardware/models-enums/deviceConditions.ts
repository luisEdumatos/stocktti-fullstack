interface Options {
  option: string,
  value: string
}

export class DeviceConditions {
  options: Options[] = [
    {option: 'Moderno', value: 'MODERNO'},
    {option: 'Meio Termo', value: 'MEIO_TERMO'},
    {option: 'Obsoleto', value: 'OBSOLETO'}
  ];
}
