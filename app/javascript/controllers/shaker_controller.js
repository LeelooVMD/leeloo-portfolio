import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['pic']

  // shaking(() => {
  //   this.contentTarget.classList.add('pik-shake');
  // });

  // setTimeout(shaking, 5000);

  // setTimeout(connect(), 5000);
  connect() {
    console.log(this.element.contentTarget)
    // this.contentTarget.classList.add('pik-shake')
  };
}
