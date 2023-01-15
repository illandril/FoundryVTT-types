declare global {
  namespace foundry {
    namespace CONST {
      const USER_ROLES: {
        NONE: number
        PLAYER: number
        TRUSTED: number
        ASSISTANT: number
        GAMEMASTER: number
      };
    }
  }
}

export {};
