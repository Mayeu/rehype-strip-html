var visit = require("unist-util-visit");

module.exports = stripHtml;

function stripHtml(config) {
  /* Exposing the compiler function */
  this.Compiler = compiler;

  function compiler(tree) {
    let fragments = [];
    /* We visit each text node, and we push the value in the fragments array */
    visit(tree, "text", function(node) {
      fragments.push(node.value);
    });
    /* We recompose the final document */
    return fragments.join("");
  }
}
