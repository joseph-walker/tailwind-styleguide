import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	check_outros,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out
} from "/web_modules/svelte/internal.js";

import { state$ } from "./stores/state.js";
import Splash from "./components/views/Splash.js";
import Loading from "./components/views/Loading.js";
import Display from "./components/views/Display.js";

function create_if_block_2(ctx) {
	let display;
	let current;
	display = new Display({});

	return {
		c() {
			create_component(display.$$.fragment);
		},
		m(target, anchor) {
			mount_component(display, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(display.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(display.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(display, detaching);
		}
	};
}

// (34:37) 
function create_if_block_1(ctx) {
	let loading;
	let current;
	loading = new Loading({});

	return {
		c() {
			create_component(loading.$$.fragment);
		},
		m(target, anchor) {
			mount_component(loading, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(loading.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(loading.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(loading, detaching);
		}
	};
}

// (32:0) {#if $state$.view === "splash"}
function create_if_block(ctx) {
	let splash;
	let current;
	splash = new Splash({});

	return {
		c() {
			create_component(splash.$$.fragment);
		},
		m(target, anchor) {
			mount_component(splash, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(splash.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(splash.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(splash, detaching);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$state$*/ ctx[0].view === "splash") return 0;
		if (/*$state$*/ ctx[0].view === "loading") return 1;
		if (/*$state$*/ ctx[0].view === "display") return 2;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx, -1))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index !== previous_block_index) {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $state$;
	component_subscribe($$self, state$, $$value => $$invalidate(0, $state$ = $$value));
	return [$state$];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;