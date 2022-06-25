import { useBlockProps } from '@wordpress/block-editor';
import "./style.scss";

export default function save () {
    const blockProps = useBlockProps.save()
    return <button {...blockProps}>SAVE MODE JSX</button>
}