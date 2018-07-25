import {ROOT_KEYS, default as BaseKeyNode} from './KeyNode';

export {BaseKeyNode, ROOT_KEYS};

export default class KeyNode extends BaseKeyNode<KeyNode> {

  constructor(key:string, parent:KeyNode | Map<string, KeyNode> = new Map()){

    super(key, parent);

  }

  //Methods
  addSibling(siblingKey:string):KeyNode {

    return new KeyNode(siblingKey, this.IS_ROOT_KEY ? this[ROOT_KEYS] : this.PARENT);

  }

  addChild(childKey:string):KeyNode {

    return new KeyNode(childKey, this);

  }

}