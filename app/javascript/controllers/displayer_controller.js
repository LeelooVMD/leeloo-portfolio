import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['content']

  tabs() {
    // console.log(this.contentTargets)
    const links = this.contentTargets
    // this.contentTargets.classList.remove('d-none')
    links.forEach((link) => {
      link.classList.remove('d-none')
    })
  // your logic (controller actions)
  };
}
