import { useBlockProps } from '@wordpress/block-editor';
import "./editor.scss";

export default function edit() {
    const blockProps = useBlockProps()
	return <button {...blockProps}>EDIT MODE JSX</button>
}
