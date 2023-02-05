declare global {
  namespace foundry {
    namespace documents {
      class BaseUser extends foundry.abstract.Document {
        get isGM(): boolean;
        get name(): string;
        get character(): foundry.documents.BaseActor | null;
        get avatar(): string;

        hasRole(role: string | number, options?: { exact?: boolean }): boolean;
      }
    }
  }
}

export {};
