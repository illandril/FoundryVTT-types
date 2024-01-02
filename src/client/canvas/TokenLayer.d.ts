declare global {
  class TokenLayer extends PlaceablesLayer<Token> {
    get ownedTokens(): Token[];
    get hud(): TokenHUD;
  }
}

export {};
