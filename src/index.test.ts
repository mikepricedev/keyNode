import {expect} from 'chai';
import {default as KeyNode, BaseKeyNode} from './index';

describe(`KeyNode (default)`,()=>{

  let rootKeyLib = new Map<string, KeyNode>();

  let fooKey = new KeyNode('foo', rootKeyLib);
  let fooBarKey = new KeyNode('bar', fooKey);
  let fooBazKey = new KeyNode('baz', fooKey);
  let fooBarQuxKey = new KeyNode('qux', fooBarKey);

  beforeEach(()=>{

    rootKeyLib = new Map<string, KeyNode>();

    fooKey = new KeyNode('foo', rootKeyLib);
    fooBarKey = new KeyNode('bar', fooKey);
    fooBazKey = new KeyNode('baz', fooKey);
    fooBarQuxKey = new KeyNode('qux', fooBarKey);

  });

  describe('Instaniation',()=>{

    it(`Extends 'BaseKeyNode'.`,()=>{

      expect(fooKey).to.be.instanceof(BaseKeyNode);

    });

  });

  describe(`Methods`,()=>{

    describe(`addSibling`,()=>{

      it(`Adds a sibling to KeyNode and returns new sibling KeyNode.`,()=>{

        let fooBarQuuxKey = fooBarQuxKey.addSibling('quux');

        expect([...fooBarQuxKey.siblings()]).to.have.ordered.members([fooBarQuuxKey]);

      });

    });

    describe(`addChild`,()=>{

      it(`Adds a child to KeyNode and returns new child KeyNode.`,()=>{

        let fooBarQuxQuuxKey = fooBarQuxKey.addChild('quux');

        expect([...fooBarQuxKey.children()]).to.have.ordered.members([fooBarQuxQuuxKey]);

      });

    });

  });

})