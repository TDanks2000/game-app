import { gamesStore } from '@/utils/stores/stores';

export interface GameStoreInfo {
  name: string;
  id: string;
  path: string;
  icon: string;
  command?: string;
  args?: string;
  lastPlayed?: Date;
}

export class GamesStore {
  readonly store = gamesStore;

  getAll = () => this.store.values<GameStoreInfo>();

  get = (id: string) => this.store.get<GameStoreInfo>(id);

  add = (game: GameStoreInfo) => this.store.set(game.id, game);

  remove = (id: string) => this.store.delete(id);

  update = (game: GameStoreInfo) => this.store.set(game.id, game);

  clear = () => this.store.clear();

  save = () => this.store.save();

  load = () => this.store.load();
}

const GameStoreHelper = new GamesStore();

export { GameStoreHelper };
