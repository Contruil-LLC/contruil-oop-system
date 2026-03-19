# Memory Model Diagram

```mermaid
flowchart LR
    A[Class Definition\nLoaded Once]

    B1[Object 1\nState: Debugging]
    B2[Object 2\nState: Writing]
    B3[Object 3\nState: Learning]

    A --> B1
    A --> B2
    A --> B3

    B1 --> M1[Memory Block 1]
    B2 --> M2[Memory Block 2]
    B3 --> M3[Memory Block 3]
```

## Explanation

- The **Class Definition** is loaded once into memory and serves as the template.
- Each **Object** is a separate instance with its own state and its own memory allocation.
- This illustrates why changes to one object don't affect others — they occupy independent memory blocks.
