const cardId = document.getElementById("CardsId");
let data = [
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: { parentResourceId: "server-0987" },
  },
  {
    level: "success",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: { parentResourceId: "server-0987" },
  },
  {
    level: "failure",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: { parentResourceId: "server-0987" },
  },
];
const renderCards = (data) => {
  cardId.innerHTML = "";
  data.forEach((card) => {
    const html = `
            <div class="SingleCard">
              <p>level - ${card.level}</p>
              <p>message - ${card.message}</p>
              <p>resourceId - ${card.resourceIdl}</p>
              <p>timestamp - ${card.timestamp}</p>
              <p>traceId - ${card.traceId}</p>
              <p>spanId - ${card.spanId}</p>
              <p>commit - ${card.commit}</p>
              <p>parentResourceId - ${card.metadata.parentResourceId}</p>
            
            </div>
        
        `;
    cardId.insertAdjacentHTML("afterbegin", html);
  });
};
renderCards(data);
