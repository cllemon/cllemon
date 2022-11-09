---
title: 链表
description: 链表
date: 2020-01-01
lang: "简体中文"
source: "原创"
tags:
  - "数据结构与算法#000#ffff"
  - "链表"
---

## 概念说明

- 与`数组`相似`链表`也是一种`线性数据结构`，`链表`分配内存空间灵活，它不像`数组`一样被分配一块连续的内存
- 在`数组`中插入新值时必须对`数组`中的插入位置之后的元素逐个移动，有一定的开销
- `链表`通常由一连串节点组成
- `链表`节点包含任意的数据和一或两个用来指向上一个或下一个节点的链接地址
- `链表`的类型：单向链表，双向链表以及循环链表。

## 代码实现

```ts
export class SinglyLinkedListNode<T = any> {
  public data: T;
  public next: null | SinglyLinkedListNode<T> = null;
  constructor(data: T) {
    this.data = data;
  }
}

export class DoublyLinkedListNode<T = any> {
  public data: T;
  public next: null | DoublyLinkedListNode<T> = null;
  public previous: null | DoublyLinkedListNode<T> = null;
  constructor(data: T) {
    this.data = data;
  }
}
```

### 单链表

```sh
[data][]--> [data][]--> [data][]--> Null
 <HEAD>
```

```ts
export class SinglyLinkedList {
  public len: number = 0;
  public head: null | SinglyLinkedListNode = null;

  // 添加节点
  add<T>(data: T) {
    const node = new SinglyLinkedListNode<T>(data);
    let head = this.head;

    if (!this.len) {
      this.head = node;
    } else {
      while (head.next) {
        head = head.next;
      }

      head.next = node;
    }

    this.len += 1;
    return node;
  }

  // 查找节点
  search(position: number) {
    if (!this.len || position >= this.len || position < 0) {
      throw new Error("查找异常，不存在该节点！");
    }

    let head = this.head;
    let count = 0;
    while (count < position) {
      head = head!.next;
      count++;
    }

    return head;
  }

  delete(position: number) {
    if (!this.len || position < 0 || position >= this.len) {
      throw new Error("删除异常，不存在该节点！");
    }

    let deletedNode = null;
    let head = this.head;
    if (position === 0) {
      this.head = head!.next;

      deletedNode = head;
    } else {
      let count = 0;
      let node = null;
      while (count < position) {
        node = head;
        head = head!.next;

        count++;
      }
      node!.next = head!.next;
      deletedNode = head;
    }

    this.len -= 1;
    return deletedNode;
  }
}
```

### 双链表

```sh
Null <--[][a][]<==>[][b][]<==>[][c][]--> Null
        <HEAD>                 <Tail>
```

```ts
class DoublyLinkedList {
  public len: number = 0;
  public head: null | DoublyLinkedListNode = null;
  public tail: null | DoublyLinkedListNode = null;

  // 添加节点
  add<T>(data: T) {
    const node = new DoublyLinkedListNode<T>(data);

    if (!this.len) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.len += 1;
    return node;
  }

  // 查找节点
  search(position: number) {
    if (!this.len || position >= this.len || position < 0) {
      throw new Error("查找异常，不存在该节点！");
    }

    let head = this.head;
    let count = 0;
    while (count < position) {
      head = head!.next;
      count++;
    }

    return head;
  }

  // 删除节点
  delete(position: number) {
    if (!this.len || position < 0 || position >= this.len) {
      throw new Error("删除异常，不存在该节点！");
    }

    let deletedNode = null;
    let head = this.head;
    if (position === 0) {
      this.head = head!.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }

      deletedNode = head;
    } else if (position === this.len - 1) {
      deletedNode = this.tail;

      this.tail = this.tail!.previous;
      this.tail!.next = null;
    } else {
      let count = 0;
      while (count < position) {
        head = head!.next;
        count++;
      }
      deletedNode = head;

      const preNode = head!.previous;
      const nextNode = head!.next;

      preNode!.next = nextNode;
      nextNode!.previous = preNode;
    }

    this.len -= 1;
    return deletedNode;
  }
}
```

## 题目

- 相交链表
- 反转链表
- 合并两个有序链表
- 删除排序链表中的重复元素
- 回文链表
- 删除链表的倒数第 N 个节点
- 两两交换链表中的节点
- 两数相加 II
- 分隔链表
- 奇偶链表
