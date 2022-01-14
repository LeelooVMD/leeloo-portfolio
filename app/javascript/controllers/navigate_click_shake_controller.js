import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['pic', 'content', 'navigate']


  tabs() {
    const links = this.contentTargets
    links.forEach((link) => {
      link.classList.add('load')
      link.classList.toggle('d-none')
    })
    this.navigateTarget.classList.add('d-none')
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
        setTimeout(() => this.picTarget.classList.add('pic-shake'), 2500);
        this.navigateTarget.classList.add('load');
        setTimeout(() => this.navigateTarget.classList.remove('d-none'), 2500);
      }
    // })
  };
}
