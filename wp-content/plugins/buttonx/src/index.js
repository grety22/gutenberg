import { registerBlockType } from '@wordpress/blocks';
import "./style.scss";
import Save from './save';
import Edit from './edit';

registerBlockType( 'castle-blocks/buttonx', {
	edit: Edit,
	save: Save,
});
