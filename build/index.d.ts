import { ROOT_KEYS, default as BaseKeyNode } from './KeyNode';
export { BaseKeyNode, ROOT_KEYS };
export default class KeyNode extends BaseKeyNode<KeyNode> {
    constructor(key: string, parent?: KeyNode | Map<string, KeyNode>);
    addSibling(siblingKey: string): KeyNode;
    addChild(childKey: string): KeyNode;
}
