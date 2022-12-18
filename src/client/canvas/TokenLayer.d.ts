declare global {
  class TokenLayer extends PlaceablesLayer<Token> {
    get ownedTokens(): Token[];
  }
}

export {};
