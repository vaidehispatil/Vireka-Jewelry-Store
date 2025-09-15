import React from "react";

export default function GreetingList() {
  const greetings = ["Hello", "Namaste", "Welcome", "स्वागत"];
  const users = ["Vaidehi", "Lathika", "Sneha", "Sakshi"];

  return (
    <section className="greeting-section">
      {users.map((user, i) => (
        <div key={user} className="greeting-item">
          {greetings[i % greetings.length]} {user}
        </div>
      ))}
    </section>
  );
}