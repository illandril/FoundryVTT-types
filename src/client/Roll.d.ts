declare global {
  class Roll {
    constructor(formula: string);

    get total(): number;
    evaluate(options?: { async?: true; minimize?: boolean; maximize?: boolean }): Promise<Roll>;
    toMessage(
      messageData?: Parameters<typeof ChatMessage.create>[0],
      options?: {
        rollMode?: string;
        create?: boolean;
      },
    ): Promise<ChatMessage | object>;
  }
}

export type {};
