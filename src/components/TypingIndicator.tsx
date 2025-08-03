interface TypingIndicatorProps {
  usernames: string[];
}

export function TypingIndicator({ usernames }: TypingIndicatorProps) {
  if (usernames.length === 0) return null;

  const displayText = usernames.length === 1 
    ? `${usernames[0]} is typing...`
    : usernames.length === 2
    ? `${usernames[0]} and ${usernames[1]} are typing...`
    : `${usernames[0]} and ${usernames.length - 1} others are typing...`;

  return (
    <div className="typing-indicator">
      <div className="typing-dots">
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
      </div>
      <span className="text-xs text-gray-500 ml-2">{displayText}</span>
    </div>
  );
}
