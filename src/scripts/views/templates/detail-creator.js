import API_ENDPOINT from '../../globals/api-endpoint';

const createBrandDetaiCreator = (brand) => `
    <h2 class="brand_name">${brand.name}</h2>
    <img class="brand_image"> src="${API_ENDPOINT.BRAND_IMAGE + brand.thumbnail}" alt="${brand.name}" />
    <div class="brand_info">
        <h3>Information</h3>
        <div class = categories>
            <h4>Kategori</h4>
            <p>${brand.categories}</p>
        </div>
        <div id="catalogs">
            <div class="brand">
                <h4>Katalog</h4>
                <p>${brand.brands.catalogs.map((brand) => `- ${brand.name}`).join('<br>')}</p>
                <h5>Type</h5>
                <p>${brand.brands.type.catalogs.map((brand) => `- ${brand.type.name}`).join('<br>')}</p>
            </div>
        </div>
        <h4>Description</h4>
        <p>${brand.description}</p>
    </div>
`;

const createBrandListCreator = (brand) => `
    <div id="brand-item" class="brand-item">
        <div class="brand-list_header">
            <img class="brand-list_header_image" alt="${brand.name}"
                data-src="${brand.thumbnail ? API_ENDPOINT.BRAND_IMAGE + brand.thumbnail : 'https://picsum.photos/id/666/800/450?grayscale'}">
        </div>
        <div class="brand-list_content">
            <a href="/#detail/${brand.id}">
                <h3>${brand.name}</h3>
            </a>
            <p>${`${brand.description.slice(0, 150)} ...`}</p>
        </div>
    </div>
`;

export {
    createBrandDetaiCreator,
    createBrandListCreator,
};
