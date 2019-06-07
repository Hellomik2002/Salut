/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  SideBar,
} from './models/admin-models/sidebarModel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {
  interface AdminPage {
    'current_item': number;
    'nav_items': SideBar[];
  }
  interface AppHead {}
  interface AppHome {}
  interface AppRoot {}
  interface CardPage {
    'patients': any[];
  }
  interface IconPage {}
  interface LoginPage {
    'match': MatchResults;
  }
  interface UpdateRecords {
    'match': MatchResults;
  }
  interface WelcomePage {}
}

declare global {


  interface HTMLAdminPageElement extends Components.AdminPage, HTMLStencilElement {}
  var HTMLAdminPageElement: {
    prototype: HTMLAdminPageElement;
    new (): HTMLAdminPageElement;
  };

  interface HTMLAppHeadElement extends Components.AppHead, HTMLStencilElement {}
  var HTMLAppHeadElement: {
    prototype: HTMLAppHeadElement;
    new (): HTMLAppHeadElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCardPageElement extends Components.CardPage, HTMLStencilElement {}
  var HTMLCardPageElement: {
    prototype: HTMLCardPageElement;
    new (): HTMLCardPageElement;
  };

  interface HTMLIconPageElement extends Components.IconPage, HTMLStencilElement {}
  var HTMLIconPageElement: {
    prototype: HTMLIconPageElement;
    new (): HTMLIconPageElement;
  };

  interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {}
  var HTMLLoginPageElement: {
    prototype: HTMLLoginPageElement;
    new (): HTMLLoginPageElement;
  };

  interface HTMLUpdateRecordsElement extends Components.UpdateRecords, HTMLStencilElement {}
  var HTMLUpdateRecordsElement: {
    prototype: HTMLUpdateRecordsElement;
    new (): HTMLUpdateRecordsElement;
  };

  interface HTMLWelcomePageElement extends Components.WelcomePage, HTMLStencilElement {}
  var HTMLWelcomePageElement: {
    prototype: HTMLWelcomePageElement;
    new (): HTMLWelcomePageElement;
  };
  interface HTMLElementTagNameMap {
    'admin-page': HTMLAdminPageElement;
    'app-head': HTMLAppHeadElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'card-page': HTMLCardPageElement;
    'icon-page': HTMLIconPageElement;
    'login-page': HTMLLoginPageElement;
    'update-records': HTMLUpdateRecordsElement;
    'welcome-page': HTMLWelcomePageElement;
  }
}

declare namespace LocalJSX {
  interface AdminPage extends JSXBase.HTMLAttributes<HTMLAdminPageElement> {
    'current_item'?: number;
    'nav_items'?: SideBar[];
  }
  interface AppHead extends JSXBase.HTMLAttributes<HTMLAppHeadElement> {}
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface CardPage extends JSXBase.HTMLAttributes<HTMLCardPageElement> {
    'patients'?: any[];
  }
  interface IconPage extends JSXBase.HTMLAttributes<HTMLIconPageElement> {}
  interface LoginPage extends JSXBase.HTMLAttributes<HTMLLoginPageElement> {
    'match'?: MatchResults;
  }
  interface UpdateRecords extends JSXBase.HTMLAttributes<HTMLUpdateRecordsElement> {
    'match'?: MatchResults;
  }
  interface WelcomePage extends JSXBase.HTMLAttributes<HTMLWelcomePageElement> {}

  interface IntrinsicElements {
    'admin-page': AdminPage;
    'app-head': AppHead;
    'app-home': AppHome;
    'app-root': AppRoot;
    'card-page': CardPage;
    'icon-page': IconPage;
    'login-page': LoginPage;
    'update-records': UpdateRecords;
    'welcome-page': WelcomePage;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

