---
name: code-tutorial-generator
description: "分析代码并生成类似 claude-harness 中文版深度剖析风格的技术教程"
searchHint: "code analysis tutorial documentation chinese"
---

# 代码分析教程生成器

## 技能说明

当用户需要分析代码库时，此技能将生成类似 claude-harness 项目中文版文章风格的技术教程。

---

## 触发方式

用户可以说：
- "请用 SKILL.md 的风格帮我分析 XXX 模块"
- "生成一篇类似 claude-harness 风格的代码分析教程"
- "分析这个代码库并写一篇深度教程"

---

## 教程风格特征

### 结构特征

1. **Frontmatter 元数据**
   ```yaml
   ---
   title: "文章标题：核心主题"
   slug: "xx-module-name"
   part: 1
   order: N
   description: "一句话概述文章内容"
   tags: ["tag1", "tag2", "tag3"]
   readTime: N
   moduleCount: N
   modules: ["file1.ts", "dir/", "file2.ts"]
   ---
   ```

2. **章节分隔**
   - 使用 `---` 分隔不同主题
   - 主要章节：概览 → 核心概念 → 实现细节 → 数据流 → 可迁移模式

3. **递进式展开**
   - 从宏观架构到微观实现
   - 从"为什么"到"是什么"再到"怎么做"

### 视觉呈现

1. **Mermaid 图表**（按需使用）
   - `flowchart TD`：展示流程、决策树、架构关系
   - `sequenceDiagram`：展示时序交互
   - `stateDiagram-v2`：展示状态转换
   - `classDiagram`：展示类型关系

2. **代码引用格式**
   ```typescript
   // src/QueryEngine.ts:184-207
   export class QueryEngine {
     private config: QueryEngineConfig
     // 核心对话历史数组，跨轮次持续累积...
     private mutableMessages: Message[]
   }
   ```

3. **表格总结**
   ```markdown
   | 类别 | 技术选择 | 用途 |
   |------|----------|------|
   ```

### 内容组织模式

1. **概览部分**
   - 开篇说明本文定位：是第几篇、前置知识
   - 预告读者收获：理解什么、能做什么
   - 给出核心文件列表和行数

2. **类型/接口讲解**
   - 先给完整类型定义
   - 然后逐字段进行中文注释说明
   - 最后指出设计意图和关键点

3. **流程讲解**
   - 用 mermaid 图展示整体流程
   - 然后分步骤文字说明
   - 配合关键代码片段（带行号引用）

4. **关键设计**
   - 用"注意"引导关键细节
   - 用"为什么"解释设计动机
   - 用对比说明不同方案

5. **文章结尾**
   - "可迁移的工程模式"章节
   - "系列回顾与展望"或"下一篇"链接

---

## 写作风格指南

### 语言特点
- 使用专业但不过度技术化的中文
- 技术术语保留英文原文
- 用反问句引导思考："为什么选择X？"
- 重要概念用**粗体**强调

### 代码注释风格
```typescript
// 单行注释：简短说明字段用途

// 多行注释：
// 第一行：核心说明
// 第二行：补充细节
// 第三行：设计意图或注意事项
```

### 交叉引用格式
```markdown
如果你对 X 感兴趣？ --> [第 NN 篇：文章名](/articles/xx-yy)
```

---

## 工作流程

当用户请求代码分析时：

1. **首先理解范围**
   - 确定要分析的核心模块/文件
   - 理解模块在整个系统中的位置

2. **探索代码结构**
   - 使用 Glob/Grep 查找相关文件
   - 阅读关键文件理解实现
   - 识别核心类型、函数、流程

3. **生成教程内容**
   - 按上述风格特征组织内容
   - 确保代码引用包含准确路径和行号
   - 添加适当的 mermaid 图表
   - 提取可迁移的工程模式

4. **输出 MDX 格式**
   - 包含完整的 frontmatter
   - 使用正确的 markdown 语法
   - mermaid 图表用 ```mermaid 包裹

---

## 输出示例结构

```markdown
---
title: "XXX 系统：YYYY"
slug: "xx-module-name"
part: 1
order: N
description: "..."
tags: [...]
readTime: N
moduleCount: N
modules: [...]
---

## 概览

[开篇说明本文定位和读者收获]

---

## 核心概念

[类型定义、接口说明]

---

## 实现细节

[具体实现、关键代码]

---

## 数据流/执行流程

[mermaid 图 + 文字说明]

---

## 可迁移的工程模式

1. 模式名称
   [说明]

---
```
