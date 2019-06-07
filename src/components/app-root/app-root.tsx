import { Component, h } from "@stencil/core";
import "@stencil/router";
/*
https://colorlib.com/preview/theme/medcare/
file:///C:/Users/hello/OneDrive/Desktop/Projects/notes/templates/check/material-dashboard-master/examples/user.html
*/
@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
        <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/autho/:magic" component="login-page" exact={true}/>
                <stencil-route url="/doctor" component="admin-page" exact={true} />
                <stencil-route url="/welcome" component="welcome-page" exact={true} />
                <stencil-route url="/updateRecords/:number" component="update-records" exact={true} />
            </stencil-route-switch>
      </stencil-router>
    );
  }
}
