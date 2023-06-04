import API_ENDPOINT from '../../globals/api-endpoint';

const createBrandDetailTemplate = (brand) => `
    <h2 class="brand_name">${brand.name}</h2>
    <img class="brand_image"> src="${API_ENDPOINT.BRAND_IMAGE + brand.thumbnail}" alt="${brand.name}" />
    <div class="brand_info">
        <h3>Information</h3>
        <div class = categories>
            <h4>Kategori</h4>
            <p>${brand.categories}</p>
        </div>
    </div>
`