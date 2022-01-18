import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['pic', 'content', 'navigate']
  static value = {
    help: Boolean
  }


  tabs() {
    // console.log(this.helpValue)
    // this.data.set('shake', false)
    this.helpValue = 'false'
    const links = this.contentTargets
    links.forEach((link) => {
      link.classList.add('load')
      link.classList.toggle('d-none')
    })
  };
  // methode shake avec le shake et le remove
  // quel est la valeur de shake value si c'est true elle fait sinon elle fait rien
  // nouveau data action qui ecoute le click avec nouvelle methode qui passe le shake value à false

  shake() {
    if (this.helpValue) {
      this.picTarget.classList.add('pic-shake');
      this.navigateTarget.classList.add('load');
      this.navigateTarget.classList.remove('d-none');
    }
  };

  connect() {
      setTimeout(() => this.shake(), 2500);
  };
}
