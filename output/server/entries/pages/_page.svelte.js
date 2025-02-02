import "clsx";
import { c as pop, p as push } from "../../chunks/index.js";
import "../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="landing svelte-ue4sjx"><h1>Welcome to Connect 4</h1> <p>Challenge your friends and see who can Connect 4 first!</p> <button class="start-button svelte-ue4sjx">Start Game</button></div>`;
  pop();
}
export {
  _page as default
};
