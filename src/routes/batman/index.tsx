
import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from "./styles.css?inline";
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <nav class="navbar">
  <ul class="navbar-list">
    <li class="navbar-item">
  <a href="#">Inicio</a>
    </li>
    <li class="navbar-item">
  <a href="#">Quien soy</a>
    </li>
    <li class="navbar-item">
  <a href="#">Imagenes</a>
    </li>
    <li class="navbar-item">
  <a href="#">Transporte</a>
    </li>
  </ul>
</nav>

<div class="transporte">
  <div class="caja-vehiculos">

    <div class="transport-item uno">
      <div class="information">
<h2>Avion</h2>
<p class="Hubert">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
     <small class="transport-info">Fabricado en 2005</small>
      </div>
<img class="transport-img" src="../img/avion.jpg" height=" " width=" " />
    </div>


    <div class="transport-item dos">
      <div class="information">
<h2>Moto</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
     <small class="transport-info">Fabricado en 2005</small>
      </div>
<img class="transport-img" src="../img/moto.jpg" height=" " width=" " />
    </div>


    <div class="transport-item tres">
      <div class="information">
<h2>Coche</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
     <small class="transport-info">Fabricado en 2005</small>
      </div>
<img class="transport-img" src="../img/car.jpg" height=" " width=" " />
    </div>

  </div>

<div class="caja-titulo">
  <h1>Vehiculos de Batman</h1>
</div>
</div>


    </>
)
});

export const head: DocumentHead = {
    title: "Batman",
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],
}
  