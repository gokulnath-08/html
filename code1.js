const { TransactionProcessor } = require('sawtooth-sdk/processor');

const FAMILY_NAME = 'hello_world';
const FAMILY_VERSION = '1.0';
const PREFIX = require('crypto').createHash('sha512').update(FAMILY_NAME).digest('hex').slice(0, 6);

const handler = (transaction, context) => {
  console.log(`Received transaction: ${transaction.header.signerPublicKey}`);
  const payload = transaction.payload.toString();
  console.log(`Payload: ${payload}`);
  return Promise.resolve().then(() => {
    console.log("Transaction successfully processed.");
  });
};

const processor = new TransactionProcessor('tcp://localhost:4004');

processor.addHandler(handler, [PREFIX]);

processor.start();

console.log(`Transaction processor for family ${FAMILY_NAME} version ${FAMILY_VERSION} started.`);
