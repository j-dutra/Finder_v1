// INÍCIO - ITENS DO FORMULÁRIO
function getFormItens() {
    let allBrands = document.querySelector(".brands"),
    allModels = document.querySelector(".models"),
    allTypes = document.querySelector(".types"),
    allLocations = document.querySelector(".locations");

    function getAllBrans() {
        // fetch("https://monkfish-app-2xvm7.ondigitalocean.app/brands")
        // fetch("https://carfinder-api.herokuapp.com/brands")
           fetch("https://e-carros-api.herokuapp.com/brands")
            .then((res) => res.json())
            .then((response) => {
                allBrands.innerHTML = `
                    <select  class="form-item" name="make" id="">
                ${response
                .map(
                (elemento, index) =>
                    `
                        <option key="${index}" value="${elemento.name}"> ${elemento.name} </option>
                `
                )
                .join("")}
                    </select>
                `;
            });
    }  
    getAllBrans();

    function getAllModels() {
        fetch("https://e-carros-api.herokuapp.com/adverts")
            .then((res) => res.json())
            .then((response) => {
                allModels.innerHTML = `${response
                .map(
                (elemento, index) =>
                    `
                    <select key="${index}" class="form-item" name="make" id="">
                        <option value="${elemento.model}"> ${elemento.model} </option>
                    </select>
            
                `
                )
                .join("")}`;
            });
    }
    getAllModels();

    function getAllTypes() {
        fetch("https://e-carros-api.herokuapp.com/cartype")
            .then((res) => res.json())
            .then((response) => {
                allTypes.innerHTML = `${response
                .map(
                (elemento, index) =>
                    `
                    <select key="${index}" class="form-item" name="make" id="">
                        <option value="${elemento.id}"> ${elemento.value} </option>
                    </select>
                `
                )
                .join("")}`;
            });
    }
    getAllTypes();

    function getAllLocations() {
        fetch("https://e-carros-api.herokuapp.com/locale")
            .then((res) => res.json())
            .then((response) => {
                allLocations.innerHTML = `${response
                .map(
                (elemento, index) =>
                    `
                    <select key="${index}" class="form-item" name="make" id="">
                        <option value="${elemento.value}"> ${elemento.value} </option>
                    </select>
            
                `
                )
                .join("")}`;
            });
    }
    getAllLocations();
}

getFormItens();
// FIM - ITENS DO FORMULÁRIO

// INÍCIO - OFERTAS
function getOffers() {
    offersInfoHome = document.querySelector('.offers__cards-vertical');

    function getAllModels() {
        fetch("https://e-carros-api.herokuapp.com/adverts")
            .then((res) => res.json())
            .then((response) => {
                offersInfoHome.innerHTML = `${response
                .map(
                (elemento, index) =>
                    `
                    <div key="${index}" class="offers__cards-vertical offers__cards-hover">
                        <div class="offers__badge-used">
                            <p>Usado</p>
                        </div>

                        <img class="img-responsive" src="./assets/img/top-offers/white-car.png" alt=""> 

                        <div class="offers__car-info-compare">
                            <div class="offers__car-info">
                                <p class="offers__car__year">${elemento.year}</p>
                                <p class="offers__car__name">${elemento.model}</p>
                                <p class="offers__car__price">${elemento.price}</p>

                                <div class="offers__car__location">
                                    <img src="./assets/img/top-offers/location.svg" alt="" />
                                    <p>${elemento.location}</p>
                                </div>
                            </div>

                            <div class="offers__car-compare">
                                <input id="offers-compare1" type="checkbox" />
                                <label for="offers-compare1">Compare</label>
                            </div>
                        </div>

                        <div class="offers__divider"></div>

                        <div class="offers__vertical-meta">	
                            <div class="offers__meta__itens">
                                <img src="./assets/img/top-offers/dashboard.svg" alt="">
                                <p>${elemento.mileage}</p>
                            </div>

                            <div class="offers__meta__itens">
                                <img src="./assets/img/top-offers/transmission.svg" alt="">
                                <p>${elemento.additional[0]}</p>
                            </div>

                            <div class="offers__meta__itens">
                                <img src="./assets/img/top-offers/fuel.svg" alt="">
                                <p>${elemento.fuel[2]}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                .join("")}`;
            });
    }
    getAllModels();
}

getOffers();
// FIM - OFERTAS

// function getOffersTest() {
//     offersInfoHome = document.querySelector('.offers__cards-vertical');

//     function getAllModels() {
//         fetch("https://e-carros-api.herokuapp.com/adverts")
//             .then((res) => res.json())
//             .then((response) => {
//                 offersInfoHome.innerHTML = `${response.forEach((elemento, index) => {
//                     `
//                     <div key="${index}" class="offers__cards-vertical offers__cards-hover">
//                         <div class="offers__badge-used">
//                             <p>Usado</p>
//                         </div>

//                         <img class="img-responsive" src="./assets/img/top-offers/white-car.png" alt=""> 

//                         <div class="offers__car-info-compare">
//                             <div class="offers__car-info">
//                                 <p class="offers__car__year">${elemento.year}</p>
//                                 <p class="offers__car__name">${elemento.model}</p>
//                                 <p class="offers__car__price">${elemento.price}</p>

//                                 <div class="offers__car__location">
//                                     <img src="./assets/img/top-offers/location.svg" alt="" />
//                                     <p>${elemento.location}</p>
//                                 </div>
//                             </div>

//                             <div class="offers__car-compare">
//                                 <input id="offers-compare1" type="checkbox" />
//                                 <label for="offers-compare1">Compare</label>
//                             </div>
//                         </div>

//                         <div class="offers__divider"></div>

//                         <div class="offers__vertical-meta">	
//                             <div class="offers__meta__itens">
//                                 <img src="./assets/img/top-offers/dashboard.svg" alt="">
//                                 <p>${elemento.mileage}</p>
//                             </div>

//                             <div class="offers__meta__itens">
//                                 <img src="./assets/img/top-offers/transmission.svg" alt="">
//                                 <p>${elemento.additional[0]}</p>
//                             </div>

//                             <div class="offers__meta__itens">
//                                 <img src="./assets/img/top-offers/fuel.svg" alt="">
//                                 <p>${elemento.fuel[2]}</p>
//                             </div>
//                         </div>
//                     </div>
//                     `
//                 }).join("")}`;
//             });
//     }
//     getAllModels();
// }

// getOffersTest();

