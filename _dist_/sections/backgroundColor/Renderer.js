/* src/sections/backgroundColor/Renderer.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	create_component,
	destroy_component,
	init,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out
} from "/web_modules/svelte/internal.js";

import StyleguideSection from "../../components/StyleguideSection.js";
import Grid from "../../components/swatches/Grid.js";

function create_default_slot(ctx) {
	let grid;
	let current;

	grid = new Grid({
			props: {
				swatches: /*classes*/ ctx[0].map(func),
				circle: true,
				fancy: true
			}
		});

	return {
		c() {
			create_component(grid.$$.fragment);
		},
		m(target, anchor) {
			mount_component(grid, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const grid_changes = {};
			if (dirty & /*classes*/ 1) grid_changes.swatches = /*classes*/ ctx[0].map(func);
			grid.$set(grid_changes);
		},
		i(local) {
			if (current) return;
			transition_in(grid.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(grid.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(grid, detaching);
		}
	};
}

function create_fragment(ctx) {
	let styleguidesection;
	let current;

	styleguidesection = new StyleguideSection({
			props: {
				name: "Background Colors",
				description: "Most of the colors of the rainbow.",
				variants: /*variants*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(styleguidesection.$$.fragment);
		},
		m(target, anchor) {
			mount_component(styleguidesection, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const styleguidesection_changes = {};
			if (dirty & /*variants*/ 2) styleguidesection_changes.variants = /*variants*/ ctx[1];

			if (dirty & /*$$scope, classes*/ 5) {
				styleguidesection_changes.$$scope = { dirty, ctx };
			}

			styleguidesection.$set(styleguidesection_changes);
		},
		i(local) {
			if (current) return;
			transition_in(styleguidesection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(styleguidesection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(styleguidesection, detaching);
		}
	};
}

const func = c => c.name;

function instance($$self, $$props, $$invalidate) {
	let { classes } = $$props;
	let { variants } = $$props;

	$$self.$set = $$props => {
		if ("classes" in $$props) $$invalidate(0, classes = $$props.classes);
		if ("variants" in $$props) $$invalidate(1, variants = $$props.variants);
	};

	return [classes, variants];
}

class Renderer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { classes: 0, variants: 1 });
	}
}

export default Renderer;