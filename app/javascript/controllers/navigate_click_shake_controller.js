import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['pic', 'content', 'navigate']
  static value = {
    shake: Boolean
  }


  tabs() {
    const links = this.contentTargets
    links.forEach((link) => {
      link.classList.add('load')
      link.classList.toggle('d-none')
    })
    this.navigateTarget.classList.add('d-none')
  };

  // this.shakevalue = false

  // methode shake avec le shake et le remove
  // quel est la valeur de shake value si c'est true elle fait sinon elle fait rien
  // nouveau data action qui ecoute le click avec nouvelle methode qui passe le shake value à false

  shake() {
    if (this.shakeValue == 'true')
    this.picTarget.classList.add('pic-shake');
    this.navigateTarget.classList.remove('d-none');
  };

  connect() {
    // const targets = this.contentTargets
    // targets.forEach((target) => {
      // if (tabs()) {
      //   setTimeout(() => this.picTarget.classList.add('pic-shake'), 2500);
      //   this.navigateTarget.classList.add('load');
      //   setTimeout(() => this.navigateTarget.classList.remove('d-none'), 2500);
      // }
      if (this.contentTarget.classList.contains('d-none')) {
        // console.log(target.classList)
        setTimeout(() => this.shake(), 2500);
        this.navigateTarget.classList.add('load');
      }
    // })
  };
}
