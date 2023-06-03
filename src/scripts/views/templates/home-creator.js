import API_ENDPOINT from '../../globals/api-endpoint';

const homeBrand = (selectedBrand) => `
          <div class="content-item" id="${API_ENDPOINT.DETAIL(selectedBrand.name)}Hero">
            <img src="${API_ENDPOINT.BRAND_IMAGE + selectedBrand.thumbnail}" alt="${API_ENDPOINT.DETAIL(selectedBrand.name)}Banner">
          </div>

          <style>
          .content-item {
            position: relative;
          }
          
          .content-item img {
            transition: opacity 0.3s ease-in-out;
            width: 100%;
          }
          
          .content-item:hover img {
            opacity: 0.4;
          }
          
          .content-item:hover::before {
            opacity: 1;
          }
          
          .content-item#${API_ENDPOINT.DETAIL(selectedBrand.name)}Hero:hover::before {
            content: "";
            text-align: right;
            box-sizing: border-box;
            vertical-align: middle;
            position: absolute;
            top: 6rem;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("${API_ENDPOINT.BRAND_IMAGE(selectedBrand.logo)}");
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            transition: opacity 0.3s ease-in-out;
            opacity: 1;
            width: 50%;
            height: 50%;
          }
          </style>
`;

export default homeBrand;