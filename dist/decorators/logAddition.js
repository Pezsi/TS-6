export function LogAddition(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Adding item...`);
        return originalMethod.apply(this, args);
    };
}
