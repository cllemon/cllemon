---
title: 栈和队列
description: 栈和队列
date: 2019-12-15
lang: "简体中文"
source: "原创"
tags:
  - "数据结构与算法#000#ffff"
  - "栈"
  - "队列"
---

## 概念说明

- `后进先出`的线性数据结构 -- `堆栈`（ `Stack` ）
- `先进先出`的线性数据结构 -- `队列`（ `Queue` ）

> JavaScript 内置了 `Stack` 和 `Queue` 的实现 `Array`

## 代码实现

### Stack

```sh
-------------------
① ② ③ ④ ⑤ ⑥ ⑦
-------------------
# 压栈 ❽ ❾ 弹出 ❾
```

```ts
class Stack<V = unknown> {
  public size: number = 0;
  public pipe: Record<number, V> = {};

  // 压栈
  push(data: V) {
    this.pipe[this.size] = data;
    this.size++;
  }

  // 从顶层弹出
  pop() {
    if (this.size) {
      const deleted = this.pipe[this.size - 1];
      delete this.pipe[this.size - 1];
      this.size--;

      return deleted;
    }
  }
}
```

### Queue

```sh
-------------------
① ② ③ ④ ⑤ ⑥ ⑦
-------------------
# 入列 ❽ ❾ 出列 ①
```

```ts
class Queue<V = unknown> {
  public first: number = 0;
  public last: number = 0;
  public pipe: Record<number, V> = {};

  get size() {
    return this.last - this.first;
  }

  // 入列
  enqueue(data: V) {
    this.pipe[this.last] = data;
    this.last++;
  }

  // 出列
  dequeue() {
    if (this.size) {
      const deleted = this.pipe[this.first];

      delete this.pipe[this.first];
      this.first++;

      return deleted;
    } else {
      this.first = 0;
      this.last = 0;
    }
  }
}
```

## 题目

- 用队列实现栈
- 最小栈
- 用栈实现队列
- 有效的括号
- 数组中元素与下一个比它大的元素之间的距离
- 下一个更大元素 II

## 参考

[Algorithems，4th Edition -- stack & queue](https://algs4.cs.princeton.edu/13stacks/)
