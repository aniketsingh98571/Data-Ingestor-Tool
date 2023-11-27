const fs = require('fs');
const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  const generateRandomRecord = () => ({
    level: 'failure',
    message: 'Failed to connect to DB',
    resourceId: `server-${Math.floor(Math.random() * 9000) + 1000}`,
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toISOString(),
    traceId: generateRandomString(36),
    spanId: `span-${Math.floor(Math.random() * 900) + 100}`,
    commit: generateRandomString(40),
    metadata: { parentResourceId: `server-${Math.floor(Math.random() * 9000) + 1000}` }
  });
  
  const generateRecords = () => {
    const records = [];
    for (let i = 0; i < 1000000; i++) {
      records.push(generateRandomRecord());
    }
    return records;
  };
  
  const records = generateRecords();
  
  // Save the generated records to a JSON file
  fs.writeFileSync('generated_records.json', JSON.stringify(records, null, 2));
  
  console.log('Generated 10,000 records. Check "generated_records.json".');
  