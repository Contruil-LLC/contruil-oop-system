class Conversation:
    def __init__(self, topic):
        self.topic = topic
        self.history = []

    def send_message(self, msg):
        response = f"[{self.topic}] {msg}"
        self.history.append(response)
        return response


class CodeConversation(Conversation):
    """Subclass that adds code execution tracking."""
    def __init__(self, topic):
        super().__init__(topic)
        self.code_snippets = []

    def run_code(self, code):
        self.code_snippets.append(code)
        return f"[{self.topic}] Executed: {code}"


class Project:
    def __init__(self, name):
        self.name = name
        self.conversations = []

    def add(self, convo):
        self.conversations.append(convo)

    def summary(self):
        print(f"\n--- Project: {self.name} ---")
        for convo in self.conversations:
            print(f"  Topic: {convo.topic} | Messages: {len(convo.history)}")


# Demo
if __name__ == "__main__":
    # Create instances (objects) from the Conversation class
    chat1 = Conversation("Debugging")
    chat2 = Conversation("Writing")
    chat3 = CodeConversation("AI Lab")

    # Each object maintains its own state
    chat1.send_message("Fix loop issue")
    chat2.send_message("Draft essay")
    chat3.send_message("Build classifier")
    chat3.run_code("model.fit(X, y)")

    # Composition: Project contains multiple Conversation objects
    project = Project("AI Workflow")
    project.add(chat1)
    project.add(chat2)
    project.add(chat3)

    # Output
    print("Chat 1 history:", chat1.history)
    print("Chat 2 history:", chat2.history)
    print("Chat 3 history:", chat3.history)
    print("Chat 3 code:", chat3.code_snippets)

    project.summary()
