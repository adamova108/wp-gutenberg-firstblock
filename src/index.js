import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType("blocks-course/firstblock", {
    edit: function () {
        return <p className="classa">Edit JSXA</p>;
    },
    save: function () {
        return <p className="blassa">Save JSX</p>;
    },
});
