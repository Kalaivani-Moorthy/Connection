import { X as ensure_array_like, S as pop, Y as stringify, Q as push } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let rows = 6;
  let columns = 7;
  let board = Array.from({ length: rows }, () => Array(columns).fill(null));
  let player1 = "";
  let player2 = "";
  const each_array = ensure_array_like(board);
  $$payload.out += `<div class="game-container svelte-eop2vj"><h1>Connect 4</h1> <div class="board svelte-eop2vj"><!--[-->`;
  for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
    let row = each_array[rowIndex];
    const each_array_1 = ensure_array_like(row);
    $$payload.out += `<!--[-->`;
    for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
      let cell = each_array_1[colIndex];
      $$payload.out += `<div${attr("class", `cell ${stringify(cell)} svelte-eop2vj`)}></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="overlay svelte-eop2vj"><div class="popup start-modal svelte-eop2vj"><h2>Enter Player Names</h2> <input type="text"${attr("value", player1)} placeholder="Player 1 (Red)" class="svelte-eop2vj"> <input type="text"${attr("value", player2)} placeholder="Player 2 (Yellow)" class="svelte-eop2vj"> <button class="svelte-eop2vj">Start Game</button></div></div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
