import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['pic']

  connect() {
    setTimeout(() => this.picTarget.classList.add('pic-shake'), 2000);
  };
}
