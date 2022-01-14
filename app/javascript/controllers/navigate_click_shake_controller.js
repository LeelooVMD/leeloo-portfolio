import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['pic', 'content', 'navigate']

  tabs() {
    const links = this.contentTargets
    links.forEach((link) => {
      link.classList.add('load')
      link.classList.toggle('d-none')
    })
  };

  connect() {
    const targets = this.contentTargets
    targets.forEach((target) => {
      if (target.classList.contains('d-none')) {
        setTimeout(() => this.picTarget.classList.add('pic-shake'), 2500);
        this.navigateTarget.classList.add('load');
        setTimeout(() => this.navigateTarget.classList.remove('d-none'), 2500);
      }
    })
  };
}
