// Mermaid 12.3 calls selection.transition() for node tooltips but imports only
// `select` from d3. d3 is marked sideEffects:false, so webpack drops the
// d3-transition prototype patch and hovering a diagram node throws
// "tooltipElem.transition is not a function". Import it for its side effect.
import "d3-transition";
