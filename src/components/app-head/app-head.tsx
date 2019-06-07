import { Component, h } from "@stencil/core";

@Component({
  tag: "app-head",
  styleUrl: "app-head.css"
})
export class AppHome {
  render() {
    return [
      <header class="header">
        <nav class="navbar">
          <div class="container">
            <img
              class="navbar_brand"
              src="../../assets/section/logo.webp"
              alt=""
            />
            <div class="ul-big_container">
              <ul class="ul_collapse">
                <li class="nav-item">
                  <a class="nav-link">Главное</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Найти свой центр</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Профиль</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">О нас</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Для врачей</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    ];
  }
}
