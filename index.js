 

const dataTableEl = document.getElementById("cryptoData");

function addDataToTable(data){
    const rowElement = document.createElement('tr');
    rowElement.classList.add("rowElement");

    const imgTdElement = document.createElement('td');
    const nameTdElement = document.createElement('td');
    const symbolTdElement = document.createElement('td');
    const currentPriceTdElement = document.createElement('td');
    const totalVolumeTdElement = document.createElement('td');
    const priceChangePercentage24hTdElement = document.createElement('td');
    const marketCapTdElement = document.createElement('td');
    

   const imgElement = document.createElement('img');
   const nameElement = document.createElement('p');
   const symbolElement = document.createElement('p');
   const currentPriceElement = document.createElement('p');
   const totalVolumeElement = document.createElement('p');
   const priceChangePercentage24hElement = document.createElement('p');
   const marketCapElement = document.createElement('p');
    

    imgElement.src = data.image;
    imgElement.classList.add("cryptoImg");
    nameElement.innerText = data.name;
    nameElement.classList.add("cryptoName");
    symbolElement.innerText = data.symbol;
    symbolElement.classList.add("cryptoSymbol");
    currentPriceElement.innerText = "$" + data.current_price;
    currentPriceElement.classList.add("currentPrice");
    totalVolumeElement.innerText = "$"+ data.total_volume;
    totalVolumeElement.classList.add("totalVolume");
    priceChangePercentage24hElement.innerText = parseFloat(data.price_change_percentage_24h).toFixed(2) + "%";
    priceChangePercentage24hElement.classList.add("priceChangePercentage24h");
    if (data.price_change_percentage_24h < 0){
        priceChangePercentage24hElement.style.color = "red";
    } else {
        priceChangePercentage24hElement.style.color = "green";
    }
    marketCapElement.innerText = "Mkt Cap : $" + data.market_cap;
    marketCapElement.classList.add("marketCap");
    

    imgTdElement.appendChild(imgElement);
    nameTdElement.appendChild(nameElement);
    symbolTdElement.appendChild(symbolElement);
    currentPriceTdElement.appendChild(currentPriceElement);
    totalVolumeTdElement.appendChild(totalVolumeElement);
    priceChangePercentage24hTdElement.appendChild(priceChangePercentage24hElement);
    marketCapTdElement.appendChild(marketCapElement);
    

    rowElement.appendChild(imgTdElement);
    rowElement.appendChild(nameTdElement);
    rowElement.appendChild(symbolTdElement);
    rowElement.appendChild(currentPriceTdElement);
    rowElement.appendChild(totalVolumeTdElement);
    rowElement.appendChild(priceChangePercentage24hTdElement);
    rowElement.appendChild(marketCapTdElement);
    

    dataTableEl.appendChild(rowElement);

    document.createElement('hr');
    

}


const fetchData = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    const response = await fetch(url)

    const data = await response.json();

    data.forEach((element) => {
        addDataToTable(element);
    });

}

document.addEventListener('DOMContentLoaded',fetchData)