# OOP System Thinking Applied to AI Workflows

This project demonstrates how object-oriented programming (OOP) concepts map to real-world systems, specifically AI tools and multi-device development workflows.

## Core Idea

Instead of using abstract examples like "Car" or "Dog," this project models OOP concepts using tools I actively use:

- AI chat systems (Claude)
- Local development environments (MacBook, Mac mini)
- Cloud synchronization (GitHub)

## Key Concepts

### 1. Class vs Object

- **Class** = Blueprint (structure + behavior)
- **Object** = Instance (unique state + shared structure)

Example: Each AI conversation is an object created from a shared Conversation class.

---

### 2. State vs Structure

All objects share the same structure (attributes), but each has different values (state).

Example: Two conversations may both have a `timestamp` attribute, but each stores a different value.

---

### 3. Composition

A `Project` object contains multiple `Conversation` objects.

This demonstrates how objects can interact and form larger systems.

---

### 4. Inheritance

Extended tools (like AI coding environments) behave like subclasses: They reuse the base structure but add new functionality.

---

## Real-World Workflow Mapping

A key insight came from working across devices:

- MacBook → development node
- GitHub → synchronization layer
- Mac mini → execution node

In OOP terms:

- Codebase = Class
- Each environment = Object
- Each environment has its own state at runtime

---

## Why This Matters

This approach shifts OOP from:

> Syntax → System Design

Understanding OOP this way helps explain:

- How AI systems scale
- How cloud environments stay consistent
- Why instances remain isolated

---

## Cloud & AI System Mapping

This demo reflects patterns used in modern cloud and AI systems:

- Each conversation instance behaves like an isolated compute unit (AWS Lambda)
- The shared class structure mirrors reusable service definitions (microservices)
- State isolation reflects stateless vs stateful architecture patterns
- Project grouping reflects service orchestration and multi-model routing layers

---

## Live Demo

Open `web/index.html` in a browser to interact with the system. Create multiple conversation instances and observe how each maintains independent state while sharing the same class logic.

---

## Diagram Overview

See `/diagrams` for system visualizations.

---

## Author

Timothy I. Wheels
