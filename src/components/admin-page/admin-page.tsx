import { Component, h, Prop } from '@stencil/core';
import { SideBar } from '../../models/admin-models/sidebarModel';

import firebase from 'firebase';


@Component({
    tag: 'admin-page', //NOTE
    styleUrl: 'admin-page.css'
})
export class AdminPage {
    @Prop() nav_items: SideBar[] = [
        new SideBar(
            'content_paste',
            'Количество пациентов',            
            <card-page></card-page>
        ),
        new SideBar(
            'library_books',
            'Добавит пациента',           
            <icon-page></icon-page>
        )
	];	
    @Prop() current_item: number = 0;
	patients: any[] = [];

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

        var snapshot = await firebase
            .database()
            .ref(`/patients/`)
            .once('value');

        var patients = snapshot.toJSON();

        var all = [];

        for (var element1 in patients) {
            patients[element1]['number'] = element1
            all.push(patients[element1]);
        }
        console.log(all);
		this.patients = all;
		this.nav_items[0].htmlElements = <card-page patients = {all}></card-page>
    }
    changeCurrentItem(index: number) {
		
		this.current_item = index;	
    }
    render() {
        return [
            <div class="wrapper ">
                <div
                    class="sidebar"
                    data-color="purple"
                    data-background-color="white"
                    data-image="../assets/img/sidebar-1.jpg"
                >
                    <div class="logo">
                        <a
                            href="http://www.creative-tim.com"
                            class="simple-text logo-normal"
                        >
                            Creative Tim
                        </a>
                    </div>
                    <div class="sidebar-wrapper">
                        <ul class="nav">
                            {this.nav_items.map((nav_item, index) => (
                                <li
                                    class={
                                        'nav-item ' +
                                        (this.current_item == index
                                            ? 'active'
                                            : '')
                                    }
                                >
                                    <a
                                        class="nav-link"
                                        onClick={() =>
                                            this.changeCurrentItem(index)
                                        }
                                    >
                                        <i class="material-icons">
                                            {nav_item.icon}
                                        </i>
                                        <p>{nav_item.value}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <slot name="icon-page" />

                {this.nav_items[this.current_item].htmlElements}
            </div>
          
        ];
    }
}


