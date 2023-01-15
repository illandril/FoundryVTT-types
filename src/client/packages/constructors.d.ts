type ClientPackage = {
  install: () => void
  uninstall: () => void
};

type ClientPackageMixin<T extends typeof foundry.packages.BasePackage> = T & Pick<ClientPackage, keyof ClientPackage>;

export const ModuleConstructor: ClientPackageMixin<typeof foundry.packages.BaseModule>;
export const SystemConstructor: ClientPackageMixin<typeof foundry.packages.BaseSystem>;
export const WorldConstructor: ClientPackageMixin<typeof foundry.packages.BaseWorld>;
