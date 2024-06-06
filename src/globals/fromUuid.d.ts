declare global {
  const fromUuid: (
    uuid: string,
    options?: { relative?: foundry.abstract.Document; invalid?: boolean },
  ) => Promise<foundry.abstract.Document | null>;

  const fromUuidSync: (
    uuid: string,
    options?: { relative?: foundry.abstract.Document; invalid?: boolean; strict?: boolean },
  ) => foundry.abstract.Document | null;
}

export type {};
