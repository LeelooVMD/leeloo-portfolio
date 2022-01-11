import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['content']

  tabs() {
    // gaaconsole.log(this.contentTargets)
    const links = this.contentTargets
    // this.contentTargets.classList.remove('d-none')
    links.forEach((link) => {
      link.classList.add('load')
      link.classList.toggle('d-none')
    })
  // your logic (controller actions)
  };
}
