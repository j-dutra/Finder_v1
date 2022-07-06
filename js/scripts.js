// INÍCIO - ITENS DO FORMULÁRIO
function getFormItens() {
    let allBrands = document.querySelector("#label-brands"),
    allModels = document.querySelector("#label-model"),
    allTypes = document.querySelector("#label-types"),
    allLocations = document.querySelector("#label-location");

    function getAllBrans() {
           fetch("https://e-carros-api.herokuapp.com/brands")
            .then((res) => res.json())
            .then((response) => {
                allBrands.innerHTML = `
                    <select class="form-item" name="make" id="">
						<option value="Marca" disabled selected>Marca</option>
                ${response
                .map(
                (elemento, index) =>
                `
                        <option class="option-response" key="${index}" value="${elemento.name}"> ${elemento.name} </option>
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
                allModels.innerHTML = `
                    <select class="form-item" name="make" id="">
                        <option value="Modelo" disabled selected>Modelo</option>
                ${response
                .map(
                (elemento, index) =>
                `
                        <option class="option-response" key="${index}" value="${elemento.model}"> ${elemento.model} </option>
                `
                )
                .join("")}
                    </select>
                `;
            });
    }
    getAllModels();

    function getAllTypes() {
        fetch("https://e-carros-api.herokuapp.com/cartype")
            .then((res) => res.json())
            .then((response) => {
                allTypes.innerHTML = `
                    <select class="form-item" name="make" id="">
                        <option value="Tipo" disabled selected>Tipo</option>
                ${response
                .map(
                (elemento, index) =>
                `
                        <option class="option-response" key="${index}" value="${elemento.id}"> ${elemento.value} </option>
                `
                )
                .join("")}
                    </select>
                `;
            });
    }
    getAllTypes();

    function getAllLocations() {
        fetch("https://e-carros-api.herokuapp.com/locale")
            .then((res) => res.json())
            .then((response) => {
                allLocations.innerHTML = `
                    <select  class="form-item" name="make" id="">
                        <option value="Local" disabled selected>Local</option>
                ${response
                .map(
                (elemento, index) =>
                `
                        <option class="option-response" key="${index}" value="${elemento.value}"> ${elemento.value} </option>
                `
                )
                .join("")}
                    </select>
                `;
            });
    }
    getAllLocations();
}

getFormItens();
// FIM - ITENS DO FORMULÁRIO


