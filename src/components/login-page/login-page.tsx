import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import firebase from 'firebase';

@Component({
    tag: 'login-page',
    styleUrl: 'login-page.css'
})
export class AppHome {
    //@Prop() history: RouterHistory;
    @Prop() match: MatchResults;

    name1: string = 'Неправильная ссылка';
    password: string;

    catch1(event) {
        this.password = event.target.value;
    }
    containerOnClick(id: string, check: boolean) {
        let element = document.getElementById(id).childNodes[1] as HTMLElement;
        if (check) {
            element.style.borderBottom = '1px rgb(89, 152, 245)  inset';
        } else {
            element.style.borderBottom = '1px rgba(0, 0, 0, 0.2) inset';
        }
    }
    async componentWillLoad() {
        // Initialize Firebase
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

        var snapshot = await firebase
            .database()
            .ref(`/patients/${this.match.params.magic}/name`)
            .once('value');

        this.name1 = snapshot.toJSON().toString();
    }
    passData() {
        /*console.log(firebase.auth().createUserWithEmailAndPassword(`${this.match.params.magic}@gmail.com`, this.password).catch(function(error) {
            console.log(error)
          }));*/
    }
    render() {
        //        this.Firebaserun();
        return [
            <app-head />,
            <div class="notfixed">
                <div class="autho">
                    <div class="autho_login">
                        <div class="card_head"> Авторизация {this.name1}</div>

                        <div id="Password" class="input_item">
                            <label> Passowrd</label>
                            <input
                                class="input_text"
                                type="text"
                                value={this.password}
                                onFocus={() =>
                                    this.containerOnClick('Password', true)
                                }
                                onBlur={() =>
                                    this.containerOnClick('Password', false)
                                }
                                onChange={e => this.catch1(e)}
                            />
                        </div>
                        <div class="input_item">
                            <button
                                class="justButton"
                                onClick={() => this.passData()}
                            >
                                <a href="/welcome">Авторизация</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}
