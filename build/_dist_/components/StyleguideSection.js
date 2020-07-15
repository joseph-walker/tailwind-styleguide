import './StyleguideSection.css.proxy.js';
/* src/components/StyleguideSection.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out,
	update_slot
} from "/web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let section;
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let em;
	let t2;
	let t3;
	let div2;
	let current;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			section = element("section");
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text(/*name*/ ctx[0]);
			t1 = space();
			em = element("em");
			t2 = text(/*description*/ ctx[1]);
			t3 = space();
			div2 = element("div");
			if (default_slot) default_slot.c();
			attr(h2, "class", "svelte-pm61xa");
			attr(em, "class", "svelte-pm61xa");
			attr(div0, "class", "sticky svelte-pm61xa");
			attr(div1, "class", "left svelte-pm61xa");
			attr(div2, "class", "right svelte-pm61xa");
			attr(section, "class", "styleguide-section svelte-pm61xa");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div1);
			append(div1, div0);
			append(div0, h2);
			append(h2, t0);
			append(div0, t1);
			append(div0, em);
			append(em, t2);
			append(section, t3);
			append(section, div2);

			if (default_slot) {
				default_slot.m(div2, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*name*/ 1) set_data(t0, /*name*/ ctx[0]);
			if (!current || dirty & /*description*/ 2) set_data(t2, /*description*/ ctx[1]);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;
	let { description = "" } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [name, description, $$scope, $$slots];
}

class StyleguideSection extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0, description: 1 });
	}
}

export default StyleguideSection;