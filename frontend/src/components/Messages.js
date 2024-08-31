// src/components/Messages.js
import React, { useState, useEffect, useRef } from "react";

// Dummy data fetching function (replace with actual API call)
const fetchConversations = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe", lastMessage: "Hey, how are you?" },
        { id: 2, name: "Jane Smith", lastMessage: "Let's meet tomorrow!" },
        { id: 3, name: "Emily Johnson", lastMessage: "Can you review my project?" },
      ]);
    }, 1000);
  });
};

// Dummy data fetching function (replace with actual API call)
const fetchMessages = (conversationId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Hello!", sender: "John Doe" },
        { id: 2, text: "Hi, how are you?", sender: "You" },
      ]);
    }, 1000);
  });
};

// Dummy function for sending messages (replace with actual API call)
const sendMessage = (conversationId, message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Date.now(), text: message, sender: "You" });
    }, 500);
  });
};

// Dummy function to simulate typing (replace with actual typing notifications)
const simulateTyping = (conversationId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ typing: true });
    }, 1000);
  });
};

function Messages() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [typing, setTyping] = useState(false);

  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetchConversations()
      .then((data) => {
        setConversations(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load conversations.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      setLoading(true);
      fetchMessages(selectedConversation.id)
        .then((data) => {
          setMessages(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load messages.");
          setLoading(false);
        });

      // Simulate typing indicator
      const typingInterval = setInterval(() => {
        simulateTyping(selectedConversation.id).then(({ typing }) => {
          setTyping(typing);
        });
      }, 3000);

      return () => clearInterval(typingInterval);
    }
  }, [selectedConversation]);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (messageText.trim() === "") return;

    setLoading(true);
    sendMessage(selectedConversation.id, messageText)
      .then((newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessageText("");
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to send message.");
        setLoading(false);
      });
  };

  const handleTyping = () => {
    // Simulate typing indicator (Replace with actual typing status update logic)
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setTyping(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen pt-24 bg-gray-50">
      <div className="w-1/3 bg-white shadow-md p-4 border-r border-gray-300">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        {loading && <p>Loading conversations...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul className="space-y-2">
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              onClick={() => handleConversationClick(conversation)}
              className={`p-4 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors ${
                selectedConversation?.id === conversation.id ? "bg-gray-200" : ""
              }`}
            >
              <p className="text-lg font-semibold">{conversation.name}</p>
              <p className="text-gray-600">{conversation.lastMessage}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4 flex flex-col">
        {selectedConversation ? (
          <>
            <h2 className="text-2xl font-bold mb-4">{selectedConversation.name}</h2>
            <div className="flex-1 bg-white p-4 border rounded-lg shadow-inner overflow-y-auto">
              {loading && !messages.length && <p>Loading messages...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {messages.length ? (
                <ul>
                  {messages.map((msg) => (
                    <li
                      key={msg.id}
                      className={`mb-2 ${msg.sender === "You" ? "text-blue-600" : "text-gray-800"}`}
                    >
                      <p>{msg.text}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No messages yet.</p>
              )}
              {typing && <p className="text-gray-500">Someone is typing...</p>}
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                value={messageText}
                onChange={(e) => {
                  setMessageText(e.target.value);
                  handleTyping();
                }}
                className="border border-gray-300 rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Select a conversation to view messages</p>
        )}
      </div>
    </div>
  );
}

export default Messages;
