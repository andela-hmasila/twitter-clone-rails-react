//Important for server-side rendering, which I didn't end up using to get Redux and ActionCable to play nice.
window.global.Root  = require('./components/root.jsx').default;
