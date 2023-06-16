import data from '../../../public/brands';

const homeBrand = (selectedBrand) => {
  const brand = data.brands.find((brand) => brand.name === selectedBrand);

  return `
  <style>
  .brandPick {
    display: grid;
    width: 100%;
    justify-content: space-between;
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  .container-${brand.id}{
    display: grid;
  }

  .content-item-${brand.id} {

    opacity: 1;
    transition: opacity 0.3s;
    cursor: pointer;
  }

  .content-item-${brand.id} img{
    width: 100%;
  }

  .${brand.id}-desc {
    place-items: center;
    text-align: center;
    font-size: 1rem;
    color: white;
    width: 80%;
  }


  .content-detail-${brand.id} {
    visibility: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-self: center;
    text-align: justify;
    padding: 2rem;
    transition: opacity 0.3s;
  }
  .content-detail-${brand.id} img{
    width: 60%;
  }

  .content-item-${brand.id},
  .content-detail-${brand.id} {
    grid-area: 1/1;
  }

  .container-${brand.id}:hover .content-item-${brand.id} {
    opacity: 0.5;
  }
  
  .container-${brand.id}:hover .content-detail-${brand.id} {
    opacity: 1;
    visibility: visible;
    z-index: 1;
  }

  button{
    display: block;
    background-color: black;
    color: white;
    border: none;
    border-radius: 99px;
    padding: 20px 25px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  a{
    color: white;
  }

    </style>
    <div class="container-${brand.id}">
    <div class="content-item-${brand.id}">
    <img src="${brand.thumbnail}" alt="${selectedBrand}">
          </div>
    <div class="content-detail-${brand.id}">
      <img src="${brand.logo}" alt="${selectedBrand} logo">
      <div class="${brand.id}-desc">
      <h1>${brand.description}</h1>
      <br>
      <button href="#/brands-detail/${brand.id}" ><a href="${brand.web}">Learn More..</a></button>
        </div>
      </div>
  </div>
  `;
};

export default homeBrand;
