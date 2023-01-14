class ClientPackage {

}

type ClientPackageMixin<T extends typeof foundry.packages.BasePackage> = {
  new (...args: unknown[]): ClientPackage & InstanceType<T>
} & T;

export const ModuleConstructor: ClientPackageMixin<typeof foundry.packages.BaseModule>;
export const SystemConstructor: ClientPackageMixin<typeof foundry.packages.BaseSystem>;
export const WorldConstructor: ClientPackageMixin<typeof foundry.packages.BaseWorld>;
