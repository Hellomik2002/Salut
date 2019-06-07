import { Component, h, Prop } from '@stencil/core';
import firebase from 'firebase';
import { MatchResults } from '@stencil/router';
import 'webcomponent-qr-code'

@Component({
    tag: 'update-records',
    styleUrl: 'update-records.css'
})
export class UpdateRecords {
    @Prop() match: MatchResults;
    patients: any[] = [];
    comments: string;
    height: number;
    weight: number;
    async componentWillLoad() {
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
        console.log(this.match.params.number);
        var snapshot = await firebase
            .database()
            .ref(`/patients/${this.match.params.number}/records`)
            .once('value');

        var patients = snapshot.toJSON();
        for (let every in patients) {
            this.patients.push(patients[every]);
        }
    }
    containerOnClick(id: string, check: boolean) {
        let element = document.getElementById(id).childNodes[1] as HTMLElement;
        if (check) {
            element.style.borderBottom = '1px rgb(89, 152, 245)  inset';
        } else {
            element.style.borderBottom = '1px rgba(0, 0, 0, 0.2) inset';
        }
    }
    passData() {
        var len = this.patients.length;
        firebase
            .database()
            .ref(`/patients/${this.match.params.number}/records/${len}`)
            .set(
                {
                    comment: this.comments,
                    date: new Date().toISOString(),
                    height: this.height,
                    weight: this.weight
                }
            );
    }
    commentsChange(event) {
        this.comments = event.target.value;
    }
    heightChange(event) {
        this.height = event.target.value;
    }
    weightChange(event) {
        this.weight = event.target.value;
    }
    render() {
        return [
            this.patients.map(record => (
                <div class="col-md-4">
                    <div class="card card-chart">
                        <div class="card-header">
                            <div class="ct-chart">
                                <qr-code data={`https://209.182.216.197/autho/${this.match.params.number}`} />
                            </div>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{record.date}</h4>
                            <p class="card-category">
                                <span class="text-success">
                                    <i class="fa fa-long-arrow-up" />
                                    {record.comment}
                                </span>
                                <br />
                                {record.height} <br />
                                {record.weight}
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="stats">
                                <i class="material-icons">access_time</i>{' '}
                                {this.match.params.number}
                            </div>
                        </div>
                    </div>
                </div>
            )),
            <div class="autho">
                <div class="autho_login">
                    <div class="card_head"> Добавить запись</div>

                    <div id="Password" class="input_item">
                        <label> Коментайри</label>
                        <input
                            class="input_text"
                            type="text"
                            onFocus={() =>
                                this.containerOnClick('Password', true)
                            }
                            onBlur={() =>
                                this.containerOnClick('Password', false)
                            }
                            onChange={event => this.commentsChange(event)}
                        />
                    </div>
                    <div id="height" class="input_item">
                        <label> Рост</label>
                        <input
                            class="input_text"
                            type="text"
                            onFocus={() =>
                                this.containerOnClick('height', true)
                            }
                            onBlur={() =>
                                this.containerOnClick('height', false)
                            }
                            onChange={event => this.heightChange(event)}
                        />
                    </div>
                    <div id="weight" class="input_item">
                        <label> Вес</label>
                        <input
                            class="input_text"
                            type="text"
                            onFocus={() =>
                                this.containerOnClick('weight', true)
                            }
                            onBlur={() =>
                                this.containerOnClick('weight', false)
                            }
                            onChange={event => this.weightChange(event)}
                        />
                    </div>
                    <div class="input_item">
                        <button
                            class="justButton"
                            onClick={() => this.passData()}
                        >
                            <a href="/doctor">Авторизация</a>
                        </button>
                    </div>
                </div>
            </div>
        ];
    }
}
