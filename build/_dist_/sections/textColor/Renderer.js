import './Renderer.css.proxy.js';
/* src/sections/textColor/Renderer.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	null_to_empty,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "/web_modules/svelte/internal.js";

import StyleguideSection from "../../components/StyleguideSection.js";
import ClassName from "../../components/ClassName.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (42:4) <ClassName>
function create_default_slot_1(ctx) {
	let t0;
	let t1_value = /*c*/ ctx[2].name + "";
	let t1;

	return {
		c() {
			t0 = text(".");
			t1 = text(t1_value);
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*classes*/ 1 && t1_value !== (t1_value = /*c*/ ctx[2].name + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (39:2) {#each classes as c}
function create_each_block(ctx) {
	let div;
	let p;
	let p_class_value;
	let t0;
	let classname;
	let t1;
	let current;

	classname = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div = element("div");
			p = element("p");
			t0 = space();
			create_component(classname.$$.fragment);
			t1 = space();
			attr(p, "class", p_class_value = "" + (null_to_empty(/*c*/ ctx[2].name) + " svelte-grpwa5"));
			attr(div, "class", "color-wrapper");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, p);
			append(div, t0);
			mount_component(classname, div, null);
			append(div, t1);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*classes*/ 1 && p_class_value !== (p_class_value = "" + (null_to_empty(/*c*/ ctx[2].name) + " svelte-grpwa5"))) {
				attr(p, "class", p_class_value);
			}

			const classname_changes = {};

			if (dirty & /*$$scope, classes*/ 33) {
				classname_changes.$$scope = { dirty, ctx };
			}

			classname.$set(classname_changes);
		},
		i(local) {
			if (current) return;
			transition_in(classname.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(classname.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(classname);
		}
	};
}

// (37:0) <StyleguideSection name="Text Colors" description="Only you can prevent text-yellow-200 on a bg-white background." variants={variants}>
function create_default_slot(ctx) {
	let div;
	let current;
	let each_value = /*classes*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div, "class", "colors svelte-grpwa5");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*classes*/ 1) {
				each_value = /*classes*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let styleguidesection;
	let current;

	styleguidesection = new StyleguideSection({
			props: {
				name: "Text Colors",
				description: "Only you can prevent text-yellow-200 on a bg-white background.",
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

			if (dirty & /*$$scope, classes*/ 33) {
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