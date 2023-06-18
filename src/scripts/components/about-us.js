import DATA from '../../public/TEAM.json';
import '../../styles/about-us.css';

class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // ambil data
    const dataTeam = DATA.teams;
    dataTeam.forEach((item) => {
      /* eslint-disable-next-line no-console */
      console.log(item.name);
      /* eslint-disable-next-line no-console */
      console.log(item.role);
    });

    let output = '';
    dataTeam.forEach((item) => {
      output += `
      <div class="team-card">
        <div class="team-card-img">
          <img src="${item.photo}" class="img-fluid" alt="team-image">
        </div><!-- team-card-img -->
        <div class="team-card-content">
          <h4>${item.name}</h4>
          <h3>${item.id}</h3>
        <div class="socialMedia">
          <a href="${item.instagram}"  target="blank" class="fa fa-instagram"></a>
          <a href="${item.linkedin}" target="blank" class="fa fa-linkedin"></a>
          <a href="${item.github}" target="blank" class="fa fa-github"></a>
        </div>
        </div><!-- team-card-content -->
      </div><!--team-card-->
      `;
    });

    this.innerHTML = `
    <section>
      <div class="jumbotron">
        <div class="jumbotron-overlay">
          <div class="jumbotron-inner">
            <h1 class="jumbotron-title">ABOUT US</h1>
            <p class="jumbotron-tag">
            Visi kami adalah mengembangkan sebuah situs web yang menarik dan mudah digunakan untuk mempromosikan merek-merek fashion lokal Indonesia. Melalui platform ini, kami berupaya memberikan visibilitas dan pengakuan yang lebih besar kepada merek-merek ini di pasar domestik maupun internasional. Kami berkomitmen untuk menyoroti keunikan fashion dan budaya Indonesia, serta berperan dalam pertumbuhan dan pengembangan merek lokal.
            </p>
          </div>
        </div>
      </div>
      <div class="team-title">
      <h3>Our Team</h3>
      </div>
      <div class="cards-container">
        ${output}
      </div>
    </section>
    `;
  }
}

customElements.define('about-us', AboutUs);
