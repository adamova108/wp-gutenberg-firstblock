import { useBlockProps } from '@wordpress/block-editor';
import './style-editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	//console.log(blockProps);
	return <p {...blockProps}>Edit JSXA</p>;
}
