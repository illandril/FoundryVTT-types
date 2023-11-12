declare global {
  namespace foundry {
    namespace documents {
      type BaseUserFields = {
        isGM: boolean
        name: string
        avatar: string
      };

      class BaseUser extends foundry.abstract.Document {
        get isGM(): BaseUserFields['isGM'];
        get name(): BaseUserFields['name'];
        get character(): foundry.documents.BaseActor | null;
        get avatar(): BaseUserFields['avatar'];

        hasRole(role: string | number, options?: { exact?: boolean }): boolean;
      }
    }
  }
}

export {};
