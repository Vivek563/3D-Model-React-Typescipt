declare module "*.jsx" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any; // You can use 'any' if you don't know the specific type
  export default value;
}
