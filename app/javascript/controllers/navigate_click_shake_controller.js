import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['pic', 'content', 'navigate']
  static values = {
    help: Boolean
  }

  tabs() {
    this.helpValue = 'false'
    const links = this.contentTargets
    links.forEach((link) => {
      link.classList.add('load')
      link.classList.toggle('d-none')
    })
    this.navigateTarget.classList.add('d-none');
  };

  shake() {
    if (this.helpValue) {
      this.picTarget.classList.add('pic-shake');
      this.navigateTarget.classList.add('load');
      this.navigateTarget.classList.remove('d-none');
    }
  };

  connect() {
      setTimeout(() => this.shake(), 3000);
  };
}
