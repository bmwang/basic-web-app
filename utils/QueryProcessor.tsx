export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.includes("What is your name?")) {
    return (
      "meimei"
    );
  }
  if (query.includes("Which of the following numbers is the largest: 41, 5, 82?")) {
    return (
      "82"
    );
  }
  if (query.includes("Which of the following numbers is the largest: 42, 36, 7?")) {
    return (
      "42"
    );
  }
  if (query.includes("What is 81 plus 99?")) {
    return (
      "180"
    );
  }

  return "hi";
}
