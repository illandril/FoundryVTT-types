declare global {
  class TokenLayer extends PlaceablesLayer<Token> {
    get ownedTokens(): Token[];
    get hud(): foundry.applications.hud.TokenHUD;
  }
}

export type {};
