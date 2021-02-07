export const enumerableDecorator = (
  target: any,
  propertyKey: string
  // descriptor: PropertyDescriptor
) => {
  console.log(target);
  console.log(propertyKey);
  // descriptor.enumerable = value;
};