// INÍCIO - OFERTAS
function getOffers() {
    offerFirstCard = document.querySelector('#first-card');
    offerSecondCard = document.querySelector('#second-card');
    offerThirdCard = document.querySelector('#third-card');

    function getModelOfferFirst() {
        fetch("https://e-carros-api.herokuapp.com/adverts?id=1")
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                offerFirstCard.innerHTML = `${response
                .map(
                (elemento, index) =>
                    `
                    <div key="${index}" class="offers__cards-vertical offers__cards-hover">
                        <div class="offers__badge-used">
                            <p>${elemento.condition.value}</p>
                        </div>
                        
                        <div class="img-first">
                            <img class="img-responsive img-first-item" src="${elemento.photos.value}" alt="" width="636px" height="236px" /> 
                        </div>

                        <div class="offers__car-info-compare">
                            <div class="offers__car-info">
                                <p class="offers__car__year">${elemento.year}</p>
                                <p class="offers__car__name">${elemento.model}</p>
                                <p class="offers__car__price">${elemento.price}</p>

                                <div class="offers__car__location">
                                    <img src="./assets/img/top-offers/location.svg" alt="" />
                                    <p>${elemento.location.value}</p>
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
                                <p>${elemento.kilometers}</p>
                            </div>

                            <div class="offers__meta__itens">
                                <img src="./assets/img/top-offers/transmission.svg" alt="">
                                <p>Automático</p>
                            </div>

                            <div class="offers__meta__itens">
                                <img src="./assets/img/top-offers/fuel.svg" alt="">
                                <p>${elemento.fuel.value}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                .join("")}`;
            });
    }
    getModelOfferFirst();

    function getModelOfferSecond() {
        fetch("https://e-carros-api.herokuapp.com/adverts?id=2")
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            offerSecondCard.innerHTML = `${response
            .map(
            (elemento, index) =>
                `
                <div key="${index}" class="cards__horizontal offers__cards-hover">
                    <div class="offers__badge-used">
                        <p>${elemento.condition.value}</p>
                    </div>

                    <div class="img-second">
                        <img class="img-responsive img-second-item" src="${elemento.photos.value}" alt="" width="260px" height="239px" />
                    </div>

                    <div class="horizontal__card__info">
                        <div class="card-horizontal__info-compare">
                            <div class="card-horizontal__info">
                                <p class="offers__car__year">${elemento.year}</p>
                                <p class="offers__car__name">${elemento.model}</p>
                                <p class="offers__car__price">${elemento.price}</p>

                                <div class="offers__car__location">
                                    <img src="./assets/img/top-offers/location.svg" alt="" />
                                    <p>${elemento.location.value}</p>
                                </div>
                            </div>

                            <div class="offers__car-compare">
                                <input id="offers-compare2" type="checkbox" />
                                <label for="offers-compare2">Compare</label>
                            </div>
                        </div>

                        <div class="card-horizontal__divider"></div>

                        <div class="card-horizontal__meta">
                            <div class="horizontal__meta__itens">
                                <img src="./assets/img/top-offers/dashboard.svg" alt="">
                                <p>${elemento.kilometers}</p>
                            </div>

                            <div class="horizontal__meta__itens">
                                <img src="./assets/img/top-offers/transmission.svg" alt="">
                                <p>Manual</p>
                            </div>

                            <div class="horizontal__meta__itens">
                                <img src="./assets/img/top-offers/fuel.svg" alt="">
                                <p>${elemento.fuel.value}</p>
                            </div>

                        </div>
                    </div>
                </div>
                `
            )
            .join("")}`;
        });
    }
    getModelOfferSecond();

    function getModelOfferThird() {
        fetch("https://e-carros-api.herokuapp.com/adverts?id=3")
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            offerThirdCard.innerHTML = `${response
            .map(
            (elemento, index) =>
                `
                <div key="${index}" class="cards__horizontal offers__cards-hover">
                    <div class="offers__badge-used">
                        <p>Usado</p>
                    </div>

                    <div class="img-second">
                        <img class="img-responsive img-second-item" src="${elemento.photos.value}" alt="" width="260px" height="239px" />
                    </div>

                    <div class="horizontal__card__info">
                        <div class="card-horizontal__info-compare">
                            <div class="card-horizontal__info">
                                <p class="offers__car__year">${elemento.year}</p>
                                <p class="offers__car__name">${elemento.model}</p>
                                <p class="offers__car__price">${elemento.price}</p>

                                <div class="offers__car__location">
                                    <img src="./assets/img/top-offers/location.svg" alt="" />
                                    <p>${elemento.location.value}</p>
                                </div>
                            </div>

                            <div class="offers__car-compare">
                                <input id="offers-compare3" type="checkbox" />
                                <label for="offers-compare3">Compare</label>
                            </div>
                        </div>

                        <div class="card-horizontal__divider"></div>

                        <div class="card-horizontal__meta">
                            <div class="horizontal__meta__itens">
                                <img src="./assets/img/top-offers/dashboard.svg" alt="">
                                <p>${elemento.kilometers}</p>
                            </div>

                            <div class="horizontal__meta__itens">
                                <img src="./assets/img/top-offers/transmission.svg" alt="">
                                <p>Automático</p>
                            </div>

                            <div class="horizontal__meta__itens">
                                <img src="./assets/img/top-offers/fuel.svg" alt="">
                                <p>${elemento.fuel.value}</p>
                            </div>

                        </div>
                    </div>
                </div>
                `
            )
            .join("")}`;
        });
    }
    getModelOfferThird();
}

getOffers();
// FIM - OFERTAS


// INÍCIO - ÚLTIMOS PUBLICADOS
function getLatest() {
    latesteFirstCard = document.querySelector('#latest-first');
    latesteSecondCard = document.querySelector('#latest-second');
    latesteThirdCard = document.querySelector('#latest-third');

    function getLatestFirst() {
        fetch("https://e-carros-api.herokuapp.com/adverts?id=4")
            .then((res) => res.json())
            .then((response) => {
                latesteFirstCard.innerHTML = `${response
                .map(
                    (elemento, index) =>
                    `
                    <div key="${index}" class="latest__cards__items">
                        <div  class="latest__badge-new">
                            <p>Usado</p>
                        </div>

                        <div class="img-first">
                            <img class="img-responsive img-item" src="${elemento.photos.value}" alt="" width="416px" height="241px" /> 
                        </div>

                        <div class="latest__items__info">
                            <div class="latest__car__info">
                                <p class="latest__car__year">${elemento.year}</p>
                                <p class="latest__car__name">${elemento.model}</p>
                                <p class="latest__car__price">${elemento.price}</p>

                                <div class="latest__car__location">
                                    <img src="./assets/img/latest-cars/pin.svg" alt="" />
                                    <p>${elemento.location.value}</p>
                                </div>
                            </div>

                            <div class="latest__items__compare">
                                <input id="checkbox-compare1" type="checkbox" />
                                <label for="checkbox-compare1">Compare</label>
                            </div>
                        </div>

                        <div class="latest__divider"></div>

                        <div class="latest__meta">
                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/dashboard.svg" alt="" />
                                <p>${elemento.kilometers}</p>
                            </div>

                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/transmission.svg" alt="" />
                                <p>Manual</p>
                            </div>

                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/fuel.svg" alt="" />
                                <p>${elemento.fuel.value}</p>
                            </div>
                        </div>
                    </div>
                    
                    `
                )
                .join("")}`;
            });
    }
    getLatestFirst();

    function getLatestSecond() {
        fetch("https://e-carros-api.herokuapp.com/adverts?id=5")
            .then((res) => res.json())
            .then((response) => {
                latesteSecondCard.innerHTML = `${response
                .map(
                    (elemento, index) =>
                    `
                    <div key="${index}" class="latest__cards__items">
                        <div  class="latest__badge-new">
                            <p>Usado</p>
                        </div>

                        <div class="img-first">
                            <img class="img-responsive img-item" src="${elemento.photos.value}" alt="" width="416px" height="241px" /> 
                        </div>

                        <div class="latest__items__info">
                            <div class="latest__car__info">
                                <p class="latest__car__year">${elemento.year}</p>
                                <p class="latest__car__name">${elemento.model}</p>
                                <p class="latest__car__price">${elemento.price}</p>

                                <div class="latest__car__location">
                                    <img src="./assets/img/latest-cars/pin.svg" alt="" />
                                    <p>${elemento.location.value}</p>
                                </div>
                            </div>

                            <div class="latest__items__compare">
                                <input id="checkbox-compare1" type="checkbox" />
                                <label for="checkbox-compare1">Compare</label>
                            </div>
                        </div>

                        <div class="latest__divider"></div>

                        <div class="latest__meta">
                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/dashboard.svg" alt="" />
                                <p>${elemento.kilometers}</p>
                            </div>

                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/transmission.svg" alt="" />
                                <p>Automático</p>
                            </div>

                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/fuel.svg" alt="" />
                                <p>${elemento.fuel.value}</p>
                            </div>
                        </div>
                    </div>
                    
                    `
                )
                .join("")}`;
            });
    }
    getLatestSecond();

    function getLatestThird() {
        fetch("https://e-carros-api.herokuapp.com/adverts?id=6")
            .then((res) => res.json())
            .then((response) => {
                latesteThirdCard.innerHTML = `${response
                .map(
                    (elemento, index) =>
                    `
                    <div key="${index}" class="latest__cards__items">
                        <div  class="latest__badge-new">
                            <p>Usado</p>
                        </div>

                        <div class="img-first">
                            <img class="img-responsive img-item" src="${elemento.photos.value}" alt="" width="416px" height="241px" /> 
                        </div>

                        <div class="latest__items__info">
                            <div class="latest__car__info">
                                <p class="latest__car__year">${elemento.year}</p>
                                <p class="latest__car__name">${elemento.model}</p>
                                <p class="latest__car__price">${elemento.price}</p>

                                <div class="latest__car__location">
                                    <img src="./assets/img/latest-cars/pin.svg" alt="" />
                                    <p>${elemento.location.value}</p>
                                </div>
                            </div>

                            <div class="latest__items__compare">
                                <input id="checkbox-compare1" type="checkbox" />
                                <label for="checkbox-compare1">Compare</label>
                            </div>
                        </div>

                        <div class="latest__divider"></div>

                        <div class="latest__meta">
                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/dashboard.svg" alt="" />
                                <p>${elemento.kilometers}</p>
                            </div>

                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/transmission.svg" alt="" />
                                <p>Manual</p>
                            </div>

                            <div class="latest__meta__item">
                                <img src="./assets/img/latest-cars/fuel.svg" alt="" />
                                <p>${elemento.fuel.value}</p>
                            </div>
                        </div>
                    </div>
                    
                    `
                )
                .join("")}`;
            });
    }
    getLatestThird();
}

getLatest();
// FIM - ÚLTIMOS PUBLICADOS