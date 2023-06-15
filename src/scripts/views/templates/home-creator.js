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

  .content-item-${selectedBrand} {
    padding: 2rem;
    opacity: 1;
    transition: opacity 0.3s;
    cursor: pointer;
  }

  .content-item-${selectedBrand} img{
    width: 100%;
  }

  .${selectedBrand}-desc{
    align-content: center;
  }

  .content-item-${selectedBrand}:hover {
    opacity: 0.4;
  }

  .content-detail-${selectedBrand} {
    visibility: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;
    text-align: justify;
    padding: 2rem;
    transition: opacity 0.3s;
  }

  .content-item-${selectedBrand}:hover ~ .content-detail-${selectedBrand} {
    opacity: 1;
    visibility: visible;
  }

    </style>

    <div class="content-item-${selectedBrand}">
    <img src="${brand.thumbnail}" alt="${selectedBrand}">
          </div>
    <div class="content-detail-${selectedBrand}">
      <img src="${brand.logo}" alt="${selectedBrand} logo">
      <div class="${selectedBrand}-desc">
      <p>${brand.description}</p>
      <button href="#/brands-detail/${brand.id}" >Learn More..</button>
        </div>
  </div>
</div>
  `;
};

export default homeBrand;
