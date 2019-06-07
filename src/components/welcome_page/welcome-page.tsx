import { Component, h } from '@stencil/core';

@Component({
    tag: 'welcome-page',
    styleUrl: 'welcome-page.css'
})
export class WelcomePage {
    render() {
        return [
            <app-head />,
            <div class="containerOk container">
                <div class = "her">
                <img class ="icont"src="../../assets/easy_icon/telegram.png" alt="" />
                <p>регистрируйтесь в телеграм, заходите будет связь</p>
                </div>
                <div class = "her">
                <img class ="icont"src="../../assets/easy_icon/telegram.png" alt="" />
                <p>регистрируйтесь в телеграм, заходите будет связь</p>
                </div>
            </div>
        ];
    }
}
