import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit.jsx';
import Save from './save.jsx';

import './style.scss';

registerBlockType('blocks-course/firstblock', {
	edit: Edit,
	save: Save,
});
