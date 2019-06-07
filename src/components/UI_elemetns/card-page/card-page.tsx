import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'card-page', //
    styleUrl: 'card-page.css'
})
export class CardPage {
    @Prop() patients: any[] = [];    
    render() {
        return [
            <div class="main-panel">
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <a class="navbar-brand" href="#pablo">
                                Table
                            </a>
                        </div>
                        <div class="collapse navbar-collapse justify-content-end">
                            <form class="navbar-form">
                                <div class="input-group no-border">
                                    <input
                                        type="text"
                                        value=""
                                        class="form-control"
                                        placeholder="Search..."
                                    />
                                    <button
                                        type="submit"
                                        class="btn btn-white btn-round btn-just-icon"
                                    >
                                        <i class="material-icons">search</i>
                                        <div class="ripple-container" />
                                    </button>
                                </div>
                            </form>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="material-icons">dashboard</i>
                                        <p class="d-lg-none d-md-block">
                                            Stats
                                        </p>
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link"
                                        href="http://example.com"
                                        id="navbarDropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i class="material-icons">
                                            notifications
                                        </i>
                                        <span class="notification">5</span>
                                        <p class="d-lg-none d-md-block">
                                            Some Actions
                                        </p>
                                    </a>
                                    <div
                                        class="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <a class="dropdown-item" href="#">
                                            Mike John responded to your email
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            You have 5 new tasks
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            You're now friend with Andrew
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            Another Notification
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            Another One
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link"
                                        href="#pablo"
                                        id="navbarDropdownProfile"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i class="material-icons">person</i>
                                        <p class="d-lg-none d-md-block">
                                            Account
                                        </p>
                                    </a>
                                    <div
                                        class="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="navbarDropdownProfile"
                                    >
                                        <a class="dropdown-item" href="#">
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            Settings
                                        </a>
                                        <div class="dropdown-divider" />
                                        <a class="dropdown-item" href="#">
                                            Log out
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="content">
                    <div class="row">
                        {this.patients.map((patient) => (
                            <div class="col-md-4">
                                <div class="card card-chart">
                                    <div class="card-header">
                                        <div class="ct-chart">
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <a href= {`updateRecords/${patient.number}`} >{patient.name}
                                            
                                            </a>
                                        </h4>
                                        <p class="card-category">
                                            <span class="text-success">
                                                <i class="fa fa-long-arrow-up" />
                                                55%
                                            </span>
                                            
                                        </p>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <i class="material-icons">
                                                access_time
                                            </i>{' '}
                                            updated 4 minutes ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ];
    }
}
