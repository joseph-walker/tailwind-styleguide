import './Renderer.css.proxy.js';
/* src/sections/lineHeight/Renderer.svelte generated by Svelte v3.24.0 */
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
} from "/tailwind-styleguide/web_modules/svelte/internal.js";

import StyleguideSection from "../../components/StyleguideSection.js";
import ClassName from "../../components/ClassName.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (43:4) <ClassName>
function create_default_slot_1(ctx) {
	let t0;
	let t1_value = /*className*/ ctx[3] + "";
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
			if (dirty & /*meta*/ 1 && t1_value !== (t1_value = /*className*/ ctx[3] + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (41:2) {#each meta.classNames as className}
function create_each_block(ctx) {
	let div;
	let classname;
	let t0;
	let p;
	let t1;
	let p_class_value;
	let t2;
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
			create_component(classname.$$.fragment);
			t0 = space();
			p = element("p");
			t1 = text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum dolor accusantium itaque voluptate dolores enim aliquid, nisi cupiditate, veritatis non nam! Nesciunt nihil doloribus, suscipit cumque corrupti dolor dolorum!");
			t2 = space();
			attr(p, "class", p_class_value = "" + (null_to_empty(/*className*/ ctx[3]) + " svelte-1583b8t"));
			attr(div, "class", "leading-cell svelte-1583b8t");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(classname, div, null);
			append(div, t0);
			append(div, p);
			append(p, t1);
			append(div, t2);
			current = true;
		},
		p(ctx, dirty) {
			const classname_changes = {};

			if (dirty & /*$$scope, meta*/ 65) {
				classname_changes.$$scope = { dirty, ctx };
			}

			classname.$set(classname_changes);

			if (!current || dirty & /*meta*/ 1 && p_class_value !== (p_class_value = "" + (null_to_empty(/*className*/ ctx[3]) + " svelte-1583b8t"))) {
				attr(p, "class", p_class_value);
			}
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

// (39:0) <StyleguideSection name="Line Height" description="Respect the personal space of your text." variants={meta.variants}>
function create_default_slot(ctx) {
	let div;
	let current;
	let each_value = /*meta*/ ctx[0].classNames;
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

			attr(div, "class", "text svelte-1583b8t");
			attr(div, "style", /*gridTemplateRows*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*meta*/ 1) {
				each_value = /*meta*/ ctx[0].classNames;
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

			if (!current || dirty & /*gridTemplateRows*/ 2) {
				attr(div, "style", /*gridTemplateRows*/ ctx[1]);
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
				name: "Line Height",
				description: "Respect the personal space of your text.",
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

			if (dirty & /*$$scope, gridTemplateRows, meta*/ 67) {
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

	let numRows;
	let gridTemplateRows;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*meta*/ 1) {
			$: $$invalidate(2, numRows = Math.ceil(meta.classNames.length / 2));
		}

		if ($$self.$$.dirty & /*numRows*/ 4) {
			$: $$invalidate(1, gridTemplateRows = `grid-template-rows: repeat(${numRows}, 1fr)`);
		}
	};

	return [meta, gridTemplateRows];
}

class Renderer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { meta: 0 });
	}
}

export default Renderer;