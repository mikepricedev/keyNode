"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KeyNode_1 = require("./KeyNode");
exports.ROOT_KEYS = KeyNode_1.ROOT_KEYS;
exports.BaseKeyNode = KeyNode_1.default;
class KeyNode extends KeyNode_1.default {
    constructor(key, parent = new Map()) {
        super(key, parent);
    }
    //Methods
    addSibling(siblingKey) {
        return new KeyNode(siblingKey, this.IS_ROOT_KEY ? this[KeyNode_1.ROOT_KEYS] : this.PARENT);
    }
    addChild(childKey) {
        return new KeyNode(childKey, this);
    }
}
exports.default = KeyNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBNEQ7QUFFdkMsb0JBRmIsbUJBQVMsQ0FFYTtBQUF0QixzQkFGc0IsaUJBQVcsQ0FFdEI7QUFFbkIsYUFBNkIsU0FBUSxpQkFBb0I7SUFFdkQsWUFBWSxHQUFVLEVBQUUsU0FBd0MsSUFBSSxHQUFHLEVBQUU7UUFFdkUsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBRUQsU0FBUztJQUNULFVBQVUsQ0FBQyxVQUFpQjtRQUUxQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkYsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFlO1FBRXRCLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXJDLENBQUM7Q0FFRjtBQXJCRCwwQkFxQkMifQ==