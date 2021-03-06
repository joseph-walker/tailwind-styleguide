/* src/components/views/Display.svelte generated by Svelte v3.24.0 */
import {
	HtmlTag,
	SvelteComponent,
	append,
	create_component,
	destroy_component,
	detach,
	empty,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "/web_modules/svelte/internal.js";

import BackgroundColor from "./../../sections/backgroundColor/Renderer.js";
import BorderRadius from "./../../sections/borderRadius/Renderer.js";
import BorderColor from "./../../sections/borderColor/Renderer.js";
import BoxShadow from "./../../sections/boxShadow/Renderer.js";
import FontSize from "./../../sections/fontSize/Renderer.js";
import LineHeight from "./../../sections/lineHeight/Renderer.js";
import Margin from "./../../sections/margin/Renderer.js";
import Width from "./../../sections/width/Renderer.js";
import Padding from "./../../sections/padding/Renderer.js";
import TextColor from "./../../sections/textColor/Renderer.js";
import FontWeight from "./../../sections/fontWeight/Renderer.js";

function create_fragment(ctx) {
	let html_tag;
	let raw_value = `<style type="text/css">${/*parsed*/ ctx[0].rules.join("\n")}</style>` + "";
	let html_anchor;
	let t0;
	let backgroundcolor;
	let t1;
	let borderradius;
	let t2;
	let bordercolor;
	let t3;
	let boxshadow;
	let t4;
	let padding;
	let t5;
	let margin;
	let t6;
	let width;
	let t7;
	let fontsize;
	let t8;
	let fontweight;
	let t9;
	let lineheight;
	let t10;
	let textcolor;
	let current;

	backgroundcolor = new BackgroundColor({
			props: {
				classes: /*parsed*/ ctx[0].collection["backgroundColor"].classes,
				variants: /*parsed*/ ctx[0].collection["backgroundColor"].variants
			}
		});

	borderradius = new BorderRadius({
			props: {
				classes: /*parsed*/ ctx[0].collection["borderRadius"].classes,
				variants: /*parsed*/ ctx[0].collection["borderRadius"].variants
			}
		});

	bordercolor = new BorderColor({
			props: {
				classes: /*parsed*/ ctx[0].collection["borderColor"].classes,
				variants: /*parsed*/ ctx[0].collection["borderColor"].variants
			}
		});

	boxshadow = new BoxShadow({
			props: {
				classes: /*parsed*/ ctx[0].collection["boxShadow"].classes,
				variants: /*parsed*/ ctx[0].collection["boxShadow"].variants
			}
		});

	padding = new Padding({
			props: {
				classes: /*parsed*/ ctx[0].collection["padding"].classes,
				variants: /*parsed*/ ctx[0].collection["padding"].variants
			}
		});

	margin = new Margin({
			props: {
				classes: /*parsed*/ ctx[0].collection["margin"].classes,
				variants: /*parsed*/ ctx[0].collection["margin"].variants
			}
		});

	width = new Width({
			props: {
				classes: /*parsed*/ ctx[0].collection["width"].classes,
				variants: /*parsed*/ ctx[0].collection["width"].variants
			}
		});

	fontsize = new FontSize({
			props: {
				classes: /*parsed*/ ctx[0].collection["fontSize"].classes,
				variants: /*parsed*/ ctx[0].collection["fontSize"].variants
			}
		});

	fontweight = new FontWeight({
			props: {
				classes: /*parsed*/ ctx[0].collection["fontWeight"].classes,
				variants: /*parsed*/ ctx[0].collection["fontWeight"].variants
			}
		});

	lineheight = new LineHeight({
			props: {
				classes: /*parsed*/ ctx[0].collection["lineHeight"].classes,
				variants: /*parsed*/ ctx[0].collection["lineHeight"].variants
			}
		});

	textcolor = new TextColor({
			props: {
				classes: /*parsed*/ ctx[0].collection["textColor"].classes,
				variants: /*parsed*/ ctx[0].collection["textColor"].variants
			}
		});

	return {
		c() {
			html_anchor = empty();
			t0 = space();
			create_component(backgroundcolor.$$.fragment);
			t1 = space();
			create_component(borderradius.$$.fragment);
			t2 = space();
			create_component(bordercolor.$$.fragment);
			t3 = space();
			create_component(boxshadow.$$.fragment);
			t4 = space();
			create_component(padding.$$.fragment);
			t5 = space();
			create_component(margin.$$.fragment);
			t6 = space();
			create_component(width.$$.fragment);
			t7 = space();
			create_component(fontsize.$$.fragment);
			t8 = space();
			create_component(fontweight.$$.fragment);
			t9 = space();
			create_component(lineheight.$$.fragment);
			t10 = space();
			create_component(textcolor.$$.fragment);
			html_tag = new HtmlTag(html_anchor);
		},
		m(target, anchor) {
			html_tag.m(raw_value, document.head);
			append(document.head, html_anchor);
			insert(target, t0, anchor);
			mount_component(backgroundcolor, target, anchor);
			insert(target, t1, anchor);
			mount_component(borderradius, target, anchor);
			insert(target, t2, anchor);
			mount_component(bordercolor, target, anchor);
			insert(target, t3, anchor);
			mount_component(boxshadow, target, anchor);
			insert(target, t4, anchor);
			mount_component(padding, target, anchor);
			insert(target, t5, anchor);
			mount_component(margin, target, anchor);
			insert(target, t6, anchor);
			mount_component(width, target, anchor);
			insert(target, t7, anchor);
			mount_component(fontsize, target, anchor);
			insert(target, t8, anchor);
			mount_component(fontweight, target, anchor);
			insert(target, t9, anchor);
			mount_component(lineheight, target, anchor);
			insert(target, t10, anchor);
			mount_component(textcolor, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*parsed*/ 1) && raw_value !== (raw_value = `<style type="text/css">${/*parsed*/ ctx[0].rules.join("\n")}</style>` + "")) html_tag.p(raw_value);
			const backgroundcolor_changes = {};
			if (dirty & /*parsed*/ 1) backgroundcolor_changes.classes = /*parsed*/ ctx[0].collection["backgroundColor"].classes;
			if (dirty & /*parsed*/ 1) backgroundcolor_changes.variants = /*parsed*/ ctx[0].collection["backgroundColor"].variants;
			backgroundcolor.$set(backgroundcolor_changes);
			const borderradius_changes = {};
			if (dirty & /*parsed*/ 1) borderradius_changes.classes = /*parsed*/ ctx[0].collection["borderRadius"].classes;
			if (dirty & /*parsed*/ 1) borderradius_changes.variants = /*parsed*/ ctx[0].collection["borderRadius"].variants;
			borderradius.$set(borderradius_changes);
			const bordercolor_changes = {};
			if (dirty & /*parsed*/ 1) bordercolor_changes.classes = /*parsed*/ ctx[0].collection["borderColor"].classes;
			if (dirty & /*parsed*/ 1) bordercolor_changes.variants = /*parsed*/ ctx[0].collection["borderColor"].variants;
			bordercolor.$set(bordercolor_changes);
			const boxshadow_changes = {};
			if (dirty & /*parsed*/ 1) boxshadow_changes.classes = /*parsed*/ ctx[0].collection["boxShadow"].classes;
			if (dirty & /*parsed*/ 1) boxshadow_changes.variants = /*parsed*/ ctx[0].collection["boxShadow"].variants;
			boxshadow.$set(boxshadow_changes);
			const padding_changes = {};
			if (dirty & /*parsed*/ 1) padding_changes.classes = /*parsed*/ ctx[0].collection["padding"].classes;
			if (dirty & /*parsed*/ 1) padding_changes.variants = /*parsed*/ ctx[0].collection["padding"].variants;
			padding.$set(padding_changes);
			const margin_changes = {};
			if (dirty & /*parsed*/ 1) margin_changes.classes = /*parsed*/ ctx[0].collection["margin"].classes;
			if (dirty & /*parsed*/ 1) margin_changes.variants = /*parsed*/ ctx[0].collection["margin"].variants;
			margin.$set(margin_changes);
			const width_changes = {};
			if (dirty & /*parsed*/ 1) width_changes.classes = /*parsed*/ ctx[0].collection["width"].classes;
			if (dirty & /*parsed*/ 1) width_changes.variants = /*parsed*/ ctx[0].collection["width"].variants;
			width.$set(width_changes);
			const fontsize_changes = {};
			if (dirty & /*parsed*/ 1) fontsize_changes.classes = /*parsed*/ ctx[0].collection["fontSize"].classes;
			if (dirty & /*parsed*/ 1) fontsize_changes.variants = /*parsed*/ ctx[0].collection["fontSize"].variants;
			fontsize.$set(fontsize_changes);
			const fontweight_changes = {};
			if (dirty & /*parsed*/ 1) fontweight_changes.classes = /*parsed*/ ctx[0].collection["fontWeight"].classes;
			if (dirty & /*parsed*/ 1) fontweight_changes.variants = /*parsed*/ ctx[0].collection["fontWeight"].variants;
			fontweight.$set(fontweight_changes);
			const lineheight_changes = {};
			if (dirty & /*parsed*/ 1) lineheight_changes.classes = /*parsed*/ ctx[0].collection["lineHeight"].classes;
			if (dirty & /*parsed*/ 1) lineheight_changes.variants = /*parsed*/ ctx[0].collection["lineHeight"].variants;
			lineheight.$set(lineheight_changes);
			const textcolor_changes = {};
			if (dirty & /*parsed*/ 1) textcolor_changes.classes = /*parsed*/ ctx[0].collection["textColor"].classes;
			if (dirty & /*parsed*/ 1) textcolor_changes.variants = /*parsed*/ ctx[0].collection["textColor"].variants;
			textcolor.$set(textcolor_changes);
		},
		i(local) {
			if (current) return;
			transition_in(backgroundcolor.$$.fragment, local);
			transition_in(borderradius.$$.fragment, local);
			transition_in(bordercolor.$$.fragment, local);
			transition_in(boxshadow.$$.fragment, local);
			transition_in(padding.$$.fragment, local);
			transition_in(margin.$$.fragment, local);
			transition_in(width.$$.fragment, local);
			transition_in(fontsize.$$.fragment, local);
			transition_in(fontweight.$$.fragment, local);
			transition_in(lineheight.$$.fragment, local);
			transition_in(textcolor.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(backgroundcolor.$$.fragment, local);
			transition_out(borderradius.$$.fragment, local);
			transition_out(bordercolor.$$.fragment, local);
			transition_out(boxshadow.$$.fragment, local);
			transition_out(padding.$$.fragment, local);
			transition_out(margin.$$.fragment, local);
			transition_out(width.$$.fragment, local);
			transition_out(fontsize.$$.fragment, local);
			transition_out(fontweight.$$.fragment, local);
			transition_out(lineheight.$$.fragment, local);
			transition_out(textcolor.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			detach(html_anchor);
			if (detaching) html_tag.d();
			if (detaching) detach(t0);
			destroy_component(backgroundcolor, detaching);
			if (detaching) detach(t1);
			destroy_component(borderradius, detaching);
			if (detaching) detach(t2);
			destroy_component(bordercolor, detaching);
			if (detaching) detach(t3);
			destroy_component(boxshadow, detaching);
			if (detaching) detach(t4);
			destroy_component(padding, detaching);
			if (detaching) detach(t5);
			destroy_component(margin, detaching);
			if (detaching) detach(t6);
			destroy_component(width, detaching);
			if (detaching) detach(t7);
			destroy_component(fontsize, detaching);
			if (detaching) detach(t8);
			destroy_component(fontweight, detaching);
			if (detaching) detach(t9);
			destroy_component(lineheight, detaching);
			if (detaching) detach(t10);
			destroy_component(textcolor, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { parsed } = $$props;

	$$self.$set = $$props => {
		if ("parsed" in $$props) $$invalidate(0, parsed = $$props.parsed);
	};

	return [parsed];
}

class Display extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { parsed: 0 });
	}
}

export default Display;