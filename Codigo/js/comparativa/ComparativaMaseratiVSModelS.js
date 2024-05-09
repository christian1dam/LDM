const MAX_TIMES_SELECTED_BUTTON = 1;
var clicksOnTheButton = 0;


//Escucha todos los clicks que ocurren dentro del DOM después de que estén cargados
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', (element) => {
        // comprueba que el click se ha hecho en un id específico
        if (element.target.id === 'solicitarInfoModelS' && clicksOnTheButton < MAX_TIMES_SELECTED_BUTTON) {
            createElementAndInject('div', [['id', 'tempBodyFormularioSolInfo'], ['class', 'tempBodyFormularioSolInfo']], 'body');
            insertHTML('tempBodyFormularioSolInfo'); //SOLO PARA ESTE CASO 
            document.getElementById('checkboxTesla').checked = true;
            clicksOnTheButton++;
        } else if(element.target.id === 'solicitarInfoMaserati' && clicksOnTheButton < MAX_TIMES_SELECTED_BUTTON) {
            createElementAndInject('div', [['id', 'tempBodyFormularioSolInfo'], ['class', 'tempBodyFormularioSolInfo']], 'body');
            insertHTML('tempBodyFormularioSolInfo'); //SOLO PARA ESTE CASO 
            document.getElementById('checkboxMaserati').checked = true;
            clicksOnTheButton++;
        } else {
            console.log(`OTRO ELEMENTO clicado con ID: ${element.target.id}`);
        }
    });
});

function createElementAndInject(typeOfElement, atributes, whereItGoes_ID) {
    var element = document.createElement(`${typeOfElement}`);
    if ((Array.isArray(atributes) && atributes.length == 0) || atributes == null) {
        document.getElementById(`${whereItGoes_ID}`).appendChild(element);
    } else if (Array.isArray(atributes) && atributes.length > 0) {
        for (var i = 0; i < atributes.length; i++) {
            if (atributes[i] != null) {
                element.setAttribute(`${atributes[i][0]}`, `${atributes[i][1]}`);
            }
        }
        document.getElementById(`${whereItGoes_ID}`).appendChild(element);
    }
}

