/* src/sections/borderRadius/Renderer.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	create_component,
	destroy_component,
	init,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out
} from "/tailwind-styleguide/web_modules/svelte/internal.js";

import StyleguideSection from "../../components/StyleguideSection.js";
import Grid from "../../components/Swatches/Grid.js";

function create_default_slot(ctx) {
	let grid;
	let current;

	grid = new Grid({
			props: {
				swatches: /*meta*/ ctx[0].classNames,
				filled: true,
				stroked: true
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
			if (dirty & /*meta*/ 1) grid_changes.swatches = /*meta*/ ctx[0].classNames;
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
				name: "Border Radius",
				description: "For rounding those sharp corners.",
				variants: /*meta*/ ctx[0].variants,
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
			if (dirty & /*meta*/ 1) styleguidesection_changes.variants = /*meta*/ ctx[0].variants;

			if (dirty & /*$$scope, meta*/ 3) {
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

function instance($$self, $$props, $$invalidate) {
	let { meta } = $$props;

	$$self.$set = $$props => {
		if ("meta" in $$props) $$invalidate(0, meta = $$props.meta);
	};

	return [meta];
}

class Renderer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { meta: 0 });
	}
}

export default Renderer;