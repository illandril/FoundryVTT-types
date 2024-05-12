# @illandril/foundryvtt-types
![Version](https://img.shields.io/github/package-json/v/illandril/FoundryVTT-types)
[![CI](https://github.com/illandril/FoundryVTT-types/actions/workflows/push-pull-request.yml/badge.svg)](https://github.com/illandril/FoundryVTT-types/actions/workflows/push-pull-request.yml)

A subset of FoundryVTT typescript definitions used by Joe Spandrusyszyn ("illandril") in his FoundryVTT modules.

Note: FoundryVTT actually uses `pixi.js` 7.2.4 (as of Foundry 11.315), but that version of `pixi.js` has a type issue (https://github.com/pixijs/pixijs/pull/10337). If you reference any of the Pixi components, be careful not to reference anything that was added between 7.2.4 and 7.4.2, as it won't actually be available in Foundry but type checking won't catch the error.