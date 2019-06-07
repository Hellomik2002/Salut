import { Component, h } from '@stencil/core';
import firebase from 'firebase';

@Component({
    tag: 'icon-page', //
    styleUrl: 'icon-page.css'
})
export class IconPage {
    number: number;
    diseaseType: string;
    name_of_Center: string;
    name: string;
    count: number;
    interval: number;
    containerOnClick(id: string, check: boolean) {
        let element = document.getElementById(id).childNodes[1] as HTMLElement;
        if (check) {
            element.style.borderBottom = '1px rgb(89, 152, 245)  inset';
        } else {
            element.style.borderBottom = '1px rgba(0, 0, 0, 0.2) inset';
        }
    }
    componentWillLoad() {
        let firebaseConfig = {
            apiKey: 'AIzaSyCV48OcTKbWAOQbv_SwWtxPB-5jbzPLCF0',
            authDomain: 'health-app-eac80.firebaseapp.com',
            databaseURL: 'https://health-app-eac80.firebaseio.com',
            projectId: 'health-app-eac80',
            storageBucket: 'health-app-eac80.appspot.com',
            messagingSenderId: '1050188285371',
            appId: '1:1050188285371:web:a00af4adfd069624'
        };
		
        firebase.initializeApp(firebaseConfig);
    }
    postData() {
		
		console.log({
			cloudMessagingId: -1,
			diseaseType: this.diseaseType,
			hospital: {
				name: this.name_of_Center,
				position: { latitude: 100, longitude: -100 }
			},
			name: this.name,
			records: {
				0: {
					comment: 'Без',
					date: (new Date()).toString(),
					height: 186,
					weight: 78
				}
			},
			telegramId: -1,
			timing: {
				count: this.count,
				interval: this.interval,
				startTime: (new Date().getSeconds()).toString()
			},
			vkId: -1
		})
        firebase
            .database()
            .ref('/patients/' + this.number)
            .set({
                cloudMessagingId: -1,
                diseaseType: this.diseaseType,
                hospital: {
                    name: this.name_of_Center,
                    position: { latitude: 100, longitude: -100 }
                },
                name: this.name,
                records: {
                    0: {
                        comment: 'Без',
                        date: new Date(),
                        height: 186,
                        weight: 78
                    }
                },
                telegramId: -1,
                timing: {
                    count: this.count,
                    interval: this.interval,
                    startTime: new Date().getSeconds()
                },
                vkId: -1
			});
			
			
    }
    //number
    NumberChange(event) {
        this.number = event.target.value;
    }
    //diseaseType
    diseaseTypeChange(event) {
        this.diseaseType = event.target.value;
    }
    //name_of_Center
    name_of_CenterChange(event) {
		this.name_of_Center = event.target.value;
		//console.log(event);
    }    
    //this.name
	nameChange(event) {
		this.name = event.target.value;
		//console.log(this.name)
    }
	//this.count
	timing_countsChange(event){
		this.count = event.target.value;
	}
	timing_inatvalChange(event){
		this.interval = event.target.value;
	}
    //this.interval
    render(): HTMLElement[] {
        return [
            <div class="main-panel">
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <a class="navbar-brand" href="#pablo">
                                Добавить пациента
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
                    <div class="container-fluid">
                        <div class="autho">
                            <div class="autho_login">
                                <div class="card_head"> Регистрация</div>
                                {/* */}
                                <div id="Number" class="input_item">
                                    <label> Number</label>
                                    <input
                                        class="input_text"
                                        type="text"
                                        onFocus={() =>
                                            this.containerOnClick(
                                                'Number',
                                                true
                                            )
                                        }
                                        onBlur={() =>
                                            this.containerOnClick(
                                                'Number',
                                                false
                                            )
                                        }
                                        onChange={event =>
                                            this.NumberChange(event)
                                        }
                                    />
                                </div>
                                <div id="diseaseType" class="input_item">
                                    <label> Disease Type</label>
                                    <input
                                        class="input_text"
                                        type="text"
                                        onFocus={() =>
                                            this.containerOnClick(
                                                'diseaseType',
                                                true
                                            )
                                        }
                                        onBlur={() =>
                                            this.containerOnClick(
                                                'diseaseType',
                                                false
                                            )
                                        }
                                        onChange={event =>
                                            this.diseaseTypeChange(event)
                                        }
                                    />
                                </div>
                                <div id="nameofCenter" class="input_item">
                                    <label> Name of Center</label>
                                    <input
                                        class="input_text"
                                        type="text"
                                        onFocus={() =>
                                            this.containerOnClick(
                                                'nameofCenter',
                                                true
                                            )
                                        }
                                        onBlur={() =>
                                            this.containerOnClick(
                                                'nameofCenter',
                                                false
                                            )
                                        }
                                        onChange={event =>
                                            this.name_of_CenterChange(event)
                                        }
                                    />
                                </div>
                                <div id="name" class="input_item">
                                    <label> name</label>
                                    <input
                                        class="input_text"
                                        type="text"
                                        onFocus={() =>
                                            this.containerOnClick('name', true)
                                        }
                                        onBlur={() =>
                                            this.containerOnClick('name', false)
                                        }
                                        onChange={event =>
                                            this.nameChange(event)
                                        }
                                    />
                                </div>
                                <div id="timing_counts" class="input_item">
                                    <label> Timing counts</label>
                                    <input
                                        class="input_text"
                                        type="text"
                                        onFocus={() =>
                                            this.containerOnClick(
                                                'timing_counts',
                                                true
                                            )
                                        }
                                        onBlur={() =>
                                            this.containerOnClick(
                                                'timing_counts',
                                                false
                                            )
										}
										onChange={event =>
                                            this.timing_countsChange(event)
                                        }
                                    />
                                </div>
                                <div id="timing_inatval" class="input_item">
                                    <label> Timing inatval</label>
                                    <input
                                        class="input_text"
                                        type="text"
                                        onFocus={() =>
                                            this.containerOnClick(
                                                'timing_inatval',
                                                true
                                            )
                                        }
                                        onBlur={() =>
                                            this.containerOnClick(
                                                'timing_inatval',
                                                false
                                            )
										}
										onChange={event =>
                                            this.timing_inatvalChange(event)
                                        }
                                    />
                                </div>

                                <div class="input_item">
                                    <button class = "justButton"onClick={()=>this.postData()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}
