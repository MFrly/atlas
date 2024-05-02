const staty = document.getElementById('staty');

fetch('https://restcountries.com/v3.1/region/europe')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        //staty.innerHTML = data[9].translations.ces.common;
        data.forEach(country => {
            console.log(country.capital[0]);
            let stat = `<div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card">
            <a href="${country.maps.googleMaps}">
            <img class="card-img-top" src="${country.flags.svg}" alt="${country.flags.alt}" />
            </a>
                <div class="card-body">
                    <h4 class="card-title">${country.translations.ces.common}</h4>
                    <p class="card-text">${country.population}</p>
                    <br> ${country.capital[0]}
                </div>
            </div>
            
        </div>`;
            document.getElementById('staty').innerHTML+=stat;
        });
    });