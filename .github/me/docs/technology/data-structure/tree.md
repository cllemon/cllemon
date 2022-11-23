---
title: 树
description: 树结构
date: 2019-10-03
lang: "简体中文"
tags:
  - "数据结构与算法#000#ffff"
  - "树"
---

# 树

## 概念说明

- 逻辑上，除了根节点之外每一个节点只有一个父结点
- 除了叶节点之外每个节点都有一个或多个子节点
- 父节点与子节点之间用指针连接
- 遍历一棵树的常用方式
  - 深度优先搜索(DFS): 从根节点开始，逐次访问最深节点。 (堆栈)
  - 广度优先搜索(BFS): 逐层访问。同层节点，从左到右依次访问。(队列)

## 代码实现

```ts
class TreeNode<D = unknown> {
  public data?: D;
  public parent: null | TreeNode = null;
  public children: TreeNode[] = [];

  constructor(data: D) {
    this.data = data;
  }
}

class Tree<D = unknown> {
  public root: TreeNode;

  constructor(data: D) {
    this.root = new TreeNode(data);
  }

  DFS(cb: (node: TreeNode) => void) {
    (function search(node: TreeNode) {
      if (node instanceof TreeNode) {
        for (const _node of node.children) {
          search(_node);
        }

        cb(node);
      }
    })(this.root);
  }

  BFS(cb: (node: TreeNode) => void) {
    const queue = [this.root];
    let node = queue.splice(0, 1)[0];

    while (node) {
      for (const _node of node.children) {
        queue.push(_node);
      }
      cb(node);

      node = queue.splice(0, 1)[0];
    }
  }

  add<D>(data: D, position: (node: TreeNode) => boolean) {
    const node = new TreeNode(data);

    let parentNode: TreeNode | undefined;

    this.DFS((node) => {
      if (position(node)) {
        parentNode = node;
      }
    });

    if (parentNode) {
      parentNode.children.push(node);
      node.parent = parentNode;
    } else {
      throw new Error("异常操作: 无法将节点添加到不存在的父节点上");
    }
  }

  remove(position: (node: TreeNode) => boolean) {
    let removedNode: TreeNode | undefined;

    this.DFS((node) => {
      if (position(node)) {
        removedNode = node;
      }
    });

    if (removedNode) {
      if (!removedNode.parent) {
        this.root = new TreeNode(null);
      } else {
        const children = removedNode.parent.children;
        const index = children.findIndex((n) => n.data === removedNode?.data);
        children.splice(index, 1);
      }
      return removedNode;
    } else {
      throw new Error("异常操作: 节点不存在");
    }
  }
}
```

::: details Usage

```ts
const tree = new Tree({ id: 0, msg: "我是祖宗" });
tree.add({ id: 1, msg: "我是大儿子" }, (node) => node.data.id === 0);
tree.add({ id: 11, msg: "我是大儿子的大儿子" }, (node) => node.data.id === 1);
tree.add(
  { id: 111, msg: "我是大儿子的大儿子的大儿子" },
  (node) => node.data.id === 11
);
tree.add(
  {
    id: 112,
    msg: "我是大儿子的大儿子的二儿子",
  },
  (node) => node.data.id === 11
);
tree.add(
  {
    id: 113,
    msg: "我是大儿子的大儿子的三儿子",
  },
  (node) => node.data.id === 11
);
tree.add(
  {
    id: 114,
    msg: "我是大儿子的大儿子的四儿子",
  },
  (node) => node.data.id === 11
);
tree.add(
  {
    id: 115,
    msg: "我是大儿子的大儿子的五儿子",
  },
  (node) => node.data.id === 11
);
tree.add(
  {
    id: 12,
    msg: "我是大儿子的二儿子",
  },
  (node) => node.data.id === 1
);
tree.add(
  {
    id: 13,
    msg: "我是大儿子的三儿子",
  },
  (node) => node.data.id === 1
);
tree.add(
  {
    id: 14,
    msg: "我是大儿子的四儿子",
  },
  (node) => node.data.id === 1
);
tree.add(
  {
    id: 15,
    msg: "我是大儿子的五儿子",
  },
  (node) => node.data.id === 1
);
tree.add(
  {
    id: 2,
    msg: "我是二儿子",
  },
  (node) => node.data.id === 0
);
tree.add(
  {
    id: 3,
    msg: "我是三儿子",
  },
  (node) => node.data.id === 0
);
tree.add(
  {
    id: 4,
    msg: "我是四儿子",
  },
  (node) => node.data.id === 0
);
tree.add(
  {
    id: 5,
    msg: "我是五儿子",
  },
  (node) => node.data.id === 0
);
tree.add(
  {
    id: 51,
    msg: "我是五儿子的大儿子",
  },
  (node) => node.data.id === 5
);
tree.add(
  {
    id: 52,
    msg: "我是五儿子的二儿子",
  },
  (node) => node.data.id === 5
);
tree.add(
  {
    id: 53,
    msg: "我是五儿子的三儿子",
  },
  (node) => node.data.id === 5
);
tree.add(
  {
    id: 54,
    msg: "我是五儿子的四儿子",
  },
  (node) => node.data.id === 5
);

console.log(tree);

tree.remove((node) => node.data.id === 53);
```

:::

## 二叉树

### 概念说明

- 二叉树，树的一种特殊结构
- 二叉树，每个节点最多只能有两个子节点
- 遍历一棵二叉树的常用方式
  - 前序遍历: 根 -> 左 -> 右
  - 中序遍历: 左 -> 根 -> 右
  - 后序遍历: 左 -> 右 -> 根

### 代码实现

```ts
TODO...
```

## 题目

递归方法

- 二叉树的最大深度
- 平衡二叉树
- 二叉树的直径
- 翻转二叉树
- 合并二叉树
- 判断路径和是否等于一个数
- 统计路径和等于一个数的路径数量
- 另一个树的子树
- 对称二叉树
- 二叉树的最小深度
- 统计左叶子节点的和
- 相同节点值的最大路径长度
- 找出二叉树中第二小的节点
- 间隔遍历「 打家劫舍 III 」

使用 BFS 进行层次遍历

- 二叉树的层平均值
- 找树左下角的值

使用 DFS 实现前中后序遍历

- 二叉树的前序遍历
- 二叉树的后序遍历
- 二叉树的中序遍历

二叉查找树

- 验证二叉搜索树
- 修剪二叉搜索树
- 二叉搜索树中第 K 小的元素
- 把二叉搜索树转换为累加树
- 二叉搜索树的最近公共祖先
- 二叉树的最近公共祖先
- 将有序数组转换为二叉搜索树
- 有序链表转换二叉搜索树
- 两数之和 IV - 输入 BST
- 二叉搜索树的最小绝对差
- 二叉搜索树中的众数

前缀树或字典树

- 实现 Trie (前缀树)
