export const getEnumType = (typeName: string) => {
  // It is possible that the type name is a julia type with the modules, in the
  //   typescript world these modules do not exist
  let _elts = typeName.split(".");
  typeName = _elts[_elts.length - 1];

  switch (typeName) {
    default:
      throw new Error(`Unknown type[${typeName}]`);
  }
};