function insertHTML(whereItGoes_ID) {
    document.getElementById(`${whereItGoes_ID}`).innerHTML = `
    <div class="tempHeader"> 
        <button>x</button>  
    </div>
    <div class="tempMain">
        <section class="coverForm">
            <div class="header-section">
                <span class="span-h1">Selecciona los coches que te interesan</span>
                <div class="tempCoche">
                    <input class="input-checkbox" type="checkbox" name="checkboxMaserati" id="checkboxMaserati">
                    <picture>
                        <img src="./../../img/comparativa/maseratiTesla/jpg/35581441-1697706436.jpg" alt="Maserati">
                    </picture>
                    <p>
                        <span>Maserati Ghibli</span>
                        <span>Desde <b>82.505€</b></span>
                    </p>
                </div>
                <div class="tempCoche">
                    <input class="input-checkbox" type="checkbox" name="checkboxTesla" id="checkboxTesla">
                    <picture>
                        <img src="./../../img/comparativa/maseratiTesla/jpg/35579951-1697704958.jpg" alt="ModelS">
                    </picture>
                    <p>
                        <span>Tesla Model S eléctrico</span>
                        <span>Desde <b>95.970€</b></span>
                    </p>
                </div>
            </div>
            <div class="main-section">
                <form id="formularioInfoCoches" class="formularioInfoCoches">
                    <span class="span-h1">Déjanos tus datos de contacto</span>
                    <div class="field">
                        <input class="input" required="required" placeholder="Email" ref="email" name="Email" id="EmailFromUser"
                            type="email">
                        <label ref="error_msg">
                            Debe ser un email válido, por ejemplo: contacto@quecochemecompro.com
                        </label>
                    </div>
                    <div class="field">
                        <input class="input" required="required" placeholder="Nombre y apellidos" ref="name" name="name"
                            id="NameFromUser" type="text">
                        <label ref="error_msg">
                            Este campo es obligatorio
                        </label>
                    </div>
                    <div class="phoneNumberAndPostalCodeFields">
                        <div>
                            <input class="input" required="required" placeholder="Teléfono" ref="phoneNumberFromUser"
                                name="phoneNumberFromUser" id="phoneNumberFromUser" type="number">
                            <label ref="error_msg">
                                Debe ser un teléfono válido de 9 dígitos y sin espacios
                            </label>
                        </div>
                        <div>
                            <input class="input" required="required" placeholder="Código postal" ref="postalCode"
                                name="PostalCodeFromUser" id="PostalCodeFromUser" type="number">
                            <label ref="error_msg">
                                Debe ser un código postal válido, por ejemplo: 28013
                            </label>
                        </div>
                    </div>
                    <div class="privacy-info">
                        <input class="input-checkbox" type="checkbox" name="privacy-info" id="pravacyInfo">
                        <p>Leo y acepto las <span><a href="">condiciones de uso</a></span> y <span><a 
                        href="">privacidad</a></span></p>
                    </div>
                    <button>Quiero aprovechar esta oferta!</button>
                </form>
            </div>
            <div class="footer-section">Mis datos serán cedidos al gestor de la venta y conservados en las bases
                    de datos de CHRISTIANRMCH MEDIOS DIGITALES X.D.
            </div>
        </section>
    </div>
    <div class="footerFromTemporalMainPrivacy">
        <button>
            <img data-nosnippet=""
                src="data:image/svg+xml,%3Csvg viewBox='0 0 16 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin-right: 5px; height: 17px;'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='cog' fill='%23FFFFFF' fill-rule='nonzero'%3E%3Cpath d='M15.596917,9.98326938 L14.5041079,9.33798816 C14.5728064,8.7815386 14.5728064,8.2184614 14.5041079,7.66201184 L15.596917,7.01673062 C15.9178229,6.82726259 16.0726124,6.43742732 15.9670848,6.0741546 C15.5912871,4.78033611 14.9223646,3.61573153 14.0390021,2.66061113 C13.7831755,2.38401797 13.3749053,2.32348965 13.0525249,2.51384881 L11.9613243,3.15813608 C11.5248519,2.81840117 11.0481221,2.53648663 10.542482,2.31910255 L10.542482,1.02991108 C10.542482,0.648438733 10.2860522,0.316869683 9.92305592,0.229024792 C8.66155,-0.07632446 7.33871809,-0.0763587342 6.07694408,0.229024792 C5.71398131,0.316869683 5.457518,0.648404458 5.457518,1.02991108 L5.457518,2.31910255 C4.95187406,2.53647872 4.47514334,2.81839382 4.03867572,3.15813608 L2.94747511,2.51384881 C2.62506122,2.32348965 2.21679094,2.38401797 1.96099786,2.66061113 C1.07763542,3.61573153 0.40871289,4.78037038 0.0329152236,6.0741546 C-0.072612407,6.43742732 0.0821770899,6.82722832 0.403082962,7.01673062 L1.49589212,7.66201184 C1.42719356,8.2184614 1.42719356,8.7815386 1.49589212,9.33798816 L0.403082962,9.98326938 C0.0821770899,10.1727374 -0.072612407,10.5625727 0.0329152236,10.9258454 C0.40871289,12.2196296 1.07763542,13.3842685 1.96099786,14.3393889 C2.21682445,14.615982 2.62509474,14.6765103 2.94747511,14.4861855 L4.03867572,13.8418982 C4.47514096,14.1816349 4.95187243,14.4635389 5.457518,14.6808975 L5.457518,15.9700889 C5.457518,16.3515613 5.7139478,16.6831303 6.07694408,16.7709752 C7.33848351,17.0763245 8.66128191,17.0763587 9.92305592,16.7709752 C10.2860187,16.6831303 10.542482,16.3515955 10.542482,15.9700889 L10.542482,14.6808975 C11.0481183,14.4635198 11.5248475,14.1816171 11.9613243,13.8418982 L13.0525249,14.4861855 C13.3749053,14.6765446 13.7831755,14.6160163 14.0390021,14.3393889 C14.9223646,13.3842685 15.5912871,12.2196296 15.9670848,10.9258454 C16.0726124,10.5625727 15.9178229,10.1727717 15.596917,9.98326938 Z M13.4026193,13.4264943 L11.8507364,12.510001 C10.9463288,13.3007421 10.6255905,13.4997041 9.47011484,13.9172673 L9.47011484,15.7502196 C8.50024808,15.9548373 7.49975192,15.9548373 6.52988516,15.7502196 L6.52988516,13.9172673 C5.4031959,13.5101235 5.07699522,13.3210668 4.14926358,12.510001 L2.59738075,13.4264943 C1.9368696,12.6693763 1.43490124,11.7817076 1.12525522,10.8230912 L2.67780828,9.90659789 C2.4588108,8.69270694 2.45871027,8.30790999 2.67780828,7.09340211 L1.12525522,6.17690879 C1.43490124,5.21829242 1.93690311,4.33058946 2.59738075,3.57312864 L4.14926358,4.49030745 C5.0667072,3.68712478 5.39129933,3.4941265 6.52988516,3.08269846 L6.52988516,1.24978037 C7.49971774,1.04482059 8.50028226,1.04482059 9.47011484,1.24978037 L9.47011484,3.08273274 C10.6087677,3.49419505 10.9333933,3.6872276 11.8507364,4.49034172 L13.4026193,3.57316291 C14.0630969,4.33058946 14.5650988,5.21829242 14.8747448,6.17694306 L13.3221917,7.09343638 C13.5412227,8.3076358 13.5412897,8.69212428 13.3221917,9.90663217 L14.8747448,10.8231255 C14.5650988,11.7817076 14.0631304,12.6694105 13.4026193,13.4264943 Z M8,5.20968958 C6.22607014,5.20968958 4.78289853,6.68570996 4.78289853,8.50001714 C4.78289853,10.3143243 6.22607014,11.7903447 8,11.7903447 C9.77392986,11.7903447 11.2171015,10.3143243 11.2171015,8.50001714 C11.2171015,6.68570996 9.77392986,5.20968958 8,5.20968958 Z M8,10.6935688 C6.81738009,10.6935688 5.85526568,9.70955526 5.85526568,8.50001714 C5.85526568,7.29047902 6.81738009,6.30646543 8,6.30646543 C9.18261991,6.30646543 10.1447343,7.29047902 10.1447343,8.50001714 C10.1447343,9.70955526 9.18261991,10.6935688 8,10.6935688 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                alt="Privacidad">
            <span>Privacy</span>
        </button>
    </div>
    `;
};