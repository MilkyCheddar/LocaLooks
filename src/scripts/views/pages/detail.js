import UrlParser from '../../routes/url-parser';
// import LocaLooksIdb from '../../data/locaLooks-idb';
// import LocaLooksSource from '../../data/locaLooks-source';

const Detail = {
    async render() {
        return `
            <div id="brand" class="brand"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const brand = await BrandSource.detailBrands(url.id);
        const brandContainer = document.querySelector('#brand');
        brandContainer.innerHTML = createBrandDetailCreator(brand);
    },
};

export default Detail;