

async function receiveInput() {
    const userInput = document.getElementById('user-input');
    const inputValue = userInput.value;
    // console.log(inputValue)


    try {
        const url = `https://restcountries.com/v3.1/name/${inputValue}`

        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        // check if data exists

        if (data && data.length > 0) {

            // create a parent container to hold the background image and data contents
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('show-content')

            // create a sub holder to hold all data contents
            const country = document.createElement('div')
            country.classList.add('api-content')

            // create an iamge container to hold the image of the flags of the countries
            const flagContainer = document.createElement('div')
            flagContainer.classList.add('flag-container')

            // create an element 
            const countryFlag = document.createElement('img')
            countryFlag.setAttribute('src', data[0].flags.png)
            flagContainer.appendChild(countryFlag);
            country.appendChild(flagContainer)


            const countryName = document.createElement('h2')
            countryName.textContent = `Name: ${data[0].name.common}`
            country.appendChild(countryName)

            const countryAltSpelling = document.createElement('h3')
            countryAltSpelling.textContent = `Alt spellings: ${data[0].altSpellings}`
            country.appendChild(countryAltSpelling)

            const countryCapital = document.createElement('h3')
            countryCapital.textContent = `Name: ${data[0].capital}`
            country.appendChild(countryCapital)

            const countryBorders = document.createElement('h3')
            countryBorders.textContent = `Borders: ${data[0].borders}`
            country.appendChild(countryBorders)

            const countryCar = document.createElement('h3')
            countryCar.textContent = `Car side: ${data[0].car.side}`
            country.appendChild(countryCar)


            // create an image container for coat of arms
            const coatOfArmsContainer = document.createElement('div')
            coatOfArmsContainer.classList.add('coat-Of-Arms-Container')


            // request and append png of coat of arms to its container
            const countryCoatOfArms = document.createElement('img')
            countryCoatOfArms.setAttribute('src', data[0].coatOfArms.png)
            const countryCoatOfArmsCaption = document.createElement('h6')
            countryCoatOfArmsCaption.textContent = `Coat of arms`
            coatOfArmsContainer.appendChild(countryCoatOfArms);
            coatOfArmsContainer.appendChild(countryCoatOfArmsCaption);

            country.appendChild(coatOfArmsContainer)

            // continent country where country can be found
            const countryContinent = document.createElement('h3')
            countryContinent.textContent = `Continent: ${data[0].continents}`
            country.appendChild(countryContinent)

            // continent independency true/false
            const countryIndependent = document.createElement('h3')
            countryIndependent.textContent = `Independent: ${data[0].independent}`
            country.appendChild(countryIndependent)

            //  Population
            const countryPopulation = document.createElement('h3')
            countryPopulation.textContent = `Population: ${data[0].population}`
            country.appendChild(countryPopulation)



            for (const language in data[0].languages) {
                // console.log(language);
                // console.log(data[0].languages[language]);
                const countryLanguages = document.createElement('h3')
                countryLanguages.textContent = `Languages: ${language}: ${data[0].languages[language]}`
                country.appendChild(countryLanguages);
            }


















            // append api contents fecthed to the main container
            countryDiv.appendChild(country)

            // display the data in the HTML document
            document.querySelector('#display-api-content').appendChild(countryDiv);

        }









    } catch (error) {
        console.log(error)
    }



}

