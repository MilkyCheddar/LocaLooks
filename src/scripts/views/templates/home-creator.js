import data from '../../../public/brands.json';

const homeBrand = (selectedBrand) => {
/* eslint-disable no-shadow */
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

  .desc-${brand.id} {
    place-items: center;
    text-align: justify;
    vertical-align: middle;
  }

  .desc-${brand.id} h1{
    font-size: 1rem;
    color: black;
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

  .btnDtl{
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
  .btnDtl:hover{
    transition: ease 0.3s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.8;
  }
  .btnDtl a{
    color: white;
  }
  @media screen and (max-width: 639px) {
    .desc-${brand.id} h1{
      font-size: 8px;
      width: 100px; /* Adjust the width as needed */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .content-detail-${brand.id} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-self: center;
      text-align: justify;
    }
    .btnDtl{
      border-radius: 99px;
      padding: 2px 5px;
      margin-top: 10px;
      font-size: 8px;
    }
  }

  @media screen and (max-width: 693px) {
    .desc-${brand.id} h1{
      font-size: 8px;
    }
    .content-detail-${brand.id} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-self: center;
      text-align: justify;
    }
    .desc-${brand.id}{
      grid-column: span 2;
    }
    .btnDtl{
      border-radius: 99px;
      padding: 2px 5px;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 1008px) {
    .desc-${brand.id} h1{
      font-size: 0.6rem;
    }
    .btnDtl{
      border-radius: 99px;
      padding: 10px 15px;
      margin-top: 10px;
    }
  }

    </style>
    <div class="container-${brand.id}">
    <div class="content-item-${brand.id}">
    <img src="${brand.thumbnail}" alt="${selectedBrand}">
          </div>
    <div class="content-detail-${brand.id}">
      <img src="${brand.logo}" alt="${selectedBrand} logo">
      <div class="desc-${brand.id}">
      <h1>${brand.description}</h1>
      <br>
      <button class="btnDtl" href="#/brands-detail/${brand.id}"><a class="no-underline" href="${brand.web}" target="_blank"">Learn More..</a></button>
        </div>
      </div>
  </div>
  `;
};

export default homeBrand;
