export function LogAddition(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Adding item...`);
      return originalMethod.apply(this, args);
    };
  }
  