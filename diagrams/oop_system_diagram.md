# OOP System Diagram

```mermaid
flowchart TD
    A[Conversation Class\nBlueprint] --> B1[Chat Object 1\n- Debugging]
    A --> B2[Chat Object 2\n- Writing]
    A --> B3[Chat Object 3\n- Learning]

    P[Project Object] --> B1
    P --> B2
    P --> B3

    A --> C[CodeConversation Subclass]

    C --> D[Code Execution Features]
```

## Explanation

- **Conversation Class** is the blueprint that defines shared structure (topic, history, methods).
- **Chat Objects 1–3** are instances, each with unique state (Debugging, Writing, Learning).
- **Project Object** demonstrates composition — it contains references to multiple Conversation objects.
- **CodeConversation Subclass** shows inheritance — it extends Conversation with code execution capabilities.
