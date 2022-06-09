import Block from '../block';
import Route from './route';
import { requestAutchUser } from '../../actions/auth';
import { RoutePath } from './route-path';
import { getChatsRequest } from '../../actions/chat';
import { getUser } from '../../actions/user';

export default class Router {
  private static __instance: Router;
  public routes: Route[] = [];
  public history: History = window.history;
  private _currentRoute: Route | null = null;
  private _rootQuery = '.root';

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this._rootQuery = rootQuery;
    Router.__instance = this;
  }

  public use(pathname: string, block: () => Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);

    return this;
  }

  public start() {
    //Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = (event) => {
      const target = event?.currentTarget as Window;
      this._onRoute(target.location.pathname);
      getActions(target.location.pathname);
    };
    this._onRoute(window.location.pathname);
    requestAutchUser();
    getActions(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    getActions(pathname);

    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  public getRoute(pathname: string) {
    return this.routes.find((route: Route) => route.match(pathname));
  }
}

const getActions = (pathname: string) => {
  switch (pathname) {
    case RoutePath.CHAT:
      getChatsRequest();
      break;
    case RoutePath.PROFILE:
      getUser();
      break;
    default:
      break;
  }
};
